import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'

class Todo extends Component {
    render(){
        return(
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.navigation.navigate('Details',{text:this.props.text})
                    }
                }>
                <View>
         
                <Text style={styles.todo}>
                    {this.props.text}
                    
                </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    todo: {
      padding:7.5,
      backgroundColor:'white',
      width:'100%',
      borderRadius:5,
      marginBottom:7.5,
      shadowColor:'black',
      shadowOpacity:0.3,
      shadowOffset:{width:8, height:8},
      elevation:5,
    },
  });

export default Todo;