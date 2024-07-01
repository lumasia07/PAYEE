import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content:
        "\n How may I help you?😊 \n",
    },
  ]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('http://localhost:5001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div className="font-raleway min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className='text-2xl m-3 font-mons  font-semibold text-orange-500'>Payee assistant</h1>
      <div className="chat-box w-full max-w-lg bg-orange-200 shadow-lg rounded-lg overflow-hidden mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role} p-3`}>
            {message.content}
          </div>
        ))}
      </div>
      {response && (
        <div className="response-box w-full max-w-lg bg-blue-100 border border-orange-200 text-orange-900 px-4 py-2 rounded-md mb-4 border-3">
          {response}
        </div>
      )}
      <div className="input-box flex w-full max-w-lg">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
