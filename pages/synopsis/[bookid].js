import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getBookById } from 'services/book.service';
import { getSynopsisByBookId } from 'services/synopsis.service';

import styles from './synopsis.module.scss';

const Synopsis = () => {
  const router = useRouter();
  const { bookid } = router.query;

  const [book, setBook] = useState({
    pages: 0,
    author: '',
    title: '',
    finished: false
  });
  const [synopsis, setSynopsis] = useState({
    bookId: '',
    description: ''
  });

  const getBook = async () => {
    const bookData = await getBookById(bookid);

    console.log(bookData);

    setBook(bookData.data);
  }

  useEffect(() => {

    // @Next, why do I have to do this??? ughhh
    if (router.isReady) {
      getBook();
    }
  }, [router.isReady]);

  return (
    <div>
      <Container>
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

        <Row>
          <Col>
            { bookid }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Synopsis;
