import './addMsgForm.css';

import React, { useRef } from 'react';
import { Button, TextField } from "@material-ui/core";
import AUTHORS from '../../constants';

export default function AddMsgForm(props) {
    const { submitHandler, authors } = props
    const [ msgVal, setMsgVal ] = React.useState("");
    const textAreaEl = useRef(null);

    const handlerMsgVal = (e) => {
        setMsgVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submitHandler) {
            if(msgVal !== "") {
                submitHandler(msgVal);
            }
            textAreaEl.current.focus();
            setMsgVal("");
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="addMsgForm">
          <TextField
            style={{ marginTop: "20px" }}
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            disabled
            defaultValue={ authors.ME }
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
            ref={ textAreaEl }
            />
          <Button variant="outlined" color="primary" type="submit">Отправить</Button>
        </form>
    );
}