import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import NetflixHeader from "./Components/NetflixHeader";

function App() {
  return (
    <>
      <NetflixNav />
      <NetflixHeader />
      <NetflixFooter />
    </>
  );
}

export default App;
