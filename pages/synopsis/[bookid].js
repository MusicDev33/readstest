import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getBookById } from 'services/book.service';
import { getSynopsisByBookId } from 'services/synopsis.service';

const Synopsis = () => {
  const router = useRouter();
  const { bookid } = router.query;

  const [book, setBook] = useState();
  const [synopsis, setSynopsis] = useState();

  const getBook = async () => {
    const bookData = await getBookById(bookid);

    console.log(bookData);
  }

  useEffect(() => {

    if (bookid) {
      getBook();
    }
  });

  return (
    <div>
      <Container>
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
