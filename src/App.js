import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Input from './components/Atoms/Input/index'
import CustomModal from './components/Molecules/CustomModal';
import {styles} from './styles';

const App = () => {
  const [text,setText] = useState('');
  const [textList,setTextList] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  const [selectedItem,setSelectedItem] = useState({});

  const handleOnChangeInput = (value) => {
    setText(value);
  }

  const addItem = () => {
    console.warn(text);
    console.log(text);
    if (text !== '') {
      setTextList([
        ...textList, {
          id: textList.length + 1,
          value: text
        }
      ]);
      setText('');
    }
  }

  const handleDeleteItem = (id) => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  }

  const onHandleModal = (id) => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Input
          placeholder='Completar aqui'
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor='#841584'
          style={styles.textInput}
          value={text}
          handleOnChangeText={handleOnChangeInput}/>
        <Button title="Aceptar" color="#841584" onPress={() => addItem()}/>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => (
          <TouchableOpacity onPress={() => onHandleModal(item.id)}>
            <Text style={styles.textList}>{item.value}</Text>
          </TouchableOpacity>
        )}
          keyExtractor={item => item
          .id
          .toString()}/>
      </View>
      <CustomModal
        visible={modalVisible}
        title='Borrar Item'
        description='Esta seguro que desea eliminar este item?'
        selectedItem={selectedItem}
        buttonText='Si'
        onHandleDeleteItem={handleDeleteItem}/>
    </SafeAreaView>
  );
};

export default App;