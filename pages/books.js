import { useState, useEffect } from 'react';
import { getLatestBooks } from 'services/book.service';

import BookCard from 'components/book-card/book-card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLatestBooks(30);
      console.log(res);
      setBooks(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {books.map(book => (
            <Col sm={4} className="py-2" key={book.title}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Books;
