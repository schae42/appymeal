import {useState,useEffect} from "react";
import Axios from 'axios';
import { navigate } from "@reach/router";

const Main = props => {

    const [users,setUsers] = useState([]);
    const [loggedIn,setLoggedIn] = useState( JSON.parse(localStorage.getItem("user")) || {firstName:"John",
    lastName:"Robert"})
    useEffect(() => {
        Axios.get("http://localhost:8000/api/users",{withCredentials:true})
            .then(res => setUsers(res.data.results))
            .catch(err => {
                if(err.response.status === 401){
                    navigate('/');
                }
            })
    })

    const logout = () => {
        Axios.get('http://localhost:8000/api/logout',{withCredentials:true})
        .then(res => {
            localStorage.clear();
            navigate('/')})
        .catch(err => console.log(err));
    }
    return(
        <div>
            <h1 className="text-center">Welcome {loggedIn.firstName}</h1>
            <button onClick={logout} className="btn btn-warning">Logout</button>
        </div>
    );
}

export default Main;