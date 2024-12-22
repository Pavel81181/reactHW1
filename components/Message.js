import '../Message.css'

function Message(props) {
    return ( 
        <h1 className = 'message'> 
            {props.text}
        </h1>
     );
}

export default Message;