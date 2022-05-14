import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Markdown from 'react-markdown';

import { getBookById } from 'services/book.service';
import { getSynopsisByBookId, editSynopsisDesc } from 'services/synopsis.service';

import styles from './synopsis.module.scss';

const Synopsis = () => {
  const synInput = useRef(null);
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

  const [synopsisText, setSynopsisText] = useState('');
  const [showMarkdown, setShowMarkdown] = useState(true);

  const getBook = async () => {
    const bookData = await getBookById(bookid);
    setBook(bookData.data);
  }

  const getSynopsis = async () => {
    const synopsisData = await getSynopsisByBookId(bookid);
    setSynopsis(synopsisData.data);
    console.log(synopsisData);
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
                  editSynopsisDesc(bookid, synopsisText);
                }}>
      </textarea>
    );
  }

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

        <Row className="mt-3">
          <Col className={styles.synComponent}>
            {synComponent}
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Synopsis;
