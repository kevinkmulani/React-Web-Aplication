import React from 'react'

class SecondComponent extends React.Component{
    render(){
        return(
            <div>Hello My Second Component Name: {this.props.username} City: {this.props.city}</div>
        )
    }
}

export default SecondComponent;