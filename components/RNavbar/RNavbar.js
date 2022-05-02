import styles from './rnavbar.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Link from 'next/link';

import { IconContext } from 'react-icons';
import { FaBook, FaUserAlt, FaBookmark } from 'react-icons/fa';

const RNavbar = () => {
  const rowClass = '';

  return (
    <Container className={styles.rnavbar + ' py-5 px-0'}>
      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/books">
            <IconContext.Provider value={{ className: styles.navbarIcon }}>
              <FaBook />
            </IconContext.Provider>
          </Link>
        </Col>
      </Row>

      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/reads">
            <IconContext.Provider value={{ className: styles.navbarIcon }}>
              <FaBookmark />
            </IconContext.Provider>
          </Link>
        </Col>
      </Row>

      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/user">
            <IconContext.Provider value={{ className: styles.navbarIcon }}>
              <FaUserAlt />
            </IconContext.Provider>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RNavbar;
