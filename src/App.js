import './App.css';

import React from 'react';
import { List, ListItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Chat from './components/chat/chat';
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Input from "./components/input/input";
import { addChat, removeChat } from './store/actions/chats';
// import firebase from 'firebase';
// import { changeIsAuth } from './store/actions/profile';

function App() {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     dispatch( changeIsAuth( Boolean( user ) ) );
  //   })
  // })

  const match = useRouteMatch("/chats/:chatId");

  const chatList = useSelector(state => state.chats);

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
    dispatch( addChat(`${ getCnt( Object.values( chatList ) ) }`, name) )
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