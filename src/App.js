import './App.css';

import React from 'react';

import Message from './components/message/message.js'

// import MsgList from './components/msgList/msgList.js'

// import AddMsgForm from "./components/addMsgForm/addMsgForm.js"

const AUTHORS = {
  ME: "Me",
  BOT: "Robot"
}

function App() {
  const [ messageList, setMessageList ] = React.useState([
    // { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
    // { id: 1002, author: "Tom", message: "Hello, Amy!" },
    // { id: 1003, author: "Molly", message: "Hello, Amy and Tom!" }
  ]);

  // const [ nameVal, setNameVal ] = React.useState("");

  const [ msgVal, setMsgVal ] = React.useState("");

  const getCnt = (list = []) => {
    if (list.length === 0) return 1;
    let idArr = [];
    for (let i = 0; i < list.length; i++) {
      idArr.push(list[i].id);
    }
    return Math.max.apply(null, idArr) + 1;
  }

  // const handlerNameVal = (e) => {
  //   setNameVal(e.target.value);
  // }

  const handlerMsgVal = (e) => {
    setMsgVal(e.target.value);
  }

  React.useEffect(() => {
    if( messageList.length && 
        messageList[messageList.length - 1].author !== AUTHORS.BOT) {
      setTimeout(() => {
        setMessageList((currMessageList) => [
          ...currMessageList,
          { id: getCnt(currMessageList), author: AUTHORS.BOT, message: "You should leave this chat!" }
        ])
      }, 1500)
    }
  }, [ messageList ]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMessageList(currMessageList => ([
      ...currMessageList, 
      { id: getCnt(currMessageList), author: AUTHORS.ME, message: msgVal }
    ]));
    
    // console.log(messageList);

    setMsgVal("");
  };

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
                <input value={ AUTHORS.ME } disabled type="text" readOnly />
            </label>
            <label>
                Сообщение:
                <textarea value={ msgVal } required onChange={ handlerMsgVal } />
            </label>
            <input type="submit" value="Отправить" />
        </form>
      </main>
    </div>
  );
}

export default App;
