import React,{Component} from 'react'
import {Text,View,StyleSheet,SafeAreaView,TouchableOpacity,StatusBar,Platform,ImageBackground,Image} from 'react-native'

const bg = require('../assets/bg_image.png')
const iss = require('../assets/iss_icon.png')
const meteor = require('../assets/meteor_icon.png')

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source = {bg} style={styles.bgStyle}>
                    <View style={styles.titleBar}>
                    <Text style = {styles.titleText}>ISS TRACKER APP</Text>
                    </View>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate("Isstracker")}
                    >
                    <Text style={styles.buttonText}>ISS location</Text>
                    <Text style={styles.knowMore}>{'Know More --->'}</Text>

                    <Text style = {styles.numberStyle}>1</Text>
                    <Image source={iss} style={styles.imageStyle}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate("Meteor")}
                    >
                    <Text style={styles.buttonText}>Meteor Location</Text>
                    <Text style={styles.knowMore}>{'Know More --->'}</Text>

                    <Text style = {styles.numberStyle}>2</Text>
                    <Image source={meteor} style={styles.imageStyle}/>

                    </TouchableOpacity>
                 </ImageBackground>
            </View>
        )
    }
} 

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:'white',
    },
    droidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
       flex:0.25,
       marginLeft:50,
       marginRight:50,
       marginTop:50,
       borderRadius:20,
       backgroundColor:'white',
    },
    buttonText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginTop:70,
        paddingLeft:30
    },
    bgStyle:{
        flex:1,
        resizeMode:'cover',
    },
    imageStyle:{
      position:'absolute',
      height:200,
      width:200,
      resizeMode:'contain',
      right:20,
      top:-80
    },
    knowMore:{
        color:'red',
        fontSize:15,
        paddingLeft:30
    },
    numberStyle:{
     position:'absolute',
     color:'rgba(183,183,183,0.5)',
     fontSize:150,
     right:20,
     bottom:-15,
     zIndex:-1
    },
})