import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const link={
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div>
      <style jsx>{`
        background-image: url('https://image.freepik.com/free-vector/grunge-watercolor-background-using-pastel-colours_1048-6530.jpg') no-repeat center center fixed;
        width: 100%;
        .home{
          padding: 50% 0;
          text-align: center;
        }
        a:hover{
          color: darkred;
        }
      `}</style>
      <div className='home'>
        Once upon a time, there was a <Link style={link} to='/Hello'><a>little girl...</a></Link>
      </div>
    </div>
  );
}

export default Home;
