import RNavbar from "components/rnavbar/rnavbar";
import InfoView from 'components/info-view/info-view';

import styles from './layout.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = ({ children }) => {
  return (
    <Container fluid className={styles['app-container']}>
      <Row className="h-100 pt-4">
        <Col md={1} className="px-4 py-5 d-none d-md-block">
          <RNavbar />
        </Col>

        <Col xs={12} md={8} className="px-0">
          <main>{children}</main>
        </Col>

        <Col className="d-none d-md-block">
          <InfoView />
        </Col>
      </Row>
    </Container>
  )
}
