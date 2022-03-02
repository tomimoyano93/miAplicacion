import React from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import styles from './styles';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        padding: 20
      }}>
        Mi aplicacion
      </Text>

      <TextInput
        placeholder='escribe aqui'
        autoFocus={true}
        placeholderTextColor='#841584'
        style={styles.textInput}/>
      <Button
        onPress={() => null}
        title="Aplicacion"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
    </View>
  )
};

export default App
