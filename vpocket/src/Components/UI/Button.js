const Button=(props)=>{
   "";
    return(
        <button class={`transition duration-500 ${props.class}`} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;