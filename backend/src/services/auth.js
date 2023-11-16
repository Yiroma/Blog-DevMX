const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "hash failed" });
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        delete req.user.hashedPassword;

        res.status(200).send({ token, user: req.user });
      } else {
        res.status(401).json("Les informations sont invalides. ");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_SECRET,
      (err, decode) => {
        if (err) {
          res.status(401).send("connectez vous pour acceder au site");
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send("email ou mot de passe incorrect");
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
