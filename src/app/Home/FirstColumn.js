import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap';
import { AiTwotoneHome, AiOutlineMail } from 'react-icons/ai';
import { BsHash, BsBell } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { FiTwitter } from 'react-icons/fi';
import './firstColumn.scss';

const FirstColumn = () => {
  const [showMobile, setShowMobile] = useState(true);
  const router = useHistory();
  const handleClick = (route) => {
    router.push(route);
  }
  return (
    <Col className="first-column" md={showMobile ?  '2' : '4'}>
      <div className="logo">
        <FiTwitter style={{fontSize: '30px', marginLeft: '25px'}} />
      </div>
      {!showMobile &&
        <ul className="first-column--list">
          <li className="list--item">
            <Button variant="light" onClick={handleClick.bind(this, 'home')}><AiTwotoneHome />Inicio</Button>
            </li>
          <li className="list--item">
            <Button variant="light" onClick={handleClick.bind(this, 'explore')}><BsHash />Explorar</Button>
            </li>
          <li className="list--item">
            <Button variant="light" onClick={handleClick.bind(this, 'notifications')}><BsBell />Notificaciones</Button>
            </li>
          <li className="list--item">
            <Button variant="light"><AiOutlineMail /> Mensajes</Button>
            </li>
          <li className="list--item">
            <Button variant="light"><MdPersonOutline />Perfil</Button>
            </li>
          <li className="list--item">
            <Button variant="light">
              <HiOutlineDotsCircleHorizontal />
              Más opciones
            </Button>
          </li>
          <li className="list--item">
            <Button variant="primary" style={{textAlign: 'center'}}>Twittear</Button>
          </li>
        </ul>
      }
      {showMobile &&
        <ul className="first-column--list">
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'home')}><AiTwotoneHome /></Button>
            </li>
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'explore')}><BsHash /></Button>
            </li>
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'notifications')}><BsBell /></Button>
            </li>
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'messages')}><AiOutlineMail /></Button>
            </li>
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'profile')}><MdPersonOutline /></Button>
            </li>
          <li className="list--item-mobile">
            <Button variant="link" onClick={handleClick.bind(this, 'more')}>
              <HiOutlineDotsCircleHorizontal />
            </Button>
          </li>
          <li className="list--item-mobile">
            <Button variant="link" style={{borderRadius: '50%'}}>
              <FiTwitter style={{fontSize: '30px'}} />
            </Button>
          </li>
        </ul>
      }
      <div>
        <img className="profile" alt="profile" src="#"/>
      </div>
    </Col>
  );
};

export default FirstColumn;