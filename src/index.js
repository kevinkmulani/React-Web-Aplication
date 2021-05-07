import React from 'react';
import ReactDom from 'react-dom';

function oddeven(number){
    if( number % 2 == 0){
        return "Number is even: " + number;
    }
    else{
        return "Number is odd: " + number;
    }
}

function getTag(test){
    if(test == 2){
        return <h3>Number is 2</h3>
    }
    else{
        return <h3>Number is not 2.</h3>
    }
}

function loginform(){
    return (
        <form method="POST">
            <label>Login From For Master User</label><br/>
            Email:<input type="text" name="email"/><br/>
            Password:<input type="password" name="password"/><br/>
            <button type="submit" name="btnSubmit">Login</button>
        </form>
    )
}

const data = <div>{oddeven(2)}</div>
let googlelink = "https://www.google.com"
const link = <a href={googlelink} target="_blank">Google</a>

ReactDom.render(
    <div>
        {link}<br/>
        {data}<br/>
        {getTag(2)}<br/>
        {loginform()}<br/>
    </div>,
    document.getElementById('root')
)