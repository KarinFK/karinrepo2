import React from 'react';
import Info from './components/Info';
//import logo from './logo.svg';
import './App.css';

interface IState {
  nama: string;
  kelas: string;
  isMorning: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    nama: 'Karin',
    kelas: 'XD/21',
    isMorning: false,
  }
  
  render() {
    return (
      <>
        <Info 
          nama={this.state.nama}
          kelas={this.state.kelas}
          isMorning={this.state.isMorning}
        />
      </>
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

