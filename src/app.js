import React from 'react'
import FirstComponent from './component/FirstComponent';
import LoginForm from './component/LoginForm'

function App(){
    return(
        <div>
            <FirstComponent/>
            <LoginForm email="mail@gmail.com" password="Kevin Mulani"/>
        </div>
    );
}

export default App