
import React, { Component } from 'react';
import { Modal,TouchableOpacity,TouchableWithoutFeedback ,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Button from 'react-native-button';

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];
 

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Screen9 extends Component {

  constructor () {
    super()
    this.state = {
      types1: [{label: 'About 800 claims ', value: 1}, {label: 'More than 1000 claims ', value: 2}, {label: 'Less than 700 claims ', value: 3}, {label: 'None of the above', value: 4}],
      value1: 0,
      value1Index: 0,
      value1_1: 0,
      value1_1Index: 0,
      modalVisible: false,
  
    }
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }
  
  render() {

    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    var innerContainerTransparentStyle = {backgroundColor: '#fff',flex:1.5};

    
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
           <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
                <TouchableWithoutFeedback onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>               
               <View style={[styles.modalcontainer, modalBackgroundStyle]}>
             
               <View style={{flex:1,flexDirection:'column'}}></View>
            {this.state.value1Index == 1 ? 
            <View style={innerContainerTransparentStyle}> 
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={{flex:1,color:'#33b5e5',padding:deviceHeight * 0.01,fontSize:deviceHeight * 0.03}}>Correct</Text>
              <View style={{backgroundColor:'#33b5e5',flex:0.05}}></View>
              <View style={{flex:2,padding:deviceHeight * 0.02}}>      
              <Text style={{flex:2.5,fontSize:deviceHeight * 0.02}}>Wahoo!</Text>
              <Text style={{flex:2.5,fontSize:deviceHeight * 0.02}}>You got it right! Great job</Text>
            </View>
              <View style={{backgroundColor:'#cccccc',flex:0.05}}></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                       <View style={{flex:1,margin:1}}>
                      <Text style={{fontSize:deviceHeight * 0.02}}>Close</Text>
                      </View>
                </TouchableHighlight>
              </View>     
            </View>  
            </View>
  :

            <View style={innerContainerTransparentStyle}> 
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={{flex:1,color:'#33b5e5',padding:10,fontSize:deviceHeight * 0.03}}>Incorrect</Text>
              <View style={{backgroundColor:'#33b5e5',flex:0.05}}></View>
              <View style={{flex:2,padding:deviceHeight * 0.02}}>      
              <Text style={{flex:2.5,fontSize:deviceHeight * 0.02}}>Oops!</Text>
              <Text style={{flex:2.5,fontSize:deviceHeight * 0.02}}>You did not select the correct 
response.</Text>
            </View>
              <View style={{backgroundColor:'#cccccc',flex:0.05}}></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                       <View style={{flex:1,margin:1}}>
                      <Text style={{fontSize:deviceHeight * 0.02}}>Close</Text>
                      </View>
                </TouchableHighlight>
              </View>     
            </View>  
            </View>

              }
            <View style={{flex:1,flexDirection:'column'}}></View>
          </View>
          </TouchableWithoutFeedback>
      </Modal>






        <View style={{flexDirection:'column',flex:0.9,padding:deviceHeight * 0.02}}>
       
        <Text style={{fontSize:deviceHeight * 0.02,color:'#9a9a9a'}}>
 Question 01 of 02
        </Text >

        <Text style={{fontSize:deviceHeight * 0.02,color:'#0099cc'}}>
        How many claims are filed with Workcover Queensland annually for injuries?
        </Text >
         <View style={styles.component}>
        <RadioForm
              ref="radioForm"
              radio_props={this.state.types1}
              initial={null}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
                this.setState({
                  value1:value,
                  value1Index:index
                })
              }}
            />
   </View>

   <Button style={{fontSize: deviceHeight * 0.02,padding:deviceHeight * 0.02,marginTop:deviceHeight * 0.05,backgroundColor: '#2196f3',color:'white',borderRadius:50}}
              onPress = {() => {
                if(this.state.value1 == 0){
                  alert('Select Option');
                }else{
                  this.toggleModal(true)
                }
               
               }}> Submit </Button>
    
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen7')}>

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
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen10')}>

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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  modalcontainer: {
    flex: 1,
    padding:deviceHeight * 0.052,
    backgroundColor: '#ecf0f1',
  },
imgStyle:{
 margin:deviceHeight * 0.01,
},component:{
  marginTop:deviceHeight * 0.03,
},
modal: {
  flex: 0.5,
  alignItems: 'center',
  backgroundColor: '#f7021a',
  padding: deviceHeight * 0.13,
  margin:deviceHeight * 0.065
},
imgcharStyle:{
marginTop:deviceHeight * 0.02,
alignSelf:'center'

},
  textStyle :{
  fontWeight:'bold',
  fontSize:deviceHeight * 0.021,
  marginTop:deviceHeight * 0.01
  },
  textNormalstyle:{
    fontSize:deviceHeight * 0.021,
    marginLeft:deviceHeight * 0.01
  },
  buttonStyle:{
    padding:deviceHeight * 0.01,
   	backgroundColor: '#202646',
	borderRadius:deviceHeight * 0.006
  }

});