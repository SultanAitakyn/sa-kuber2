import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  const onNameClick = async() => {
    try {
      setLoading(true);
      let response = await fetch('http://localhost:8000/name/');
      let text = await response.json();
      setName(text.name);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const onLastNameClick = async() => {
    try {
      setLoading(true);
      let response = await fetch('http://localhost:8000/lastName/');
      let text = await response.json();
      setLastName(text.lastName);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const onAgeClick = async() => {
    try {
      setLoading(true);
      let response = await fetch('http://localhost:8000/age/');
      let text = await response.json();
      setAge(text.age);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column', width: "300px"}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>Name </p>
          <button onClick={onNameClick}>Click</button>
          <p>{name}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>Last Name </p>
          <button onClick={onLastNameClick}>Click</button>
          <p>{lastName}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>Age </p>
          <button onClick={onAgeClick}>Click</button>
          <p>{age}</p>
        </div>
      </div>
      {loading && 'Loading...'}
    </div>
  );
}

export default App;
