import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout.js'
import WebediaBuilder from './containers/WebediaBuilder/WebediaBuilder.js';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WebediaBuilder/>
        </Layout>
      </div>
    );
  }
}
export default App;