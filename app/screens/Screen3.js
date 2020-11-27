import React, { Component } from 'react';
import { ImageBackground,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Screen3 extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection:'column',flex:0.9,padding:deviceHeight * 0.02}}>
        <Text style={styles.textStyle}>
        Work Health and 
        </Text >
        <Text style={{fontSize:30,color:'#0099cc'}}>
        Safety Act 2011?
        </Text >
        <Text style={styles.textStyle}>
        The objective of the Act is to protect workers against harm to their health, safety and welfare through the elimination or minimisation of risks from work
        </Text >
        <Image style={styles.imgcharStyle}
        size={10}
        source={require('../imgs/screen_3_1.png')}
        />
        <Image style={styles.imgcharStyle}
        size={10}
        source={require('../imgs/screen_3_2.png')}
        />
        
    
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen2')}>

<View style={{flex:1,justifyContent:'center'}}>


  <Icon
   name="arrow-left"
   size={deviceWidth * 0.08}
   color="#7d7d7c"
   style={{marginLeft:deviceWidth * 0.05}}
 />

</View>
</TouchableHighlight>
<View style={{flex:0.5}}></View>
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen4')}>

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
 margin:deviceHeight * 0.01,
},
imgcharStyle:{
marginTop:deviceHeight * 0.02

},
  textStyle :{
  
  fontSize:deviceHeight * 0.021
  }

});