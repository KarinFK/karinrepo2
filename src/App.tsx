import React from 'react';
import Info from './components/Info';
//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

interface IState {
  nama: string;
  kelas: string;
  isMorning: boolean;
  counter: Number;
}

class App extends React.Component<{}, IState> {
  state = {
    nama: 'Karin',
    kelas: 'XD/21',
    isMorning: false,
    counter: 0,
  }
  
  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1}); 

  }

  render() {
    const {nama, kelas, isMorning}= this.state
    
    return (
      <div className='app-wrapper'>
        <Info 
          nama={this.state.nama}
          kelas={this.state.kelas}
          isMorning={this.state.isMorning}
        />
        <Counter num={Counter} handleAppState={this.incrementCounter}/>
      </div>
    )   
  }
}

export default App;





/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

