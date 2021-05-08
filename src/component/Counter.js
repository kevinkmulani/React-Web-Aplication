import React from 'react'

class counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            person:{
                name:'',
                city:'',
                cars:[]
            },
            isLogin:false,
            username:'',
            color:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // this.setState({
        //     count:1++,
        //     person:{
        //         name:'kevin',
        //         city:'surat',
        //         cars:["audi","mercuri","jasmin","leamgini"]
        //     },
        //     isLogin:true,
        //     username:'mualni',
        //     color:['green','blue','black']
        // });
        this.setState((PrevState)=>{
            let person = Object.assign({},PrevState.person);
            person.name="ram"
            person.city="banglore"
            //person.cars= ["te","lesar","kdk"]

            let car = person.cars
            car.push('BMW')
            car.push('Audi')
            car.push('Kia')
            person.cars = car

            let colors = PrevState.color
            colors.push('red')
            colors.push('yellow')
            colors.push('pink')

            return{
                count: PrevState.count + 1,
                person:person,
                color:colors,
                isLogin:!PrevState.isLogin
            }
        })
    }

    render(){
        console.log(this.state);

        const cars = this.state.person.cars.map((item,index)=>{
            return(
                <li key={index}>{item}</li>
            )
        });
        return(
            <div>
                <button onClick={this.handleClick}>Counter</button>
                <h3>{this.state.count}</h3>
                <hr/>
                <h1>Name: {this.state.person.name}</h1>
                <h1>city: {this.state.person.city}</h1>
                <h1>Car: {cars}</h1>
            </div>
        );
    };
};

export default counter;