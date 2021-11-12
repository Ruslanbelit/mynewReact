function MessageList(props) {
    console.log(props.data);
    return (
        <div className="message-list">

            {
                props.data.map((message, number) => { return <p key={number.toString()} className="message"> Author: {message.author} Text: {message.text}</p>; })
            }

        </div>
    )
}


export default MessageList