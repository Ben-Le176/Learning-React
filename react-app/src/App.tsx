import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import './App.css';
import { BsFillCalendarFill } from 'react-icons/bs';
import { Button } from './components/Button/Button';
import Like from "./Like";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
      <BsFillCalendarFill/>
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
