import { useState } from "react";
import "./styles.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  return (
    <>
      <input
        className="search-bar"
        type="search"
        placeholder="Digite o que você procura."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchBar;
