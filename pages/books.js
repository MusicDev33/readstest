import { useState, useEffect } from 'react';

import { getLatestBooks } from 'services/book.service';

import BookCard from 'components/book-card/book-card';
import AddBookCard from 'components/add-book-card/add-book-card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { parseCookies } from 'services/auth.service';

export const getServerSideProps = ({ req }) => {
  const cookies = parseCookies(req);

  if (!cookies['auth-token']) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      token: cookies['auth-token']
    }
  }
}

const Books = ({ token }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLatestBooks(30, token);

      if (res.success) {
        setBooks(res.data);
      }
    }

    fetchData();
  }, []);

  return (
    <Container fluid className="px-2">
      <Row>
        {books.map(book => (
          <Col sm={4} className="py-2" key={book.title}>
            <BookCard book={book} token={token} />
          </Col>
        ))}

        <Col sm={4} className="py-2">
          <AddBookCard token={token} />
        </Col>
      </Row>
    </Container>
  )
}

export default Books;
