import React, { Component } from 'react';
import { Modal,TouchableOpacity,TouchableWithoutFeedback ,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import { color } from 'react-native-reanimated';
import Button from 'react-native-button';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


export default class Screen10 extends Component {

  constructor(props) {
    super(props);
    this.state={
      checkbox1:false,
      checkbox2:false,
      checkbox3:false,
      checkbox4:false,
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
            {(this.state.checkbox1 == true && this.state.checkbox2 == true && this.state.checkbox3 == true)  ? 
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
              <Text style={{flex:1,color:'#33b5e5',padding:deviceHeight * 0.01,fontSize:deviceHeight * 0.03}}>Incorrect</Text>
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
 Question 02 of 02
        </Text >

        <Text style={{fontSize:deviceHeight * 0.02,color:'#0099cc'}}>
        What are the workplace hazards? Select all 
that apply and click on submit.
        </Text >
         <View style={styles.container}>
      
        <View style={{ flexDirection: 'row' }}>
        <CheckBox
            style={{padding: deviceHeight * 0.01,color:'red'}}
            onClick={()=>{
              this.setState({
                checkbox1:!this.state.checkbox1
              })
            }}
            value={this.state.checkbox1}
            isChecked={this.state.checkbox1}
            
        />
    <Text style={{marginTop: deviceHeight * 0.01,fontSize:deviceHeight * 0.02}}> Asbestos</Text>
  </View>
  <View style={{ flexDirection: 'row' }}>
        <CheckBox
            style={{padding: deviceHeight * 0.01,color:'red'}}
            onClick={()=>{
              this.setState({
                checkbox2:!this.state.checkbox2
              })
            }}
            value={this.state.checkbox2}
            isChecked={this.state.checkbox2}
            
        />
    <Text style={{marginTop: deviceHeight * 0.01,fontSize:deviceHeight * 0.02}}> Blood Borne Viruses (BBVs)</Text>
  </View>
  <View style={{ flexDirection: 'row' }}>
        <CheckBox
            style={{padding: deviceHeight * 0.01,color:'red'}}
            onClick={()=>{
              this.setState({
                checkbox3:!this.state.checkbox3
              })
            }}
            value={this.state.checkbox3}
            isChecked={this.state.checkbox3}
            
        />
    <Text style={{marginTop: deviceHeight * 0.01,fontSize:deviceHeight * 0.02}}>Electricity</Text>
  </View>
  <View style={{ flexDirection: 'row' }}>
        <CheckBox
            style={{padding: deviceHeight * 0.01,color:'red'}}
            onClick={()=>{
              this.setState({
                checkbox4:!this.state.checkbox4
              })
            }}
            value={this.state.isChecked}
            isChecked={this.state.checkbox4}
            
        />
    <Text style={{marginTop: deviceHeight * 0.01,fontSize:deviceHeight * 0.02}}>Hazardous Substances</Text>
  </View>
  <Button style={{fontSize: deviceHeight * 0.02,padding:deviceHeight * 0.02,marginTop:deviceHeight * 0.05,backgroundColor: '#2196f3',color:'white',borderRadius:deviceHeight * 0.05}}
              onPress = {() => {
                if(this.state.checkbox1 == false && this.state.checkbox2 == false && this.state.checkbox3 == false && this.state.checkbox4 == false){
                  alert('Select Option');
                }else{
                  this.toggleModal(true)
                }
                }}> Submit </Button>
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen9')}>

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

<View style={{flex:1}}></View>


 
</View>
</View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#F5FCFF',
  },
imgStyle:{
 margin:deviceHeight * 0.01,
},
imgcharStyle:{
marginTop:deviceHeight * 0.02,
alignSelf:'center'

},
modalcontainer: {
  flex: 1,
  padding:deviceHeight * 0.052,
  backgroundColor: '#ecf0f1',
},
modal: {
  flex: 0.5,
  alignItems: 'center',
  backgroundColor: '#f7021a',
  padding: deviceHeight * 0.013,
  margin:deviceHeight * 0.065
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