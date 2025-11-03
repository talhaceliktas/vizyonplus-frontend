import { rapidApidenFilmleriGetir } from "../../../_lib/data-service-server";
import type { Movie } from "../../../types";
import YakindakiFilm from "./YakindakiFilm";

const YakindakiFilmler = async () => {
  const movies = await rapidApidenFilmleriGetir();

  return (
    <div className="bg-primary-700/15 grid gap-x-10 gap-y-20 p-10 md:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie: Movie) => (
        <YakindakiFilm movie={movie} key={movie.imdbid} />
      ))}
    </div>
  );
};

export default YakindakiFilmler;
