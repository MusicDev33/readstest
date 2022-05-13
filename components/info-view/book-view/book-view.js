import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormControl from 'react-bootstrap/FormControl';

import styles from './book-view.module.scss';

import { changeBookAttr } from 'services/book.service';

// TODO: Add some kind of indicator for sending data to the server, 
// that way I know if the request has been sent for changing the author name etc.
const BookView = ({book}) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const [titleMutated, setTitleMutated] = useState(false);
  const [authorMutated, setAuthorMutated] = useState(false);

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
  }, [book])
  
  return (
    <div>
      <div className={styles.titleCard}>
        <Container>
          <Row>
            <Col>
              <FormControl className={`${styles.changeForm} ${styles.title}`} value={title} 
                onChange={e => {
                  setTitle(e.target.value);
                  setTitleMutated(true);
                }}

                onBlur={() => {
                  // Send new title to server
                  if (titleMutated) {
                    changeBookAttr(book._id, 'title', title);
                    setTitleMutated(false);
                  }
                }} />
            </Col>
          </Row>

          <Row>
            <Col>
              <span className={styles.author}>
                <FormControl className={`${styles.changeForm} ${styles.author}`} value={author} 
                  onChange={e => {
                    setAuthor(e.target.value);
                    setAuthorMutated(true);
                  }} 
                  
                  onBlur={() => {
                    // send new author name to server
                    if (authorMutated) {
                      changeBookAttr(book._id, 'author', author);
                      setAuthorMutated(true);
                    }
                  }}
                  />
              </span>
            </Col>
          </Row>

          <Row className="my-2">
            <Col>
              <button className="md-btn-1 w-100">Open Synopsis</button>
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
