import React, { Component } from 'react';
import { ImageBackground,TouchableOpacity,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen2 from '../screens/Screen2';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;



export default class Screen1 extends Component {

  render() {
  
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
         <View style={{flexDirection:'column',flex:0.9}}>
           <Image style={styles.imgStyle}
        size={deviceWidth * 0.02}
        source={require('../imgs/screen_1_tittle.png')}
        />
        
        <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 0.6, flexDirection: 'column'}}>
        <Text style={styles.textStyle}>About 800 claims are filed with Workcover Queensland annually for injuries sustained in the hotel industry</Text>
        <Text style={styles.textStyle}>Essentially work health and safety is the systems and processes we put in place to define how we do things – whilst minimising our exposure to risk</Text>
        <Text style={styles.textStyle}>The culture of the workplace needs to be supportive of the aim to minimise harm</Text>
        </View>
        <View style={{ flex: 0.4, flexDirection: 'column'}}>
        <Image style={styles.imgcharStyle}
        size={deviceWidth * 0.02}
        source={require('../imgs/screen_1_char.png')}
        />
        </View>
        </View>
        </View>

        <View style={{backgroundColor:'#f0efec',flexDirection:'row',flex:0.1}}>

          <TouchableHighlight style={{flex:1}}  onPress={() =>  this.props.navigation.navigate('Screen1')}>
         
         <View style={{flex:1,justifyContent:'center'}}>
          
          
            <Icon
             name="home"
             size={deviceWidth * 0.08}
             color="#7d7d7c"
             style={{marginLeft:deviceWidth * 0.05}}
           />
          
          </View>
          </TouchableHighlight>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}></View>
        
          {/* <TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen1')}>
         
         <View style={{flex:1,justifyContent:'center'}}>
          
          
            <Icon
             name="arrow-left"
             size={deviceWidth * 0.08}
             color="#7d7d7c"
             style={{marginLeft:deviceWidth * 0.05}}
           />
          
          </View>
          </TouchableHighlight> */}
          <View style={{flex:0.5}}></View>
          <TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen2')}>
         
         <View style={{flex:1,justifyContent:'center'}}>
          
          
            <Icon
             name="arrow-right"
             size={deviceWidth * 0.08}
             color="#7d7d7c"
             style={{marginLeft:deviceWidth * 0.05}}
           />
          
          </View>
          </TouchableHighlight>
         
     
           
        </View>
       
    </View>

  
    );
  }
}

const styles = StyleSheet.create({
imgStyle:{
 margin:deviceWidth * 0.02,
},
imgcharStyle:{
// marginBottom:100,
position: 'absolute',
marginTop:deviceWidth * 0.3,
marginRight:deviceWidth * 0.25
},
  textStyle :{
  padding:deviceWidth * 0.02,
  marginLeft:deviceWidth * 0.05,
   
  }

});