import React from 'react'   

class LoginForm extends React.Component{
    render(){
        return( 
            <form className="custom" method="POST">
            <label>Login From For Master User</label><br/>
            Email:<input type="text" name="email" value={this.props.email}/><br/>
            Password:<input type="password" name="password" value={this.props.password}/><br/>
            <button type="submit" name="btnSubmit">Login</button>
            </form>
        )
    }
}

export default LoginForm