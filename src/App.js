import './App.css';

import React from 'react';
import { List, ListItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Chat from './components/chat/chat';
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Input from "./components/input/input";
import { addChat, removeChat } from './store/actions/chats';

function App() {
  const { chatId } = useParams();
  const match = useRouteMatch("/chats/:chatId");

  // const [ chatList, setChatList ] = React.useState([
  //     { id: 1001, name: "GroupChat", desc: "Hello, everyone!" },
  //     { id: 1002, name: "Tom", desc: "Hello, Amy!" },
  //     { id: 1003, name: "Molly", desc: "Hello, Amy and Tom!" },
  //     { id: 1004, name: "Федя", desc: "Федя, лучший друг!" }
  // ]);

  const chatList = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const wrongChat = (match) => {
    const findId = null !== match ? match.params.chatId : 0;
    let arr = [];
    for(let i = 0; i < chatList.length; i++) arr.push(chatList[i].id);
    return !arr.includes(findId) ? "Нет такого чата!" : "";
  }

  // const [ curChat, setCurChat ] = React.useState(null !== match ? match.params.chatId : Object.values(chatList)[0]);
  const [ curChat, setCurChat ] = React.useState(null !== match ? match.params.chatId : "");

  let chat;
  if (curChat.id) {
    chat = <Chat id={ curChat.id } />;
  }

  const handleChangeChat = chat => setCurChat(chat);

  const getCnt = (list = []) => {
      if (list.length === 0) return 1;
      let idArr = [];
      for (let i = 0; i < list.length; i++) {
        idArr.push(list[i].id);
      }
      return Math.max.apply(null, idArr) + 1;
  }

  const onAddChat = (name) => {
    dispatch(addChat(`${getCnt(Object.values(chatList))}`, name))
  }

  const onRemoveChat = (chatId) => {
    dispatch(removeChat(chatId))
  }

  return (
    <div className="App">
      <header>
        <h1>Chat me everythere!</h1>
      </header>
      <main>
        <div>
          {/* { () => { wrongChat(match) } } */}
          <List subheader="Мои чаты:">
            { Object.values(chatList).map(chat => {
                return (
                  <div key={ chat.id }>
                    <ListItem button 
                              key={ chat.id } 
                              selected={ chat.id === curChat.id } 
                              onClick={ () => { handleChangeChat(chat) } }>
                                <Link to={`/chats/${ chat.id}`}>{ chat.name }</Link>
                                <IconButton variant="contained" onClick={ () => onRemoveChat(chat.id) }>
                                  <DeleteIcon />
                                </IconButton>
                    </ListItem>
                  </div>
                )
            }) }
          </List>
          <Input
            label="Имя чата"
            placeholder="Введите имя чата"
            onSubmit={ onAddChat }
           />
        </div>
        <div>
          { chat }
        </div>
      </main>
    </div>
  );
}

export default App;