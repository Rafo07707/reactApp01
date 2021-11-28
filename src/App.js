import { Col, Container, Row, Image, Alert, Button,NavDropdown, Navbar ,FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <Container> 
  
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"> <Col xs={6} md={4}>
      <Image src="http://mercedesblog.com/wp-content/uploads/2015/02/762977_1391492_800_777_713356_1290705_2592_2519_2001DIG410.jpg" roundedCircle 
      height='30'
      />
    </Col></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Գլխավոր</Nav.Link>
        <Nav.Link href="https://www.mercedes-benz.ru/passengercars/models.html?group=new&subgroup=new.BODYTYPE.saloon&view=BODYTYPE">Գնել</Nav.Link>
        <NavDropdown title="Ծառայություներ" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Բոլորը</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Գրանցվել Սրահում</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Հատուկ Առաջարկ
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Test Drive
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.mercedes-benz.ru/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE">
          Mercedes-Benz-Rus
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="info">Միայն այսօր -5% Զեղջ </Alert>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://uploads-ssl.webflow.com/60e6daa5d209097cc8062516/6151726cefd11521c61ef37a_DSC01014.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mercedes-Benz G-Class 2021</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.allcarz.ru/wp-content/uploads/2020/09/foto-s-class-w223_007.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Mercedes-Benz S-Class 2021</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.motor1.com/images/mgl/Xxrjl/s1/2022-mercedes-benz-eqs-580-edition-one-exterior-front-quarter.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="my-4">
        <Row className="mb-4">
          {[0, 1, 2, 3].map((item) => (
            <Col md="3" xs="6">
              <Card style={{ width: "18rem"}}>
                <Card.Img
                  variant="top"
                  src="https://farainfo.ru/wp-content/uploads/2017/11/3.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-center'>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3].map((item, idx) => (
            <tr>
              <td>{idx}</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
