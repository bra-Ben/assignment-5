import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { ContextStoreUser } from '../store/context';;


function Login() {

    let history = useHistory();

    // const {name} = ContextStoreUser()

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function goToPage(path) {
        history.push(path)
    }

    function UpdateUsername(e) {

        return (
            setUsername(e.target.value)
        )
    }

    function UpdatePassword(e) {

        return (
            setPassword(e.target.value)
        )
    }

    function submit(e) {
        e.preventDefault();
        setIsLoading(true);

        if (username == 'Ben' && password == 'test') {
            goToPage('#')
        }
        else {
            setMessage('Wrong Username or Passwprd')
            setIsLoading(false)
        }

    }

    return (
       
        <div className="form-container">
        <form className="myform">

            <div className="form-section 1">
                <label>Username:</label>
                <input type="text" onChange={UpdateUsername}></input>
            </div>

            <div className="form-section 2">
                <label>Password:</label>
                <input type="password" onChange={UpdatePassword}></input>
            </div>

                <button type="submit" onClick={submit}>Submit</button>
        
        </form>
        </div>
    )
}

export default Login;