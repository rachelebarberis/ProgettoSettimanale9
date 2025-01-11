import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import NetflixHeader from "./Components/NetflixHeader";
import NetflixFilm from "./Components/NetflixFilm";

function App() {
  return (
    <>
      <NetflixNav />
      <NetflixHeader />
      <NetflixFilm searchKey="Avengers" />
      <NetflixFilm searchKey="Indiana Jones" />
      <NetflixFilm searchKey="Harry Potter" />
      <NetflixFooter />
    </>
  );
}

export default App;
