import React, { useContext, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import styles from "../css/login.module.css";
import SignUpForm from "../components/SignUpForm";

export default function LoginPage() {
  const { showLogin, setShowLogin } = useContext(UserContext);
  const toggle = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    return () => {
      setShowLogin(true);
    };
  }, [setShowLogin]);

  return (
    <div className={styles.logincontainer}>
      <Container className={`${styles.containerStyle} py-0`}>
        {showLogin ? <LoginForm /> : <SignUpForm />}
        <p className={styles.toggleText} onClick={toggle}>
          {showLogin ? "Are you not a member yet? " : "Back to login"}
        </p>
      </Container>
    </div>
  );
}
