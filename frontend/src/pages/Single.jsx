import { Link } from "react-router-dom";

import Menu from "../components/Menu";

import User from "../assets/icons/user-default.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
          alt="article"
        />
        <div className="user">
          <img src={User} alt="user" />
          <div className="info">
            <span>Yiroma</span>
            <p>Publié il y a 2 jours</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=1">
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laudantium obcaecati
          odio in numquam debitis beatae earum accusantium nostrum pariatur id voluptatem sed, totam
          asperiores autem, natus veniam adipisci et necessitatibus error rerum eum a! Molestias{" "}
          <br />
          <br />
          molestiae perspiciatis nam cumque reiciendis, minus quaerat mollitia? Reprehenderit enim
          recusandae illum error ipsum consectetur adipisci dolore vel accusantium sint laborum
          commodi ut eius minima exercitationem ipsa ratione soluta corrupti minus veniam expedita,
          culpa iusto porro? Enim ex aspernatur eveniet animi. Enim consectetur perspiciatis ea id!
          Aliquid reiciendis sint quas temporibus consectetur sunt minima! Natus, doloremque dicta
          aspernatur veritatis sapiente deleniti officiis laudantium odit accusantium quisquam
          voluptatum at, illum excepturi voluptatem odio dolorem nam. Consequatur hic consectetur
          temporibus. A enim tempora quas voluptate ipsa facere perspiciatis pariatur deserunt
          expedita dolores, corrupti consectetur cum. Sint amet nemo pariatur, adipisci, tenetur est
          rem necessitatibus beatae facere, laudantium maxime molestias commodi a fugiat recusandae!
          Numquam commodi repudiandae libero eveniet illo <br />
          <br />
          excepturi facilis blanditiis soluta quae recusandae? Neque dolorum porro, voluptates
          provident sunt quibusdam vero blanditiis vel saepe a possimus, numquam nesciunt aut
          corporis iste distinctio deleniti aliquam laborum sit consequuntur voluptatum. Error eaque
          aliquid reprehenderit numquam nostrum odio quidem corrupti, pariatur id. Laudantium
          repellat nihil mollitia officia accusamus deserunt animi, autem ullam excepturi dolores
          dolorem placeat cum delectus! Sunt repellat placeat veritatis nulla minima voluptas? Odit
          minima recusandae quam eum voluptates obcaecati necessitatibus nemo adipisci quae
          repellendus, neque nisi nobis quos! Obcaecati delectus repellat aliquam, debitis
          reiciendis hic, incidunt natus dicta in voluptatem omnis. Eos, nam, consectetur earum
          distinctio doloribus aut explicabo aperiam quod et aspernatur odit, dolorem quae
          exercitationem quia sequi maxime iure cum facilis hic? Ipsam unde incidunt fugit modi
          tempora vitae, asperiores laudantium, in accusamus voluptatibus perspiciatis qui
          voluptatum cum. Error quibusdam hic saepe ratione. Odit aut ab perspiciatis dolor nostrum
          ut autem sed?
        </p>
      </div>
      <Menu />
    </div>
  );
}
