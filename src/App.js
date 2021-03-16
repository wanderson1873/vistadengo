import React from 'react';
import logoDengo from './logo.svg'

const App = () => {

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <div style={{
      alignSelf: 'center'

    }}>
        <img src={logoDengo} alt="Logo DENGO"/>
        <p>Em breve!</p>
      </div>
    </div>
  )
}

export default App
