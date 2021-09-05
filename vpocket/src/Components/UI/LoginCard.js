import {useState} from 'react';
import Button from './Button';

function LoginCard(props){
    const DummyEmail="test12@gmail.com";
    const DummyPassword="12345";
    const [enteredEmail,setEmail]=useState('');
    const [enteredPassword,setPassword]=useState('');
    const [error,setError]=useState('');

    const emailHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    const SubmitHandler=(event)=>{
        if(enteredEmail.trim().length===0 || enteredPassword.trim.length===0){
            setError({
                title:"Invalid Email or Password!",
                Message:"Empty values are not acceptable for email and password!!"
            });
            return;
        }
        if(enteredPassword<8){
            setError({
                title:"Weak Password!",
                Message:"Password must be 8 or more character long!!",
            })
            return;
        }
        if(enteredPassword!==DummyPassword || enteredEmail!==DummyEmail){
            setError({
                title:"Wrong Credentials",
                Message:"Sorry, your email or password is incorrect.",

            })
            return;
        }
        props.onSubmitForm(enteredEmail,enteredPassword);
        setEmail('');
        setPassword('');
    }
    return(
        <div>
            <h1>Welcome to VPocket!</h1>
                {error && <h2>{error.title}</h2>}
            <form onSubmit={SubmitHandler}>
                <label htmlFor="email">Email</label>
                <input value={enteredEmail} type="email" id="email" onChange={emailHandler}></input>
                <label htmlFor="password">Password</label>
                <input value={enteredPassword} type="password" id="password" onChange={passwordHandler}></input>
                <Button type="submit" onClick={props.onClick}>{props.button1}</Button>
                <Button type="" onClick={props.signGoogle}>{props.button2}</Button>
                {error && <div><p>{error.Message}</p><p>Please try again.</p></div>}
            </form>
            <p>{props.para}</p>
            <a href="signup">{props.url}</a>
        </div>
    )
}

export default LoginCard;