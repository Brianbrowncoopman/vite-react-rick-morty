function Character({ character }) {
  return (
    <div className="text-centery p-5">
      <h3 className="text-center bg-dark">{character.name}</h3>
      <h4 className="text-center">{character.status}</h4>
      <h4 className="text-center">{character.species}</h4>
      <h4 className="text-center">{character.gender}</h4>
      <img
        className="img-fluid rounded-pill "
        src={character.image}
        alt={character.name}
      />
      <p className="text-center">{character.origin.name}</p>
      <hr classname="border border-dark border-3 opacity-75" />
    </div>
  );
}

export default Character;
