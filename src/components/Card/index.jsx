import "./styles.css";

const Card = ({ id, imagem, titulo, resumo, linhasCodigo, compartilhamentos, comentarios, usuario }) => {
    return (
        <article className="card">
            <div className="card__image">
                <img src={imagem} alt="Imagem de capa do card" />
            </div>
            <div className="card__content">
                <div className="content__text">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className="content__footer">
                    <ul>
                        <li>
                            <i className="material-icons">code</i>
                            {linhasCodigo}
                        </li>
                        <li>
                            <i className="material-icons">share</i>
                            {compartilhamentos}
                        </li>
                        <li>
                            <i className="material-icons">chat</i>
                            {comentarios}
                        </li>
                    </ul>
                    <div className="footer__user">
                        <img src={usuario.imagem} alt="Icone de perfil do usuário" />
                        <p>{usuario.nome}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;
