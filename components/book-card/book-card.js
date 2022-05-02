import styles from './book-card.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookCard = ({book}) => {
  return (
    <div className={styles.bookCard}>
      <Container className='px-3'>
        <Row>
          <Col>
            <div className={styles.title}>{book.title}</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.author}>{book.author}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookCard;
