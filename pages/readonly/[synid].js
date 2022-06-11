import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Markdown from 'react-markdown';

import { getSynopsisById } from 'services/synopsis.service';

import styles from './readonly.module.scss';

export const getServerSideProps = async ({ params }) => {
  const synId = params.synid;

  const res = await getSynopsisById(synId);

  let synopsis = res.data.synopsis;
  let book = res.data.book;

  if (!synopsis.public) {
    synopsis = {
      description: '#### This work is not public'
    }

    book = {
      title: '',
      author: ''
    }
  }

  return {
    props: {
      synopsis,
      book
    }
  }
}

const ReadOnly = ({ synopsis, book }) => {
  return (
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

      <Row className="mt-3">
        <Col className={styles.synComponent}>
          <div className={styles.synMd + ' h-100'}>
            <Markdown>{synopsis.description}</Markdown>
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default ReadOnly;
