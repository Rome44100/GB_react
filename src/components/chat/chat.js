import './chat.css';

import React from 'react';
import { useParams, useRouteMatch } from 'react-router'
import Message from '../../components/message/message.js';
import AddMsgForm from "../../components/addMsgForm/addMsgForm.js";
import AUTHORS from "../../constants";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/actions/messages';

export default function Chat() {
    // const [ messageList, setMessageList ] = React.useState([
    //     // { id: 1001, author: "Amy", message: "Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone! Hello, everyone!" },
    //     // { id: 1002, author: "Tom", message: "Hello, Amy!" },
    //     // { id: 1003, author: "Molly", message: "Hello, Amy and Tom!" }
    // ]);

    // const chatId = props.id;
    // const { chatId } = useParams();

    const match = useRouteMatch("/chats/:chatId");
    const chatId = match.params.chatId;

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()
    
    const getCnt = (list = []) => {
        if (list.length === 0) return 1;
        let idArr = [];
        for (let i = 0; i < list.length; i++) {
          idArr.push(list[i].id);
        }
        return Math.max.apply(null, idArr) + 1;
    }
    
    // React.useEffect(() => {
    //     if( messageList.length && 
    //         messageList[messageList.length - 1].author !== AUTHORS.BOT) {
    //       setTimeout(() => {
    //         setMessageList((currMessageList) => [
    //           ...currMessageList,
    //           { id: getCnt(currMessageList), author: AUTHORS.BOT, message: "You should leave this chat!" }
    //         ])
    //       }, 1500)
    //     }
    // }, [ messageList ]);

    // React.useEffect(() => {
    //     if( messageList.length && 
    //         messageList[messageList.length - 1].author !== AUTHORS.BOT) {
    //       setTimeout(() => {
    //         dispatch(
    //           addMessage(chatId, {
    //               id: getCnt(Object.values(messageList)),
    //               author: AUTHORS.BOT,
    //               text: "You should leave this chat!",
    //           })
    //         )
    //       }, 1500)
    //     }
    // }, [ messageList ]);

    const submitHandler = (msg) => {
        // setMessageList(currMessageList => ([
        //     ...currMessageList, 
        //     { id: getCnt(currMessageList), author: AUTHORS.ME, message: msg }
        // ]));
        dispatch(
          addMessage(chatId, {
              id: `${getCnt(messageList)}`,
              author: AUTHORS.ME,
              text: msg,
          })
        )
    };

    return (
      <div>
        { messageList.map((msg) => 
            <div key={ msg.id } className="msgList">
                <span>{ msg.author }:</span> <Message text={ msg.text } />
            </div>
        ) }
        <AddMsgForm submitHandler={ submitHandler } authors={ AUTHORS } />
      </div>
    );
}