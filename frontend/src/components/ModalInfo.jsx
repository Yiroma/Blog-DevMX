import { useEffect, useState } from "react";

export default function Modal({ message, image, closeModal }) {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        closeModal();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="information" />
        <p className="msg">{message}</p>
        <p className="return">{`Retour à l'accueil dans ${timeLeft} seconde.`}</p>
      </div>
    </div>
  );
}
