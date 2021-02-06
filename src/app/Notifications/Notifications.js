import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Col, Row } from 'react-bootstrap';
import FirstColumn from '../Home/FirstColumn';
import ThirdColumn from '../Home/ThirdColumn';

const Notifications = () => {
  const history = useHistory();

  return (
    <Layout>
      <Row className="home">
        <FirstColumn />
        <Col className="home--second-column" md="6" sm="6">
          {history.location.pathname}
        </Col>
        <ThirdColumn />
      </Row>
    </Layout>
  );
};

export default Notifications;