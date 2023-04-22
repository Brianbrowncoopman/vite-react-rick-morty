import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between">
      <p>Page: {props.page}</p>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary btn-sm rounded"
          onClick={() => props.setPage(props.page - 1)}
        >
          pagina {props.page - 1}
        </button>
        <button
          className="btn btn-primary btn-sm rounded-pill"
          onClick={() => props.setPage(1)}
        >
          pagina inicial
        </button>
        <button
          className="btn btn-primary btn-sm rounded"
          onClick={() => props.setPage(props.page + 1)}
        >
          pagina {props.page + 1}
        </button>
      </div>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      ); //trae listado de personasjes
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4 " key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
