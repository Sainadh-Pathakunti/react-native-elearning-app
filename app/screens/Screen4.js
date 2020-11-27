import React, { Component } from 'react';
import { TouchableOpacity,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


export default class Screen4 extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection:'column',flex:0.9,padding:deviceHeight * 0.02}}>
        <Text style={{fontSize:deviceHeight * 0.03,color:'#0099cc'}}>
         Employer duty of care 
        </Text >
        <Text style={styles.textStyle}>
        in the workplace
        </Text >
        <Image style={styles.imgcharStyle}
        size={deviceHeight * 0.01}
        source={require('../imgs/screen_4_1.png')}
        />
      
      <View style={{flexDirection:'row',flex:1}}>
          
      <View style={{flexDirection:'column',flex:0.5}}>
     
      <View style={{flexDirection:'column',flex:0.8}}>
       <Text style={{marginTop:deviceHeight * 0.05}}>
        Your employer must ensure that the health and safety of yourself and others is not placed at risk by how business operations are conducted
        </Text >
        </View>
        <View style={{flexDirection:'column',flex:0.3}}>
        <TouchableOpacity style={styles.buttonStyle}
			onPress={() => {
                alert("Hi there!!!");
            }}
		  >
			 <Text style={{alignSelf:'center',color:'white'}}>Employee Obligations</Text>
		  </TouchableOpacity>
          <Text style={{fontSize:13,color:'#d70249',fontWeight:'bold',padding:10}}>
          Click on the button to know about Your employee obligations for safety in the workplace

          </Text>
          
          </View>
      </View>
      
      <View style={{flexDirection:'column',flex:0.5}}>
      <Image style={styles.imgcharStyle}
        size={10}
        source={require('../imgs/screen_4_2.png')}
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen3')}>

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
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen5')}>

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
  
  fontSize:deviceHeight * 0.02 
  },
  buttonStyle:{
    padding:deviceHeight * 0.01,
   	backgroundColor: '#202646',
	borderRadius:deviceHeight * 0.006
  }

});