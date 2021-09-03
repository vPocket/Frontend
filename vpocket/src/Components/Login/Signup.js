import LoginCard from '../UI/LoginCard';

const SignupHandler=(event)=>{
    return;
}

const SubmitHandler=(uemail,upassword)=>{
    console.log({email:uemail,password:upassword});
}

const SignupWithGoogle=(event)=>{
    return;
}


function Signup(){
    return(
        <LoginCard class="" button1="Signup" button2="Signup with Google" para="Already have account?" url="Signin" type="Submit" onClick={SignupHandler} onSubmitForm={SubmitHandler} signGoogle={SignupWithGoogle}>
        </LoginCard>
    );
}

export default Signup;