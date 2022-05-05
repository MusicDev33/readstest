import { useState, useEffect } from 'react';

import { getReadByBookId, createRead, setReadPagesById } from 'services/reads.service';

import styles from './book-card.module.scss';

import { Col, Container, Row, ProgressBar } from 'react-bootstrap';

const BookCard = ({book}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [read, setRead] = useState();

  // Mutated is whether or not currentPage has been changed.
  const [mutated, setMutated] = useState(false);

  const getRead = async () => {
    const readData = await getReadByBookId(book._id);
    console.log(readData);
    if (readData.success) {
      setRead(readData.data);
      setCurrentPage(readData.data.currentPage);
    }
  }

  const setReadPages = async (currentPage) => {
    if (!read) {
      const res = await createRead(book._id, currentPage);
      console.log(res);

      return;
    }

    const res = await setReadPagesById(book._id, currentPage);
    console.log(res);
  }

  const getPercentage = (page) => {
    const percent = (page / book.pages) * 100;

    return page ? percent : 0;
  }

  useEffect(() => {
    getRead();
  }, []);

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

        <Row className="pb-0 pt-2">
          <Col>
            <ProgressBar now={getPercentage(currentPage)} className={styles.progress} />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <div className="pages text-center">
              <input className={styles.pagesInput} 
                value={currentPage} 
                onChange={e => {
                  setCurrentPage(e.target.value);
                  setMutated(true);
                }}
                onBlur={() => {
                  console.log('blur');
                  if (mutated) {
                    setReadPages(currentPage);
                    setMutated(false);
                  }
                }}
              /> /{book.pages} pages
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookCard;
