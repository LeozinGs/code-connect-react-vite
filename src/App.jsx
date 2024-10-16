import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Ordenation from "./components/Ordenation";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <SideBar />
      <div>
        <SearchBar />
        <Filter />
        <Ordenation />
        <ul className="cards-list">
          {data
            ? data.map((item, index) => (
              <li key={index}>
                <Card
                  id={item.id}
                  imagem={item.imagem_capa}
                  titulo={item.titulo}
                  resumo={item.resumo}
                  linhasCodigo={item.linhas_de_codigo}
                  compartilhamentos={item.compartilhamentos}
                  comentarios={item.comentarios}
                  usuario={item.usuario}
                />
              </li>
            ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
