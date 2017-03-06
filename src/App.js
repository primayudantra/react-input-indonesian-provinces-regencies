import React, { Component } from 'react';
import data from './data.json';
import './App.css'


var list_provinces = [];
var list_city = [];
class App extends Component {
  constructor(){
    super();
    this.state = {
      provinces:[],
      city:[]
    };
    this.onChangeProv = this.onChangeProv.bind(this)
  }

  componentWillMount(){
    data.forEach((item) => {
      list_provinces.push(item.label);
      list_city[item.label] = item.regencies;
      var cities = list_city[item.label]
      this.setState({list_city:cities});
    })
    this.setState({provinces:list_provinces})
  }

  onChangeProv(e){
    console.log(list_city[e.target.value])
    this.setState({
      city:list_city[e.target.value]
    })
  }

  onChangeCity(e){
    console.log(e.target.value)
  }

  render() {
    var optionProv = this.state.provinces.map((item,index) => {
      return(
        <option key={index} label={item} value={item}/>
      )
    })
    var optionCity = this.state.city.map((item,index) => {
      return(
        <option key={index} label={item.label} value={item.label}/>
      )
    })

    return (
        <div className="App">
          <div>
            Provinces : 
            <select 
              multiple={false}
              onChange={this.onChangeProv}
              >
              <option value={this.state.provinces} label="None"/>
              {optionProv}
            </select>
          </div>
          <div>
            Cities :
            <select 
              onChange={this.onChangeCity}
              >
              <option value='none' label="None"/>
              {optionCity}
            </select>
          </div>
      </div>
    );
  }
}

export default App;
