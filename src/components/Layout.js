import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <Container className="layout">
      {children}
    </Container>
  );
}

export default Layout;