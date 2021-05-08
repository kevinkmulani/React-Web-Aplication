import React from 'react'

class Mount extends React.Component{
    constructor(props){
        super(props)

        this.state={
            salary:10000,
            isLoding:false,
            apiData:{
                status:false,
                username:'',
                salary:'0',
                city:''
            }
        }

        console.log('STEP-1 hello from constructor');
        this.handleClick=this.handleClick.bind(this);
    }

    getapi = ()=> {
        this.setState({isLoding:true})

        setTimeout(() => {
            this.setState((prestate)=>{
                let apiData = Object.assign({},prestate.apiData)

                apiData.status = true
                apiData.username = "kevin"
                apiData.salary = "25000"
                apiData.city = "banglore"

                return {
                    apiData:apiData,
                    isLoding:false
                }
            });
        }, 3000);
    }

    componentDidMount(){
        console.log('STEP-3 hello from did mount');
        this.getapi();
    }

    componentDidUpdate(){
        console.log('hello from did update');
    }

    componentWillUnmount(){
        console.log('hello from will unmount');
    }

    handleClick(){
        this.setState((prestate)=>{
            return{
                salary:prestate.salary + 15000
            }
        });
    }

    render(){
        console.log('STEP-2 hello from render')
        let output = ""

        if(this.state.apiData.status){
            output = (
                <div>
                    <h1>Name:- {this.state.apiData.username}</h1>
                    <h1>salary:- {this.state.apiData.salary}</h1>
                    <h1>city:- {this.state.apiData.city}</h1>
                </div>
            )
        }
        return(
            <div>
                <h1 onClick={this.handleClick}>Salary Hike</h1>
                <h2>Salary:-{this.state.salary}</h2>
                { this.state.isLoding ? (<h1>User data loading...</h1>): output}
            </div>
        )
    }
} 

export default Mount