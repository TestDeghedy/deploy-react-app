import { Component } from 'react';
import './sass/main.scss';
import Layout from './components/Layout';


class App extends Component {
  
  render () {
    return (
      <div className="background background-first-color">
        &nbsp;
        <Layout />
      </div>
    )
  }
}

export default App;
