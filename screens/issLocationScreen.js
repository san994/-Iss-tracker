//import { } from 'expo-status-bar'
import React,{Component} from 'react'
import {Text,View,StyleSheet,ImageBackground,SafeAreaView,Platform,Image,StatusBar } from 'react-native'
import MapView,{MapMarker} from "react-native-maps"
import axios from 'axios'

const bg = require('../assets/iss_bg.jpg')
const issIcon = require('../assets/iss_icon.png')

export default class IssLocationScreen extends Component{

    constructor(){
        super()
        this.state={
            location:{}
        }
    }

    componentDidMount=()=>{
        this.getIssLocation()
        console.log(this.state.location)
    }

    getIssLocation=()=>{

        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response=>{
            this.setState({location:response.data})
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg_Image.png')} style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>ISS Location</Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}
                            >
                               <MapMarker
                                coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}}
                               ><Image source={issIcon}></Image></MapMarker>
                            </MapView>
                        </View>
                    </ImageBackground>n 
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS === 'android'?StatusBar.currentHeight:0,
    },
    bgStyle:{
        flex:1,
        resizeMode:"cover",
    },
    titleContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    mapContainer:{
        flex:0.6
    },
    mapStyle:{
        width:'100%',
        height:'100%',
    }
})