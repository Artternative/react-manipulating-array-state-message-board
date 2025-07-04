import {useState} from "react";

function MessageBoard() {
  const [message , setMessage ] = useState([]);
  const [showMessage, setShowMessage] = useState('');
  const handler = (event) => {
        setShowMessage(event.target.value);
     
        
  };
  const addMessage = (event) => {
        event.preventDefault()
        const newMessage = [...message]
        newMessage.push(showMessage)
        setMessage(newMessage)
        setShowMessage('');
  }
  const deleteMessage = (messageIndex) => {
        const newMessage = [...message];
        newMessage.splice(messageIndex,1)
        setMessage(newMessage)
        
        
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={showMessage}
            onChange={handler}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage} >Submit</button>
      </div>
      <div className="board">
          <ul>{message.map((msn,index) => (  
              <div className="message" key="index">  
                <h1 > {msn} </h1>
                <button className="delete-button" onClick={() => {deleteMessage(index)}} > x </button>
              </div>
              ))}
          </ul>
          
          
          
      </div>
    </div>
  );
}

export default MessageBoard;
