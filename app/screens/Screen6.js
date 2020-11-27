
import React, { Component } from 'react';
import { TouchableOpacity,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const Page1 = ({label}) => (
  <View style={styles.container}>
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
  </View>
);

const Page2 = ({label}) => (
  <View style={styles.container}>
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
  </View>
);

const Page3 = ({label}) => (
  <View style={styles.container}>
    {/* <Text style={styles.welcome}>
      {label}
    </Text> */}
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
    <Text style={styles.instructions}>
    A confined space is a place that is substantially (although not always entirely) enclosed where there is a risk of death or serious injury from hazardous substances or dangerous conditions (e.g. lack of oxygen).
    </Text>
  </View>
);
export default class Screen6 extends Component {
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

        <ScrollableTabView
              tabBarActiveTextColor="#0099cc"
              renderTabBar={() => <TabBar underlineColor="#0099cc" />}>
            <Page1 tabLabel={{label: "Asbestos"}} label=" "/>
            <Page2 tabLabel={{label: "Blood Borne Viruses (BBVs)"}} label=""/>
            <Page3 tabLabel={{label: "Electricity"}} label=" "/>
            </ScrollableTabView>
       
       
   
    
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


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen5')}>

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
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen7')}>

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
    padding:deviceHeight * 0.01,
   	backgroundColor: '#202646',
	borderRadius:deviceHeight * 0.006
  }

});