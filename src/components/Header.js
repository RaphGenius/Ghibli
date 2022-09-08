export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container-title">
        <h1 className="navbar-title">Ghibli</h1>
      </div>
      <div className="navbar-container-btn">
        <button className="navbar-btn">Liste des films</button>
        <button className="navbar-btn">Mes coups de coeur</button>
      </div>
    </nav>
  );
}
