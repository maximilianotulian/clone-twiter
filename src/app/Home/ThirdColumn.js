import React from 'react';
import { Col } from 'react-bootstrap';

const ThirdColumn = () => {
  return (
    <Col className="home--third-column" md="3" sm="2">
      <div>
        <div>
          <input type="text" placeholder="Buscar en twitter"/>
        </div>
        <div>
          <h5>Que está pasando?</h5>
        </div>
        <div>
          <h5>A quien seguir?</h5>
        </div>
        <div>
          Copyright
        </div>
      </div>
    </Col>
  );
}

export default ThirdColumn;