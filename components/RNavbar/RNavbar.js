import styles from './rnavbar.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconContext } from 'react-icons';
import { FaBook, FaUserAlt, FaBookmark } from 'react-icons/fa';

const RNavbar = () => {
  const rowClass = '';

  const router = useRouter();

  return (
    <Container className={styles.rnavbar + ' py-5 px-0'}>
      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/books">
            <a>
              <IconContext.Provider value={{ className: `${styles.navbarIcon} ${router.pathname == '/books' ? styles.active : ''}` }}>
                <FaBook />
              </IconContext.Provider>
            </a>
          </Link>
        </Col>
      </Row>

      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/reads">
            <a>
              <IconContext.Provider value={{ className: `${styles.navbarIcon} ${router.pathname == '/reads' ? styles.active : ''}` }}>
                <FaBookmark />
              </IconContext.Provider>
            </a>
            </Link>
        </Col>
      </Row>

      <Row className={rowClass}>
        <Col className="text-center">
          <Link href="/user">
            <a>
              <IconContext.Provider value={{ className: `${styles.navbarIcon} ${router.pathname == '/user' ? styles.active : ''}` }}>
                <FaUserAlt />
              </IconContext.Provider>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RNavbar;
