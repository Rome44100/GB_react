import './App.css';

import { Button, TextField } from "@material-ui/core";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

import Message from './components/message/message.js'

// import MsgList from './components/msgList/msgList.js'

// import AddMsgForm from "./components/addMsgForm/addMsgForm.js"

const AUTHORS = {
  ME: "Me",
  BOT: "Robot"
}

function App() {
  const [secondary, setSecondary] = React.useState(false);

  const [ chatList, setChatList ] = React.useState([
    { id: 1001, name: "GroupChat", desc: "Hello, everyone!" },
    { id: 1002, name: "Tom", desc: "Hello, Amy!" },
    { id: 1003, name: "Molly", desc: "Hello, Amy and Tom!" },
    { id: 1004, name: "Федя", desc: "Федя, лучший друг!" }
  ]);

  function generate(element) {
    return chatList.map((value) =>
      React.cloneElement(element, {
        key: value.id,
        text: value.name,
        desc: value.desc
      }),
    );
  }

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

    const msgField = document.querySelector("#outlined-multiline-static");
    if(msgField.value !== "") {

      setMessageList(currMessageList => ([
        ...currMessageList, 
        { id: getCnt(currMessageList), author: AUTHORS.ME, message: msgVal }
      ]));

    } else {
      msgField.error = true;
      msgField.helperText = "Значение не должно быть пустым!";
    }

    msgField.focus();
    setMsgVal("");
  };

  return (
    <div className="App">
      <header className="App-header">
        Chat Me Everythere
      </header>
      <main>
        <div>
          Мои чаты:<br />
          { chatList.map((msg) => 
            <div key={ msg.id } className="msgList">
              <span>{ msg.name }:</span> <Message text={ msg.desc } />
            </div>
          ) }
          <br />
          <List>
            {generate(
              <ListItem>
                <ListItemText
                  primary="Не могу здесь показать имя чата"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>,
            )}
          </List>
        </div>
        <div>
          { messageList.map((msg) => 
            <div key={ msg.id } className="msgList">
              <span>{ msg.author }:</span> <Message text={ msg.message } />
            </div>
          ) }
          <form onSubmit={ submitHandler } className="addMsgForm">
            <TextField
              style={{ marginTop: "20px" }}
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              disabled
              defaultValue={ AUTHORS.ME }
            />
            <TextField
              id="outlined-multiline-static"
              label="Сообщение"
              multiline
              rows={4}
              variant="outlined"
              value={ msgVal }
              onChange={ handlerMsgVal }
              autoFocus
              required
            />
            <Button variant="outlined" color="primary" onClick={ submitHandler }>
              Отправить
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;