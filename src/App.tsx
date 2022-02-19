import React from 'react';
import Info from './components/Info';
import './App.css';
import Image from './components/Image';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Info nama="Karin" kelas= "XD/21" isMorning={true} />
        <Counter />
        <Image />
      </div>
    );
  }
}

export default App;