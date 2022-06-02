import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './mobile-login.module.scss';

import { getAuthToken } from 'services/auth.service';

const MobileLogin = () => {
  const router = useRouter();

  const [cookie, setCookie] = useCookies(['auth-token']);

  const [iconClass, setIconClass] = useState(`${styles.icon}`);
  let rhythmData = [];
  let lastClickTime = 0;

  return (
    <Container className={styles.loginContainer}>
      <Row className="h-100">
        <Col className="my-auto text-center">
          <div className={iconClass} onClick={
            () => {
              const time = new Date().getTime();

              if (lastClickTime == 0) {
                lastClickTime = time;
                return;
              }

              if (time - lastClickTime > 1000) {
                setIconClass(`${styles.icon} ${styles.anim}`);

                // Send data
                getAuthToken(`rhy::${rhythmData.join(',')}`).then(res => {
                  if (res.success) {
                    setCookie('auth-token', res.data, {
                      path: '/',
                      maxAge: 3600 * 24 * 30,
                      sameSite: true
                    });

                    router.replace('/books');

                    return;
                  }

                  setIconClass(`${styles.icon}`);
                });

                rhythmData = [];
                lastClickTime = 0;
              }

              rhythmData.push(time - lastClickTime);
              lastClickTime = time;
            }}>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MobileLogin;
