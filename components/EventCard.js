import '../Event.css'
function EventCard(props) {
    return ( 
        <div className='event'>
        <h1>
            Название события: {props.name}
        </h1>
        <h2>
        Место проведения: {props.place}
        </h2>
        <h2>
        Дата: {props.date}
        </h2>
        </div>
        
     );
}

export default EventCard;