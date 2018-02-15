import React from 'react';

function Header() {


  return(
    <div className="header">
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 70px;
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>
      <h1>Kitty-Kitty</h1>
    </div>
  );
}

export default Header;
