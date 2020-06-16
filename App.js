import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
  
class App extends React.Component{

  state ={
    name:"State holding initial information. Press the button to change/update the value",
    isButtonVisible: true,  
  }

  updateState=()=>{
    this.setState({
      name:"The state is updated.",
      isButtonVisible: false,  

    })
    console.log("update", this.state)
  }
  
 render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textStlye}>

          {this.state.name}</Text>
          {this.state.isButtonVisible &&   <Button color="orange"  title="Modify The Value"   onPress={this.updateState}/>}
      </View>
    );
    }
  }
  export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C34',
    alignItems: 'center',
    
    justifyContent: 'center',
  }, textStlye: {
    fontSize:16,
    margin:20,
    color:"white",
      },

});