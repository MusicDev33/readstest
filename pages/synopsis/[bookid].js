import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Markdown from 'react-markdown';

import { getBookById } from 'services/book.service';
import { getSynopsisByBookId, editSynopsisDesc } from 'services/synopsis.service';

import styles from './synopsis.module.scss';

import { parseCookies } from 'services/auth.service';

export const getServerSideProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    props: {
      token: cookies['auth-token']
    }
  }
}

const Synopsis = ({ token }) => {
  const router = useRouter();
  const { bookid } = router.query;

  const [book, setBook] = useState({
    pages: 0,
    author: '',
    title: '',
    finished: false
  });

  const [synopsisText, setSynopsisText] = useState('');
  const [showMarkdown, setShowMarkdown] = useState(true);

  const getBook = async () => {
    const bookData = await getBookById(bookid, token);
    setBook(bookData.data);
  }

  const getSynopsis = async () => {
    const synopsisData = await getSynopsisByBookId(bookid, token);

    setSynopsisText(synopsisData.data.description);
  }

  useEffect(() => {

    // @Next, why do I have to do this??? ughhh
    if (router.isReady) {
      getBook();
      getSynopsis();
    }
  }, [router.isReady]);

  let synComponent;

  if (showMarkdown) {
    synComponent = (
      <div className={styles.synMd + ' h-100'} 
        onClick={() => {
          setShowMarkdown(false);
      }}>
        <Markdown>{synopsisText}</Markdown>
      </div>
    );
  } else {
    synComponent = (
      <textarea className={styles.synInput + ' h-100'} value={synopsisText} onChange={e => setSynopsisText(e.target.value)}
                onFocus={() => {setShowMarkdown(false)}}
                onBlur={() => {
                  setShowMarkdown(true);
                  editSynopsisDesc(bookid, synopsisText, token);
                }}>
      </textarea>
    );
  }

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
          {synComponent}
        </Col>
      </Row>

    </Container>
  );
}

export default Synopsis;
