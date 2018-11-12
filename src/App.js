import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product/Product';
import CreateProduct from './components/product/CreateProduct';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        
        <CreateProduct/>
        <Product/>
      </div>
    );
  }
}

export default App;
