import React from 'react';
import logoDengo from './logo.svg'
import insta from './insta.svg'
import shopee from './shopee.svg'

import './App.css'


const App = () => {

  return (
    <>
      <div className="container">
        <div>
          <img src={logoDengo} alt="Logo DENGO"/>
          <p className="loja">loja <span>DENGO</span> </p>
          <p className="breve">Em breve!</p>
        </div>
      </div>

        <footer>
          <a title="Instagran" href="https://www.instagram.com/vistadengo/" target="_blank" without rel="noreferrer" ><img src={insta} alt="icon instagran"/></a>
          <a title="Shopee" href="https://shopee.com.br/shop/394701984/" target="_blank" without rel="noreferrer"><img src={shopee} alt=""/></a>
        </footer>
    </>
  )
}

export default App
