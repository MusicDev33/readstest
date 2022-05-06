import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './book-view.module.scss';

const BookView = ({book}) => {
  return (
    <div>
      <div className={styles.titleCard}>
        <Container>
          <Row>
            <Col>
              <span className={styles.title}>{book.title}</span>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={styles.author}>by {book.author}</div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <textarea className={styles.descText}></textarea>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BookView;
