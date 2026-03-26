import React, { useState } from 'react'
import './ChatBot.css'
import axios from 'axios'

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([{text: "Hi! What can I help you with?", sender: "ai"}]);

    const handleSend = async () => {
        if (!input) return;
        const newMsg = { text: input, sender: "user" };
        setMessages([...messages, newMsg]);
        setInput("");

        const response = await axios.post("http://localhost:4000/api/chat/ask", { prompt: input });
        setMessages((prev) => [...prev, { text: response.data.message, sender: "ai" }]);
    }  

    return (
        <div className='chatbot-container'>
            {isOpen && (
                <div className='chat-window'>
                    <div className='chat-header'>QuickBite AI Assistant</div>
                    <div className='chat-messages'>
              i          {messages.map((m, i) => <div key={i} className={m.sender}>{m.text}</div>)}
                    </div>
                    <div className='chat-input'>
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask anything...' />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
            <button className='chat-toggle-btn' onClick={() => setIsOpen(!isOpen)}>💬</button>
        </div>
    )
}
export default ChatBot;