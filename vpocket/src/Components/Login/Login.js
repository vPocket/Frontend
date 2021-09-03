import LoginCard from '../UI/LoginCard';

const SigninHandler=(event)=>{
    return;
}

const SubmitHandler=(event)=>{
    return;
}

const SigninWithGoogle=(event)=>{
    return;
}

function Login(){
    return(
        <LoginCard class="" button1="Signin" button2="Signin with Google" para="New to VPocket?" url="Signup" type="Submit" onClick={SigninHandler} onSubmitForm={SubmitHandler} signGoogle={SigninWithGoogle}>
        </LoginCard>
        
    );
}

export default Login;