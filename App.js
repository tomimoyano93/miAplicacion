import React from 'react';
import {Text, View, Button,} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{
        fontSize: 20
      }}>
        Mi aplicacion
      </Text>
      <Button
        onPress={()=> null}
        title="Aplicacion"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
    </View>
  )
};

export default App
