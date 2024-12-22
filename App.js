import logo from './logo.svg';
import './App.css';
import First from './components/First';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Message from './components/Message';


function App() {
  const userName = 'Pavel';
  return (
    <div>
      
      <Message text = 'Это REACT, детка.'/>
      
      <h1>Hello {userName} </h1>
      <First />
      <CurrentTime />
      <Heading number = 'первый' name = 'имя 1'/>
      <Heading number = 'второй' name = 'имя 2'/>
      <EventCard name = 'Новый год' place = 'Дома' date = '31 декабря' />
      <EventCard name = 'Крещение' place = 'Дача' date = '19 января' />

    </div>
  );
}

function Heading (props) {
  let themeWhite = true;
  return (
    <div> 
      <h2 className='heading'> Новый заголовок {props.number} {props.name} </h2>
      <p style={{color: themeWhite ? 'green' : 'red'}}> Новый текст</p>
      <a href='#'>Читать далее ...</a>
    </div>
  )
  
}

export default App;
