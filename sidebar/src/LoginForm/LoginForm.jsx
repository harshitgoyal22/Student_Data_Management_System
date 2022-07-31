import React, {useState} from 'react';
import './loginform.css'

function LoginForm({Login, error}) {

    const[details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return(
        <form style={{width:500}} onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}

export default LoginForm;