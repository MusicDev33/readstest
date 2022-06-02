import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';

import { IconContext } from 'react-icons';
import { FaRegCheckCircle, FaCheckCircle } from 'react-icons/fa';

import styles from './add-book-card.module.scss';
import { createOneBook } from 'services/book.service';

const AddBookCard = ({ token, setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isRead, setIsRead] = useState(false);
  const [checkIcon, setCheckIcon] = useState(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);

  const rowClass = 'mt-1';

  useEffect(() => {
    setCheckIcon(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);
  }, [isRead]);


  return (
    <div className={styles.addBookCard}>
      <Container className="px-3">
        <Row className={rowClass}>
          <Col>
            <FormControl placeholder="Title" className={styles.cardInput} value={title} onChange={e => setTitle(e.target.value)} />
          </Col>
        </Row>

        <Row className={rowClass}>
          <Col>
            <FormControl placeholder="Author" className={styles.cardInput}  value={author} onChange={e => setAuthor(e.target.value)} />
          </Col>
        </Row>

        <Row className={rowClass}>
          <Col sm={4}>
            <FormControl placeholder="Pages" className={styles.cardInput}  value={pages} onChange={e => setPages(e.target.value)} />
          </Col>

          <Col className="pt-1 text-end">
            <IconContext.Provider value={{ className: `${styles.check} ${isRead && styles.selected}` }}>
              <div onClick={() => {
                setIsRead(isRead => !isRead);
              }}>
                {checkIcon}
              </div>
            </IconContext.Provider>
          </Col>

          <Col className="text-end pt-2">
            <button className="md-btn-1" onClick={async () => {
              const data = {
                pages,
                title,
                author,
                finished: isRead
              };

              const newBookRes = await createOneBook(data, token);

              if (newBookRes.success) {
                setBooks(prevBooks => [...prevBooks, newBookRes.data]);
              }

              setTitle('');
              setAuthor('');
              setPages('');
              setIsRead(false);
            }}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddBookCard;
