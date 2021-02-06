import React from 'react';
import { Button } from 'react-bootstrap';
import { FiHeart, FiUpload } from 'react-icons/fi';
import { FaRegComment, FaRetweet } from 'react-icons/fa'

const tweets = [
  {
    name: 'Free',
    username: '@free',
    time: '34s',
    comment: 'Hi there!'
  },
  {
    name: 'Roberto',
    username: '@roberto',
    time: '55s',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus maximus odio ac ullamcorper. Donec justo erat, suscipit vitae sem eu, hendrerit suscipit magna. In ultricies eu dui pellentesque posuere.!'
  },
  {
    name: 'Free',
    username: '@free',
    time: '2m',
    comment: 'Nulla lacinia mi non diam commodo semper quis ac purus. Vestibulum dictum euismod arcu, auctor iaculis justo sagittis vel. Cras laoreet arcu ante, sit amet rutrum risus fringilla at. Sed a rhoncus lacus.!'
  },
  {
    name: 'Free',
    username: '@free',
    time: '2m',
    comment: 'In ultricies eu dui pellentesque posuere. Nulla lacinia mi non diam commodo semper quis ac purus.!'
  },
  {
    name: 'Free',
    username: '@free',
    time: '2m',
    comment: 'Nulla lacinia mi non diam commodo semper quis ac purus. Vestibulum dictum euismod arcu, auctor iaculis justo sagittis vel. Cras laoreet arcu ante, sit amet rutrum risus fringilla at. Sed a rhoncus lacus.!'
  },
];

const Feed = () => {
  return (
    <div style={{textAlign: 'left'}}>
    {tweets.map(({name, username, time, comment}) => {
      return (
        <div style={{border: '1px solid #cccccc', margin: '5px 0', padding: '10px'}}>
          <div style={{display: 'flex' }}>
            <img className="profile" alt="profile" src="#" />
            <div>
              <div>
                {`${name}  ${username}  -  ${time}`}
              </div>
              <div>
                <span>{comment}</span>
              </div>
            </div>
          </div>
          <div style={{fontSize: '18px', margin: '10px', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="link"><FaRegComment /></Button>
          <Button variant="link"><FaRetweet /></Button>
          <Button variant="link"><FiHeart /></Button>
          <Button variant="link"><FiUpload /></Button>
          </div>
        </div>
      );
    })}
  </div>
  );
};

export default Feed;