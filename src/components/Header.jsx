import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import creativityImg from '../assets/creativity.png';

function Header() {
  const flippyRef1 = useRef(null);
  const flippyRef2 = useRef(null);
  const flippyRef3 = useRef(null);

  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: '100px', width: '100%'}}>
          <tbody>
            <tr>
              <td>
                <Link to="/Card1">
                  <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={flippyRef1} style={{ width: '200px', height: '275px', borderRadius: '10px', overflow: 'hidden'}}>
                    <FrontSide style={{ backgroundColor: '#4f4930'}}>
                      <img src={creativityImg} alt="Descripción de la imagen" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#4f4930' }}>
                      Content for BackSide
                    </BackSide>
                  </Flippy>
                </Link>
              </td>
              <td>
                <Link to="/Card2">
                  <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={flippyRef2} style={{ width: '200px', height: '275px', borderRadius: '10px', overflow: 'hidden'}} onClick={() => console.log("meClickeo")}>
                    <FrontSide style={{ backgroundColor: '#4f4930' }}>
                      Content for FrontSide
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#4f4930' }}>
                      Content for BackSide
                    </BackSide>
                  </Flippy>
                </Link>
              </td>
              <td>
                <Link to="/Card3">
                  <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={flippyRef3} style={{ width: '200px', height: '275px', borderRadius: '10px', overflow: 'hidden'}}>
                    <FrontSide style={{ backgroundColor: '#4f4930' }}>
                      Content for FrontSide
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#4f4930' }}>
                      Content for BackSide
                    </BackSide>
                  </Flippy>
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <h1 style={{ textAlign: "center"}}>Choose your card!</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}

export default Header;
