import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className='home_page'>
      <div className='container'>
        <div className='inner_container'>
            <h1>Test Your JavaScript Skills</h1>
            <p>Please take the test by answering the questions from inside test application.</p>
            <p>Good luck!</p>
            <div className='buttons'>
            <Link to='userdetails' className='button_square positive'>Start Test</Link>
            <Link to='testpage' className='button_square negative'>Administrator</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
