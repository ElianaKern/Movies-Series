import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>App con Ruteo</h1>
        <Routes>
          <Route path="/" element="{<Home/>}" />

          <Route path="/tv" element="{<Tv/>}" />
          <Route
            path="/tv/tendencia/page/:nroPage"
            element="{<TvTendencias/>}"
          />
          <Route
            path="/tv/populares/page/:nroPage"
            element="{<TvPopulares/>}"
          />
          <Route path="/tv/top_rated/page/:nroPage" element="{<TvTop/>}" />
          <Route path="/tv/enAire/page/:nroPage" element="{<TvEnAire/>}" />

          <Route path="/tv/:idTv/info" element="{<TvInfo/>}" />
          <Route
            path="/tv/:idtv/temporada/:nroTemporada"
            element="{<TvTemporada/>}"
          />
          <Route path="/tv/:idtv/reparto" element="{<TvReparto/>}" />
          <Route path="/tv/:idtv/similares" element="{<TvSimilares/>}" />


          <Route
            path="/search/multi/:nameMovieTv/page/:nroPage"
            element="{<Busqueda/>}"
          />
          

          <Route path="/movie" element="{<Movie/>}" />
          <Route
            path="/movie/tendencia/page/:nroPage"
            element="{<MovieTendencias/>}"
          />
          <Route
            path="/movie/popular/page/:nroPage"
            element="{<MoviePopulares/>}"
          />
          <Route
            path="/movie/top_rated/page/:nroPage"
            element="{<MovieTop/>}"
          />
          <Route
            path="/movie/estreno/page/:nroPage"
            element="{<MovieEstrenos/>}"
          />
          <Route
            path="/movie/enCine/page/:nroPage"
            element="{<MovieEnCine/>}"
          />

          <Route path="/movie/:idMovie/info" element="{<MovieInfo/>}" />
          <Route path="/movie/:idMovie/reparto" element="{<MovieReparto/>}" />
          <Route path="/movie/:idMovie/videos" element="{<MovieVideos/>}" />
          <Route
            path="/movie/:idMovie/similares"
            element="{<MovieSimilares/>}"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
