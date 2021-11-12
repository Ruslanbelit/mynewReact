import '../App.css';
import MessageList from './MessageList';
import Form from './Form';
import { useState, useEffect } from 'react';




function App() {

    const [messages, setMessages] = useState([]);


    const sendMessage = (object) => {
        let array = messages;

        object = { ...object }
        array.push(object)

        setMessages([...array]);
    }


    useEffect(() => {

        let obj = messages[messages.length - 1];
        let array = messages;

        const myLog = /^(Kostya)$/i;

        obj = (obj === undefined || obj === null) ? { author: ' ', message: '' } : obj;

        if (myLog.test(obj.author)) {
            const responseMessage = { author: 'robot', text: `Dear ${obj.author}, your message is sent!` }
            array.push(responseMessage)
            const messageIntervalId = setTimeout(() => { setMessages([...array]) }, 3000);

        }
    }, [messages])



    return (
        <div className="App">
            <header className="App-header">
                <MessageList data={messages} />
                <Form handleChange={sendMessage} />
            </header>
        </div>
    );
}

export default App;