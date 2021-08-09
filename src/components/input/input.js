import React from 'react'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'

const Input = (props) => {
    const {
        label = 'Сообщение',
        placeholder = 'Введите сообщение',
        onSubmit,
    } = props
    const inputRef = React.useRef(null)

    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
            setTimeout(() => inputRef.current?.focus(), 200)
        }
    }

    return (
        <form className="app__form bordered" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered"
                variant="outlined"
                label={label}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            <IconButton
                type="submit"
                variant="contained"
                tabIndex={-1}
                title="Отправить"
            >
                <SendIcon />
            </IconButton>
        </form>
    )
}

export default Input