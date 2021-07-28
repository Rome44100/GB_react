import './addMsgForm.css';

import React from 'react';
import { Button, TextField } from "@material-ui/core";

export default function AddMsgForm(props) {
    const { submitHandler, authors } = props
    const [ msgVal, setMsgVal ] = React.useState("");

    const handlerMsgVal = (e) => {
        setMsgVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.target.children)

        if (submitHandler) {
            const msgField = document.querySelector("#outlined-multiline-static");

            if(msgVal !== "") {
                submitHandler(msgVal);
            }

            msgField.focus();
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
            />
          <Button variant="outlined" color="primary" type="submit">Отправить</Button>
        </form>
    );
}