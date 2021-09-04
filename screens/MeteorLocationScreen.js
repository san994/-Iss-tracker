import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

import axios from 'axios'



export default class MeteorLocationScreen extends Component{

    constructor(){
        super()
        this.state={
            meteors:{}
        }
    }

    componentDidMount=()=>{
        this.getMeteors()
    }

    getMeteors=()=>{
   
      axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=f8KwIZgXzpoEEERehdtjyL00abpTEvnOHmPJEMnr")
      .then((responce)=>{
          this.setState({meteors:responce.data.near_earth_objects})
      })
      .catch(err=>{
          alert(err.message)
      })

    }

    render(){
        if(Object.keys(this.state.meteors).length === 0){
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                    <Text>loading</Text>
                </View>
            )
        }else{

            let meteor_arr=Object.keys(this.state.meteors).map((meteor_date)=>{
                return this.state.meteors[meteor_date]
            })
            
            let meteors=[].concat.apply([],meteor_arr);
            
            meteors.forEach(function (element) {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score = threatScore;
            });


         return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItem:'center'
            }}>
                <Text>MeteorLocationScreen</Text>
            </View>
        )
      }
    }
} 