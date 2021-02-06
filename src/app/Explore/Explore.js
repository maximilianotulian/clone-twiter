import React from 'react';
import Layout from '../../components/Layout';
import { Col, Row } from 'react-bootstrap';
import FirstColumn from '../Home/FirstColumn';
import ThirdColumn from '../Home/ThirdColumn';

const Explore = () => {

  return (
    <Layout>
      <Row className="home">
        <FirstColumn />
        <Col className="home--second-column" md="6" sm="6">
          Second
        </Col>
        <ThirdColumn />
      </Row>
    </Layout>
  );
};

export default Explore;