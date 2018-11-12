


import React, { Component } from 'react';

import axios from 'axios';

class Product extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            products: [],
            ready : false,
        }
    }

  render() {
      if(!this.state.ready){
            return(
                <div> <h1> Cargando ...</h1></div>
            )
      }else{
          return(
          <div>
            {this.state.products.map((elem) => {
                    return(
                       

            
          
            <div className= "card-header">
                <h3>{elem.productName}</h3>
                <p>{elem.productExpirationDate}</p>
            <p>{elem.productCategory}</p>
            <p>{elem.productPrice}</p>
                <span className = "badge badge-pill badge-danger ml-2">
                {elem.id}
                </span>
            </div>    
                );
            })}
          </div>
          );
      }
    }



   
  
  componentDidMount() {
    axios.get('http://206.189.198.100:8081/backend-0.0.1-SNAPSHOT/app/product')
      .then(res => {
        var products = res.data;
        console.log(products);
        this.setState({ products });
        this.setState({ready:true})
        console.log("Ya cargue")
      })
  }

}

export default Product;
