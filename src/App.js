import './App.css';

import React from 'react';

import Message from './components/message/message.js'

// import MsgList from './components/msgList/msgList.js'

// import AddMsgForm from "./components/addMsgForm/addMsgForm.js"

function App() {
  const [ messageList, setMessageList ] = React.useState([
    // { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
    // { id: 1002, author: "Tom", message: "Hello, Amy!" },
    // { id: 1003, author: "Go", message: "Hello, Amy and Tom!" }
  ]);

  const fillList = () => {
    setMessageList((prevMessageList) => prevMessageList.concat([
      { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
      { id: 1002, author: "Tom", message: "Hello, Amy!" },
      { id: 1003, author: "Go", message: "Hello, Amy and Tom!" }
    ]));
  };

  React.useEffect(() => {
    // messageList.concat([
    //   { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
    //   { id: 1002, author: "Tom", message: "Hello, Amy!" },
    //   { id: 1003, author: "Go", message: "Hello, Amy and Tom!" }
    // ]);
    // fillList();
    console.log(messageList);
  }, [ messageList ]);

  // setMessageList((messageList) => {
  //   messageList.concat(
  //     { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
  //     { id: 1002, author: "Tom", message: "Hello, Amy!" },
  //     { id: 1003, author: "Go", message: "Hello, Amy and Tom!" }
  //   );
  // });

  const submitHandler = (e) => {
    // setMessageList((messageList) => {
    //   console.log(messageList);
    // });
    console.log(e.target.elements[0]);
    // very bad code
    let name = e.target.elements[0].value;
    let msg = e.target.elements[1].value;

    messageList.push( { id: 333, author: name, message: msg } );
    console.log(messageList);

    // React.setState(prevState => prevState.messageList);
    alert(messageList);
  };

  // React.useMemo(() => {}, [ messageList, setMessageList ]);

  // React.useEffect(() => {}, [ submitHandler ]);

  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!</h3>
      </header>
      <main>
        { messageList.map((msg) => 
          <div key={ msg.id } className="msgList">
            <span>{ msg.author }:</span> <Message text={ msg.message } />
          </div>
        ) }
        <form onSubmit={ submitHandler } className="addMsgForm">
            <label>
                Имя:
                <input required type="text" />
            </label>
            <label>
                Сообщение:
                <textarea required />
            </label>
            <input type="submit" value="Отправить" />
        </form>
      </main>
    </div>
  );
}

export default App;
