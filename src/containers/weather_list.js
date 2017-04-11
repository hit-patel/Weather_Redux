import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(citydata){
    console.log(citydata);
    const temps =_.map(citydata.list.map(weather => weather.main.temp), (temps) => temps - 273.15);
    const pressures =citydata.list.map(weather => weather.main.pressure);
    const humidity =citydata.list.map(weather => weather.main.humidity);
    const { lon , lat} = citydata.city.coord;

    return(
      <tr  key={citydata.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="blue" units="C"/></td>
        <td><Chart data={pressures} color="orange" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render(){
    return (
  <table className='table table-hover'>
          <thead>
            <tr>
              <th>city</th>
              <th>Temprature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
  </table>
    );
  }
}
function mapStateToProps(state){
  return { weather:state.weather };
}
export default connect (mapStateToProps)(WeatherList);
