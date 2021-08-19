// import "./Card.css";

function Card(props) {
    const classname="font-bold "+props.class;
    return (
        <div class={classname}>{props.children}</div>
    )
}   

export default Card;