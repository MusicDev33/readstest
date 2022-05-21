import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAuthToken } from 'services/auth.service';

const Login = () => {
  const defaultPassClass = 'md-form-1 mt-5';

  const [password, setPassword] = useState('');
  const [passFieldClass, setPassFieldClass] = useState(defaultPassClass);

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} className={passFieldClass} placeholder="Enter Password"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (passFieldClass !== defaultPassClass) {
                    setPassFieldClass(defaultPassClass);
                  }

                  getAuthToken(password).then(res => {
                    if (!res.success) {
                      setPassFieldClass(`${defaultPassClass} fail shake-anim`);
                    }
                    console.log(res.data);
                  });
                }
              }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
