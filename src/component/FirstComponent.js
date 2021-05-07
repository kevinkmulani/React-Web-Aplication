import React from 'react'
import SecondComponent from './SecondComponent';

class FirstComponent extends React.Component{
    render(){
        return(
           <div>
            <h1>Hello From First Component.</h1>
            <SecondComponent username="Kevin Mulani" city="Surat"/>
           </div>
        )
    }
}

export default FirstComponent;