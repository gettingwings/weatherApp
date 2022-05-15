import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      weather:''
    }
  }

  componentDidMount(){
    this.callWeather()
  }

  callWeather = async()=>{
    let url = "https://fcc-weather-api.glitch.me/api/current?lat=28.66&lon=77.44";
      fetch(url).
      then (response => response.json()).
      then (data => {this.setState({weather:data});
    console.log(this.state.weather)}).
      catch (error => (console.log(error)))
  }
  
  render(){
    if(this.state.weather===''){
      return(
        <Text>Loading...</Text>
      )
    }else{

      // let imgPath = this.state.weather.weather[0].icon 
      // ? {uri:this.state.weather.weather[0].icon} 
      // : require('./assets/cloud.png');

      return (
        <View style={styles.container}>

          <View style={styles.header}> 
          <Text style={styles.textHeader}>Weather App</Text>
          </View>

          <View style={styles.imageBox}>
          <Image source={require('./assets/cloud.png')}  style={styles.img}/>
          </View>

          <Text style={[styles.textInner,{fontSize:30}]}>{this.state.weather.name}, {this.state.weather.sys.country}</Text>
          <Text style={styles.textInner}>Temperature: {this.state.weather.main.temp}&deg;C</Text>
          <Text style={styles.textInner}>Max Temp: {this.state.weather.main.temp_max}&deg;C</Text>
          <Text style={styles.textInner}>Min Temp: {this.state.weather.main.temp_min}&deg;C</Text>
          <Text style={styles.textInner}>Wind: {this.state.weather.wind.speed} KM/HR</Text>

        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: 'blue'
  },
  header:{
    position:'absolute',
    top:40,
    flex:0.08,
    width: 300,
    backgroundColor:'lightblue',
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center',
  },
  textHeader:{
    alignSelf:'center',
    fontSize:40,
    fontStyle:'italic',
    fontFamily:'Verdana'
  },
  textInner:{
    marginTop:20,
    fontSize:20,
    fontStyle:'italic',
    fontFamily:'Verdana'
  },
  img:{
    width:200,
    height:200,
    border:'solid',
    borderRadius:5
  },
  imageBox:{
    position:'absolute',
    top:115,
    flex:0.15,
    width:205,
    height:205,
   
  }
});
