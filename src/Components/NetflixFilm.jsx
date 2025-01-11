/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

const URL = "https://www.omdbapi.com/?apikey=90251c4f&s=";

class NetflixFilm extends Component {
  state = {
    search: [],
    showModal: false,
    selectedFilm: null,
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

  openModal = (film) => {
    this.setState({
      showModal: true,
      selectedFilm: film,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedFilm: null,
    });
  };

  render() {
    const { showModal, selectedFilm } = this.state;

    return (
      <>
        <Container fluid={true} className="bg-dark">
          <Row className="justify-content-center">
            <h2 className="text-secondary">Guarda Ora</h2>
            {this.state.search.map((film) => (
              <Col sm={4} lg={2} key={film.imdbID} className="mb-3 p-1">
                <img
                  src={film.Poster}
                  alt={film.Title}
                  className="img-fluid h-100"
                  onClick={() => this.openModal(film)}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            ))}
          </Row>
        </Container>

        {this.state.selectedFilm && (
          <Modal show={showModal} onHide={this.closeModal} centered size="sm">
            <Modal.Header closeButton>
              <Modal.Title className="text-center text-secondary">
                {selectedFilm.Title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedFilm.Poster}
                alt={selectedFilm.Title}
                className="img-fluid mb-3"
              />
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  }
}

export default NetflixFilm;
