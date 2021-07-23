import './msgList.css';

import React from 'react';

import Message from '../../components/message/message.js'

export default function MsgList(props) {
    return props.list.map((msg) => 
        <div key={ msg.id } className="msgList">
            <span>{ msg.author }:</span> <Message text={ msg.message } />
        </div>
    );
}