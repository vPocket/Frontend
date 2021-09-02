

function LoginCard(props){
    return(
        <div>
            <h1>Welcome to VPockte!</h1>
            <form>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <button type="submit">{props.button1}</button>
                <button>{props.button2}</button>
            </form>
            <p>{para}</p>
            <a href="#">{url}</a>
        </div>
    )
}

export default LoginCard;