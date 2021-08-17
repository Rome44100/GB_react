import './message.css';

export default function Message(props) {
    const { nick = "Umbrella123", render = () => {} } = props;
    return <span id={ nick }>{ props.author }: { props.text }</span>;
}