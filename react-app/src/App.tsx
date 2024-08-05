import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import './App.css';

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
