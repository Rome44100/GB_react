import './chat.css';

import React from 'react';
import { useRouteMatch } from 'react-router'
import Message from '../../components/message/message.js';
import AddMsgForm from "../../components/addMsgForm/addMsgForm.js";
import AUTHORS from "../../constants";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageToBot } from '../../store/actions/messages';
import firebase from 'firebase';
import { changeIsAuth } from "../../store/actions/profile";

export default function Chat() {
    const dispatch = useDispatch();

    React.useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log("onAuthStateChange", { user });
        
        dispatch( changeIsAuth( Boolean( user ) ) );
      })
    })

    const match = useRouteMatch("/chats/:chatId");
    const chatId = match.params.chatId;

    const messageList = useSelector((state) => state.messages[chatId] || [])
    
    const getCnt = (list = []) => {
        if (list.length === 0) return 1;
        let idArr = [];
        for (let i = 0; i < list.length; i++) {
          idArr.push(list[i].id);
        }
        return Math.max.apply(null, idArr) + 1;
    }

    const submitHandler = (msg) => {
        dispatch(sendMessageToBot(chatId, {
          id: `${getCnt(messageList)}`,
          author: AUTHORS.ME,
          text: msg,
        }));
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