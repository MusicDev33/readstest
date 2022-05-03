import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';

import { IconContext } from 'react-icons';
import { FaRegCheckCircle, FaCheckCircle } from 'react-icons/fa';

import styles from './add-book-card.module.scss';

const AddBookCard = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isRead, setIsRead] = useState(false);
  const [checkIcon, setCheckIcon] = useState(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);

  useEffect(() => {
    setCheckIcon(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);
  }, [isRead]);


  return (
    <div className={styles.addBookCard}>
      <Container className="px-3">
        <Row>
          <Col>
            <FormControl placeholder="Title" className={styles.cardInput} value={title} onChange={e => setTitle(e.target.value)} />
          </Col>
        </Row>

        <Row>
          <Col>
            <FormControl placeholder="Author" className={styles.cardInput} onChange={e => setAuthor(e.target.value)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddBookCard;
