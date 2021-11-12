import './App.css';

function Message(props) {
    return (
        <p className={`${props.name ? 'message' : 'message-red'}`}>{props.name ? props.name : props.lastName} begin to learn React!</p>
    )
}


export default Message