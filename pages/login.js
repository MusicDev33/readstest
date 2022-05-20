import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <input type="password" className="md-form-1 mt-5" placeholder="Enter Password" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
