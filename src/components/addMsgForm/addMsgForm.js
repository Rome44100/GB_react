import React from 'react';

import './addMsgForm.css';

export default function MsgList(props) {
    return (
        <form onSubmit="" className="addMsgForm">
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
    );
}