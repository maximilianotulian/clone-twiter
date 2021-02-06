import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCardImage } from 'react-icons/bs';

const Tweet = () => {
  return (
    <div className="second-column--item" >
      <h2 style={{borderBottom: '1px solid #cccccc', padding: '10px'}}>Inicio</h2>
      <div style={{display: 'flex', padding: '10px'}}>
        <img className="profile" alt="profile" src="#" />
        <input type="text" placeholder="Qué está pasando?"/>
      </div>
      <button>Cualquier persona puede responder</button>
      <div style={{margin: '10px 0', borderBottom: '1px solid #cccccc'}} />
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
        <div>
          <BsCardImage /> <input type="file" />
        </div>
        <Button>Twittear</Button>
      </div>
    </div>
  );
}

export default Tweet;