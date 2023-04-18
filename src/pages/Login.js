import React, { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {
    loginUser,
    loginInfo,
    updateLoginInfo,
    loginError,
    isLoginLoading,
  } = useContext(AuthContext);

  return (
    <Form onSubmit={loginUser}>
      <Row
        style={{ height: "80vh", justifyContent: "center", paddingTop: "10%" }}
      >
        <Col xs="6">
          <Stack gap="3">
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <Form.Control 
             type="email" 
             placeholder="Email" 
             onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}
            />
            <Form.Control 
             type="password" 
             placeholder="Password" 
             onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}
            />
            <Button
              variant="primary"
              style={{ textAlign: "center" }}
              type="submit"
            >
              {isLoginLoading ? "Getting into your account": "Login" }
            </Button>

            {
              loginError?.error && (
                <Alert variant="danger" style={{textAlign: "center"}} >
                { loginError?.message}
                </Alert>
              )
            }
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
