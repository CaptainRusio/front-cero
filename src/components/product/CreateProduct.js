import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {  DatePicker } from 'antd';

import axios from 'axios';

class CreateProduct extends Component {
    
    
  constructor (){
        super();
        this.state = {
            id: '',
            productCategory: '',
            productExpirationDate: '',
            productName: '',
            productPrice: '',
        };
        this.handleInput = this.handleInput.bind(this);    //actualiza los aributos
        this.create = this.create.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    handleInput(e){                        // funcion evento
        const {value, name} = e.target
        this.setState({                     // cambia dato establecido en el estad0
          [name]: value
        })
        console.log(this.state);
      }
    

      onChange(date, dateString) {
        console.log(date, dateString);
        this.setState({productExpirationDate:dateString});
      }


    



  render() {
    return(


        <div className = "card">
        
          <div className = "form-group">
            <input
              type = "text"
              name = "id"
              className = "form-control"
              placeholder = "codigo"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "productName"
              className = "form-control"
              placeholder = "nombre"
              onChange = {this.handleInput}
            />
          </div>
          


            <div>
                <DatePicker onChange={this.onChange} />
                
                
            </div>





          <div className = "form-group">
            <input
              type = "text"
              name = "productCategory"
              className = "form-control"
              placeholder = "categoria"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "productPrice"
              className = "form-control"
              placeholder = "precio"
              onChange = {this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick= {this.create} >
            Ingresar
          </button>
        
      </div>    

);
    }



   
  
  create() {
      console.log("soy el rusio y soy perkin")
    axios.post('http://206.189.198.100:8081/backend-0.0.1-SNAPSHOT/app/create_product',this.state)
      .then(res => {
        alert(res)
      }).catch(error =>{
          alert(error)
      })
  }

}

export default CreateProduct;
