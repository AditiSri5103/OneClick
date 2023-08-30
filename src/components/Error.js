import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!</h1>
            <h2>Something Went Wrong..</h2>
            <p>{err.status}</p>
            <p>{err.statusText}</p>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=500"></img>
        </div>
    )
} 
export default Error;