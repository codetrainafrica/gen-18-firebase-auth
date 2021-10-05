import { Container, Row, Col } from "react-bootstrap";
import Userlist from "../Component/Userlist";
import AddUser from "../Component/AddUser";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(logout())}>Logout</button>
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
