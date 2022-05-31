import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAuthToken } from 'services/auth.service';

const Login = () => {
  const router = useRouter();

  const [cookie, setCookie] = useCookies(['auth-token']);

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
                    if (res.success) {
                      setCookie('auth-token', res.data, {
                        path: '/',
                        maxAge: 3600 * 24 * 30,
                        sameSite: true
                      });

                      router.replace('/books');

                      return;
                    }

                    setPassFieldClass(`${defaultPassClass} fail shake-anim`);
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
