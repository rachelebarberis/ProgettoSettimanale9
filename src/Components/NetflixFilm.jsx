/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const URL = "https://www.omdbapi.com/?apikey=90251c4f&s=";

class NetflixFilm extends Component {
  state = {
    search: [],
  };

  functionFilm = async (searchKey) => {
    try {
      const response = await fetch(URL + searchKey);
      if (response.ok) {
        const data = await response.json();
        const show = data.Search.slice(0, 6);
        if (data.Search) {
          this.setState({
            search: show,
          });
        } else {
          console.log("Nessun risultato trovato.");
        }
      } else {
        throw new Error("Errore nel recupero dati API");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    const { searchKey } = this.props;
    this.functionFilm(searchKey);
  }

  render() {
    return (
      <Container fluid={true} className="bg-dark">
        <Row className="justify-content-center">
          <h2 className="text-secondary">Guarda Ora</h2>
          {this.state.search.map((film) => (
            <Col sm={4} lg={2} key={film.imdbID} className="mb-4">
              <img src={film.Poster} alt={film.Title} className="img-fluid" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default NetflixFilm;
