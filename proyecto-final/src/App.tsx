import { useEffect, useState } from "react";
import "./App.scss";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<Cat[]>([]);
  const [favoritosCargados, setFavoritosCargados] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [cargandoMas, setCargandoMas] = useState(false);
  const [hoverFavorito, setHoverFavorito] = useState("");

  const alternarFavorito = (cat: Cat) => {
    setFavorites((favoritosActuales) => {
      const esFavorito = favoritosActuales.some(
        (favorito) => favorito.id === cat.id,
      );

      if (esFavorito) {
        return favoritosActuales.filter((favorito) => favorito.id !== cat.id);
      } else {
        return [...favoritosActuales, cat];
      }
    });
  };

  const cargarMasGatos = () => {
    setCargandoMas(true);
    setPagina(pagina + 1);
  };

  useEffect(() => {
    const obtenerGatos = async () => {
      try {
        const respuesta = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=9&page=${pagina}`,

          {
            headers: {
              "x-api-key": import.meta.env.VITE_CAT_API_KEY,
            },
          },
        );

        if (!respuesta.ok) {
          throw new Error("Error en la petición");
        }

        const datos = await respuesta.json();

        setCats((gatosActuales) => [...gatosActuales, ...datos]);
        setLoading(false);
        setCargandoMas(false);
      } catch (error) {
        setError("Error al obtener los gatos");
        setLoading(false);
        setCargandoMas(false);
      }
    };

    obtenerGatos();
  }, [pagina]);

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem("favorites");

    if (favoritosGuardados) {
      setFavorites(JSON.parse(favoritosGuardados));
    }

    setFavoritosCargados(true);
  }, []);

  useEffect(() => {
    if (favoritosCargados) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, favoritosCargados]);

  return (
    <div className="app">
      <h1 className="titulo">Cat Gallery</h1>

      <p className="contador-favoritos">Favoritos: {favorites.length}</p>

      <h2 className="subtitulo">Mis favoritos</h2>

      <div className="galeria-favoritos">
        {favorites.map((cat) => (
          <div className="tarjeta-favorito" key={cat.id}>
            <img className="imagen-gato" src={cat.url} alt="Gato favorito" />
            <button
              className="boton-eliminar"
              onClick={() => alternarFavorito(cat)}
            >
              <span className="icono-eliminar">×</span> Eliminar de favoritos
            </button>
          </div>
        ))}
      </div>

      {loading ? (
        <p>Cargando gatos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="galeria-gatos">
          {cats.map((cat) => (
            <div className="tarjeta-gato" key={cat.id}>
              <img className="imagen-gato" src={cat.url} alt="Gato" />
              <button
                className="boton-favorito"
                onClick={() => alternarFavorito(cat)}
                onMouseEnter={() => setHoverFavorito(cat.id)}
                onMouseLeave={() => setHoverFavorito("")}
              >
                {favorites.some((favorito) => favorito.id === cat.id) ||
                hoverFavorito === cat.id
                  ? "♥"
                  : "♡"}
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="boton-mas"
        onClick={cargarMasGatos}
        disabled={cargandoMas}
      >
        {cargandoMas ? "Cargando..." : "Ver más gatos"}
      </button>
    </div>
  );
}
export default App;
