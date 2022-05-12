import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormControl from 'react-bootstrap/FormControl';

import styles from './book-view.module.scss';

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
                  setTitleMutated(false);
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
                    setAuthorMutated(true);
                  }}
                  />
              </span>
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
