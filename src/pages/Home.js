import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import Userlist from "../Component/Userlist";
import AddUser from "../Component/AddUser";
import { connect, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const Home = (props) => {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  return (
    <>
      <button onClick={() => dispatch(logout(replace))}>Logout</button>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <AddUser />
          </Col>
          <Col xs={6} md={2} className="box">
            <Userlist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
