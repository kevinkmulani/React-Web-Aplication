import React,{useState} from 'react'

function Hooks(props){
    const [preson,setPerson] = useState({name:'',city:'',cars:[]})
    const [username,setUsername] = useState('')
    const [isLogin, setLoginStatus] = useState(false)
    const [colors, setColors] = useState([])
    const [count, setCount]= useState(0)
    
    const cars = preson.cars.map((item,index)=>{
        return(
            <li key={index}>{item}</li>
        )
    })
    return(
        <div>
            <button onClick={()=>{setPerson({name:'kevin',city:'surat',cars:['tesla','kia','audi']})}}>Set Person</button>
            <h3>Name:{preson.name}</h3>
            <h3>City:{preson.city}</h3>
            <ul>{cars}</ul>

            <button onClick={()=>{
                setUsername('ram')
                setLoginStatus(true)
                setColors(['blue','green','black'])
            }}>Action All</button>
            <h3>Username: {username}</h3>
            <h3>LoginStatus: {isLogin? 'user Loggedin':'user LoggedoOut'}</h3>
            <h3>Color: {colors}</h3>

            <button onClick={()=>setCount(count+1)}>Counter</button>
            <h3>Count:{count}</h3>

        </div>
    )
}

export default Hooks