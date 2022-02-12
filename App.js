
import React from 'react';
import type {Node} from 'react';
import {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [task, setTask] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState('false');
  const [search, setSearch] = useState('');

  const addItem = newTask => {
    setTask(task => [...task, newTask]);
    setTitle('');
    setDescription('');
  };
  const getFilteredList = ({title}) => {
    return title.filter(title => title.toLowerCase().includes(setSearch()));
  };
const updateTask = () => {};
  const viewTask = task => {
    return (
    <ScrollView>
    <View style={{
      width:"100%",
      flexDirection:"row",
      flexWrap:"wrap"
    }}>
      <View style={{
        width:"50%",
          borderWidth: 2,
           borderRadius: 5,
          borderColor: 'black',
        backgroundColor:'#008AD8',
      }}>
        <Text style={{
         
          fontSize:20,
          maxWidth:"100%",
          color:"#fff"
        }}>{task.title}</Text>
        <Text>{task.description}</Text>
      </View>
      <View style={{width:"50%"}}>
                  <TouchableOpacity
              onPress={() => updateTask({title: title, description: description})}
              style={{
                height: '10%',
                width: '10%',
                backgroundColor: 'grey',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
      </View>
</View>
      </ScrollView>
    );
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              height: '50%',
              width: '100%',
              backgroundColor: 'white',
              marginTop: '40%',
              padding: '5%',
              opacity: 20,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                height: '10%',
                width: '10%',
                backgroundColor: 'red',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>

            <TextInput
              value={title}
              onChangeText={text => setTitle(text)}
              placeholder={'Title'}
              style={{
                width: '80%',
                height: '10%',
                backgroundColor: '#D3D3D3',
                borderWidth: 2,
                borderRadius: 5,
                borderColor: 'black',
              }}
            />

            <TextInput
              value={description}
              onChangeText={text => setDescription(text)}
              placeholder={'Description'}
              maxLength={80}
              style={{
                width: '80%',
                height: '10%',
                backgroundColor: '#D3D3D3',
                borderWidth: 2,
                borderRadius: 5,
                borderColor: 'black',
                marginTop: '5%',
              }}
            />
            <View
              style={{
                width: '100%',
                height: '50%',
                alignItems: 'center',
                marginTop: '10%',
              }}>
              <TouchableOpacity
                onPress={() =>
                  addItem({title: title, description: description})
                }
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  width: '15%',
                  height: '15%',
                  backgroundColor: '#008AD8',
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: '40%',
          paddingHorizontal: '4%',
        }}>
        <TextInput
          onChangeText={text => getFilteredList({text})}
          style={{
            width: '80%',
            height: '20%',
            backgroundColor: '#D3D3D3',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'black',
          }}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            width: '15%',
            height: '20%',
            backgroundColor: '#008AD8',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      {task.map(task => viewTask(task))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;