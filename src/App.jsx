import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import NetflixHeader from "./Components/NetflixHeader";
//import NetflixFilm from "./Components/NetflixFilm";
import NetflixProfile from "./Components/NetflixProfile";

function App() {
  return (
    <>
      <NetflixNav />
      <NetflixHeader />
      {/*<NetflixFilm searchKey="Avengers" />
      <NetflixFilm searchKey="Indiana Jones" />
      <NetflixFilm searchKey="Harry Potter" />*/}
      <NetflixProfile />
      <NetflixFooter />
    </>
  );
}

export default App;
