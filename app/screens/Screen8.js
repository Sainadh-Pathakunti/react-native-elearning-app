
import React, { Component } from 'react';
import { TouchableOpacity,View,Dimensions, Text,Image,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Draggable from 'react-native-draggable';


export default class Screen7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1:80,
      item2:80,
      item3:80,
      item4:80,
      item5:80,
      item6:80,

    }
  }

  render() {
   
    
    return (
      <View style={{padding:10}}>
 <Text style={{fontSize:20,color:'#9a9a9a'}}>
 Question 01 of 03
        </Text >

        <Text style={{fontSize:20,color:'#0099cc'}}>
        Identify and remove workplace hazards
from below secnario?
        </Text >

        <Image  style={{marginTop:30,marginRight:10}} source={require('../imgs/screen_8_0.png')} />
      <View>
       
       <Draggable 
            imageSource={require('../imgs/screen_8_1.png')} 
            renderSize={this.state.item1} 
            x={30}
            y={200}
            onDragRelease={() => { this.setState({ item1:  0 }) }}
            onLongPress={()=>console.log('long press')}
            onShortPressRelease={()=>console.log('press drag')}
            onPressIn={()=>console.log('in press')}
            onPressOut={()=>console.log('out press')}
        />  
   </View>
   <View>
        <Draggable 
        imageSource={require('../imgs/screen_8_2.png')} 
        renderSize={this.state.item2} 
        x={100}
        y={200}
        onDragRelease={() => { this.setState({ item2:  0 }) }}
        onLongPress={()=>console.log('long press')}
        onShortPressRelease={()=>console.log('press drag')}
        onPressIn={()=>console.log('in press')}
        onPressOut={()=>console.log('out press')}
    /> 
</View>
 <View>
    <Draggable 
    imageSource={require('../imgs/screen_8_3.png')} 
    renderSize={this.state.item3} 
    x={150}
    y={100}
    onDragRelease={() => { this.setState({ item3:  0 }) }}
    onLongPress={()=>console.log('long press')}
    onShortPressRelease={()=>console.log('press drag')}
    onPressIn={()=>console.log('in press')}
    onPressOut={()=>console.log('out press')}
/> 
</View>
 <View>
<Draggable 
imageSource={require('../imgs/screen_8_4.png')} 
renderSize={this.state.item4} 
x={200}
y={200}
onDragRelease={() => { this.setState({ item4:  0 }) }}
onLongPress={()=>console.log('long press')}
onShortPressRelease={()=>console.log('press drag')}
onPressIn={()=>console.log('in press')}
onPressOut={()=>console.log('out press')}
/> 
</View>
 <View>
<Draggable 
imageSource={require('../imgs/screen_8_5.png')} 
renderSize={this.state.item5} 
x={200}
y={100}
onDragRelease={() => { this.setState({ item5:  0 }) }}
onLongPress={()=>console.log('long press')}
onShortPressRelease={()=>console.log('press drag')}
onPressIn={()=>console.log('in press')}
onPressOut={()=>console.log('out press')}
/> 
</View>
 <View>
<Draggable 
imageSource={require('../imgs/screen_8_6.png')} 
renderSize={this.state.item6} 
x={100}
y={50}
onDragRelease={() => { this.setState({ item6:  0 }) }}
onLongPress={()=>console.log('long press')}
onShortPressRelease={()=>console.log('press drag')}
onPressIn={()=>console.log('in press')}
onPressOut={()=>console.log('out press')}
/> 
    </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
imgStyle:{
 margin:10,
},
imgcharStyle:{
marginTop:20,
alignSelf:'center'

},
  textStyle :{
  fontWeight:'bold',
  fontSize:18,
  marginTop:10
  },
  textNormalstyle:{
    fontSize:16,
    marginLeft:10
  },
  buttonStyle:{
    padding:10,
   	backgroundColor: '#202646',
	borderRadius:5
  }

});