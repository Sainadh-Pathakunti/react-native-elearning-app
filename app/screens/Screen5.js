
import React, { Component } from 'react';
import { TouchableOpacity,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Screen5 extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection:'column',flex:0.9,padding:deviceHeight * 0.02}}>
        <Text style={styles.textStyle}>
        How can I find out about
        </Text >
        <Text style={{fontSize:deviceHeight * 0.03,color:'#0099cc'}}>
        workplace safety issues?
        </Text >
       
        <Text style={styles.textStyle}>
        The Act fosters a cooperative spirit which encourages employers and employees to work for a healthier and safer environment
        </Text >
        <Text style={styles.textStyle}>
        This is achieved by open communication between both parties
        </Text >
        <Text style={styles.textStyle}>
        You can find out information on safety issues by:
         </Text >

        <Text style={styles.textNormalstyle}>
         Attending team meetings
        </Text >
        <Text style={styles.textNormalstyle}>
        Training and induction sessions
        </Text >
        <Text style={styles.textNormalstyle}>
        Reading company newsletters, flyers or staff 
	notices
        </Text >
        <Text style={styles.textNormalstyle}>
        Talking to your supervisor / manager or other 
	staff
        </Text >
        <Image style={styles.imgcharStyle}
        size={deviceHeight * 0.01}
        source={require('../imgs/screen_5_1.png')}
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen4')}>

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
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen6')}>

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
marginTop:deviceHeight * 0.02,
alignSelf:'center'

},
  textStyle :{
  
  fontSize:deviceHeight * 0.021,
  marginTop:deviceHeight * 0.01
  },
  textNormalstyle:{
    fontSize:deviceHeight * 0.021,
    marginLeft:deviceHeight * 0.01
  },
  buttonStyle:{
    padding:deviceHeight * 0.02,
   	backgroundColor: '#202646',
	borderRadius:deviceHeight * 0.006
  }

});