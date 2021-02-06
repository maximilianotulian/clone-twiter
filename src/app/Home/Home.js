import React from 'react';
import Layout from '../../components/Layout';
import { Col, Row } from 'react-bootstrap';
import FirstColumn from './FirstColumn';
import Feed from './Feed';
import ThirdColumn from './ThirdColumn';
import Tweet from './Tweet';

import './home.scss';


const Home = () => {

  return (
    <Layout>
      <Row className="home">
        <FirstColumn />
        <Col className="home--second-column" md="6" sm="6">
          <Tweet />
          <Feed />
        </Col>
        <ThirdColumn />
      </Row>
    </Layout>
  );
};

export default Home;