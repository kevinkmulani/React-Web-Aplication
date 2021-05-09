import React from 'react'

class Event extends React.Component{

    constructor(prors){
        super(prors);
    
        this.state = {
            username:'',
            password:'',
            gender:'',
            angular:false,
            react:false,
            flutter:false,
            city:'',
            commit:''
        }
    }

    handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const type = target.type;

        this.setState({
            [name]:type === 'checkbox' ? target.checked : value
        })
    }

    handleSubmit = (e,text)=>{
        e.preventDefault();
        console.log(this.state);
        console.log(text);
    }
    render(){
        //console.log(this.state)
        return(
        <div>
            <form onSubmit={(e)=>{this.handleSubmit(e,'handle submit')}}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" size="30" value={this.state.username} onChange={(event)=>{this.handleChange(event)}}/><br/>

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" size="30" value={this.state.password} onChange={(event)=>{this.handleChange(event)}}/><br/>

                <label htmlFor="gender">Gender: </label>
                <input type="radio" id="gender" name="gender" value="male" checked={this.state.gender === 'male' ? true:false} onChange={(event)=>{this.handleChange(event)}}/>
                <label htmlFor="male">Male: </label>
                <input type="radio" id="gender" name="gender" value="female" checked={this.state.gender === 'female' ? true:false} onChange={(event)=>{this.handleChange(event)}}/>
                <label htmlFor="female">Female: </label><br/>

                <label htmlFor="Skills">Skills: </label>    
                <input type="checkbox" id="angular" name="angular" checked={this.state.angular} onChange={(event)=>{this.handleChange(event)}}/>
                <label htmlFor="angular">Angular: </label>
                <input type="checkbox" id="react" name="react" checked={this.state.react} onChange={(event)=>{this.handleChange(event)}}/>
                <label htmlFor="react">ReactJs: </label>
                <input type="checkbox" id="flutter" name="flutter" checked={this.state.flutter} onChange={(event)=>{this.handleChange(event)}}/>
                <label htmlFor="flutter">Flutter: </label><br/>

                <label htmlFor="city">City: </label>
                <select name="city" id="city" value={this.state.city} onChange={(event)=>{this.handleChange(event)}}>
                    <option value="">[-- Choose One --]</option>
                    <option value="surat">Surat</option>
                    <option value="banglore">Banglore</option>
                    <option value="pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                </select><br/>

                <label htmlFor="comment">Comment: </label>
                <textarea name="commit" id="comment" rows="3" cols="10" value={this.state.commit} onChange={(event)=>{this.handleChange(event)}}>
                </textarea>
                <br/>

                <button type="submit">Send</button>

            </form>   
            <hr/>         
            <h3>username: {this.state.username}</h3>
            <h3>password: {this.state.password}</h3>
            <h3>gender: {this.state.gender}</h3>
            <h3>angular:{this.state.angular?'angular':'not'}</h3>
            <h3>react:{this.state.react?'react':'not'}</h3>
            <h3>flutter:{this.state.flutter?'flutter':'not'}</h3>
            <h3>city:{this.state.city}</h3>
            <h3>commit:{this.state.commit}</h3>
        </div>
        )
    }
}

export default Event;