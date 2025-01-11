import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const EditProfile = () => {
  return (
    <Container fluid className="bg-dark text-white py-5">
      <Row>
        <h4 className="text-secondary">Edit Profile</h4>
        <hr className="text-secondary" />
        <Col xs={12} md={4}>
          <div className="text-center">
            <img src="assets/avatar.png" alt="Avatar" className="w-50" />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <Form>
            <FormControl
              type="text"
              placeholder="Enter name"
              className="bg-secondary rounded-0 mt-3"
            />

            <div className="my-4">
              <h4 className="text-secondary">Language:</h4>
              <DropdownButton
                id="dropdownGenres"
                title="Language"
                variant="secondary"
                className="rounded-0"
              >
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Spanish</Dropdown.Item>
                <Dropdown.Item href="#">Italian</Dropdown.Item>
              </DropdownButton>
            </div>

            <hr className="text-secondary" />

            <div className="my-4">
              <h4>Maturity Settings:</h4>
              <Button variant="dark" className="rounded-0">
                <h6 className="fw-bold">ALL MATURITY SETTINGS</h6>
              </Button>
              <p className="pt-2 text-white">
                Shows files for all maturity settings for this profile
              </p>
              <Button
                variant="outline-secondary"
                className="rounded-0 text-secondary"
              >
                EDIT
              </Button>
            </div>

            <hr className="text-secondary" />

            <h4 className="text-secondary">Autoplay Controls:</h4>
            <Form.Check
              type="checkbox"
              id="autoplay1"
              label="Autoplay next episode in a series on all devices"
              className="mt-2"
            />
            <Form.Check
              type="checkbox"
              id="autoplay2"
              label="Autoplay previews while browsing on all devices"
              defaultChecked
              className="mt-2"
            />

            <hr className="text-secondary" />

            <div className="d-lg-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="rounded-0 my-1 mx-lg-2"
              >
                Save
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 my-1 mx-lg-2"
              >
                Cancel
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 my-1 mx-lg-2"
              >
                Delete Profile
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
