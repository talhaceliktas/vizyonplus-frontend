import { rapidApidenFilmleriGetir } from "../../_lib/data-service-server";
import TheatersSlider from "./TheatersSlider";

const TheatersBox = async () => {
  const movies = await rapidApidenFilmleriGetir();

  return (
    <div className="p-4">
      <TheatersSlider movies={movies} />
    </div>
  );
};

export default TheatersBox;
