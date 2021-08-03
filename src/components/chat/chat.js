import './chat.css';

import React from 'react';
import Message from '../../components/message/message.js'
import AddMsgForm from "../../components/addMsgForm/addMsgForm.js"

const AUTHORS = {
    ME: "Me",
    BOT: "Robot"
}

export default function Chat(props) {
    const [ messageList, setMessageList ] = React.useState([
        // { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
        // { id: 1002, author: "Tom", message: "Hello, Amy!" },
        // { id: 1003, author: "Molly", message: "Hello, Amy and Tom!" }
    ]);
    
    const getCnt = (list = []) => {
        if (list.length === 0) return 1;
        let idArr = [];
        for (let i = 0; i < list.length; i++) {
          idArr.push(list[i].id);
        }
        return Math.max.apply(null, idArr) + 1;
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

    const submitHandler = (msg) => {
        setMessageList(currMessageList => ([
            ...currMessageList, 
            { id: getCnt(currMessageList), author: AUTHORS.ME, message: msg }
        ]));
    };

    return (
      <div>
        { messageList.map((msg) => 
            <div key={ msg.id } className="msgList">
                <span>{ msg.author }:</span> <Message text={ msg.message } />
            </div>
        ) }
        <AddMsgForm submitHandler={ submitHandler } authors={ AUTHORS } />
      </div>
    );
}