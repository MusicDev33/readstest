import RNavbar from "components/RNavbar/rnavbar";

import styles from './layout.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = ({ children }) => {
  return (
    <Container fluid className={styles['app-container']}>
      <Row className="h-100">
        <Col md={1} className="px-4 py-5">
          <RNavbar />
        </Col>

        <Col md={9}>
          <main>{children}</main>
        </Col>
      </Row>
    </Container>
  )
}
