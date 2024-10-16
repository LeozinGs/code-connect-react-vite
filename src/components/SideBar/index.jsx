import "./styles.css";
import logo from "./assets/logo.svg";

const SideBar = () => {
  return (
    <aside>
      <img src={logo} alt={"Logo do Code Connect"} />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a className="item__link-publicacao" href="#">
              Publicar
            </a>
          </li>
          <li>
            <a className="item__link item__link--ativo" href="#">
              <i className="material-icons">description</i>
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a className="item__link" href="#">
              <i className="material-icons">account_circle</i>
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a className="item__link" href="#">
              <i className="material-icons">info</i>
              <span>Sobre Nós</span>
            </a>
          </li>
          <li>
            <a className="item__link" href="#">
              <i className="material-icons">logout</i>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
