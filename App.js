import React, { Component } from 'react';  
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';  
  
export default class App extends Component {  
    
    state = {  
      password: '',  
      isPasswordVisible: true,  
      toggleText: 'Show',  
    };  
     
    handled = () => {  
        const { isPasswordVisible } = this.state;  
        if (isPasswordVisible) {  
            this.setState({ isPasswordVisible: false });  
            this.setState({ toggleText: 'Hide' });  
        } else {  
            this.setState({ isPasswordVisible: true });  
            this.setState({ toggleText: 'Show' });  
        }  
    };  
    render() {  
        return (  
            <View style={styles.container}>  
                <TextInput  
                    secureTextEntry={this.state.isPasswordVisible}  
                    style={styles.textInputStyle}  
                />  
                <TouchableOpacity onPress={this.handled}>  
                    <Text  style={{fontSize: 20}}>{this.state.toggleText}</Text>  
                </TouchableOpacity>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
    },
    textInputStyle:{
      width: 400, 
      height: 50,
      backgroundColor: '#a7a6a9', 
      color: 'white',
      fontSize: 20 
    },
});