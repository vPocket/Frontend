import "./Card.css";

function Card(props) {
    const classname="Card "+props.class;
    return (
        <div className={classname}>props.children</div>
    )
}

export default Card;