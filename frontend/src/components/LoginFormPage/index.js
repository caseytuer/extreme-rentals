import { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';

const LoginFormPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/home" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const demoLogin = () => {
        const credential = 'Demo-extremist';
        const password = 'password';
        history.push('/home');
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-demo-form">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
                <label>
                    <div id="login-container">
                        <div className="login-field">
                            <input 
                                className="form-input"
                                placeholder="Username or Email"
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-field">
                            <input
                                className="form-input"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="form-btn" type="submit">Log In</button>
                        <button className="demo-btn" className="demo-btn" type="button" onClick={demoLogin}>Demo</button>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default LoginFormPage;