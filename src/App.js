import './App.css';

import React from 'react';
// import ChatList from './components/chatList/chatList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './components/chat/chat'

function App() {
  const [ chatList, setChatList ] = React.useState([
      { id: 1001, name: "GroupChat", desc: "Hello, everyone!" },
      { id: 1002, name: "Tom", desc: "Hello, Amy!" },
      { id: 1003, name: "Molly", desc: "Hello, Amy and Tom!" },
      { id: 1004, name: "Федя", desc: "Федя, лучший друг!" }
  ]);

  const [ curChat, setCurChat ] = React.useState(chatList[0]);

  const handleChangeChat = chat => setCurChat(chat);

  return (
    <div className="App">
      <header>
        <h1>Chat me everythere!</h1>
      </header>
      <main>
        <div>
          <List subheader="Мои чаты:">
            { chatList.map(chat => {
                return (
                  <ListItem button 
                            key={ chat.id } 
                            selected={ chat.id === curChat.id } 
                            onClick={ () => { handleChangeChat(chat) } }>
                              { chat.name }
                  </ListItem>
                )
            }) }
          </List>
        </div>
        <div>
          <Chat id={ curChat.id } />
        </div>
      </main>
    </div>
  );
}

export default App;