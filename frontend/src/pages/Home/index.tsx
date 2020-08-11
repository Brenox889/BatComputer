import React from 'react'

import './styles.css'

import logo from '../../images/batmanLogo2.png'
function Home(){
    return(
      <main>
          <img src={logo} className="batmanLogo" />

          <form>
            <input type="text" name="nicknameForm" placeholder="Nickname" className="nicknameForm"/>
            <input type="text" name="nicknameForm" placeholder="password" className="nicknameForm"/>
            
            <button>Login</button>
          </form>
      </main>
    )
}

export default Home