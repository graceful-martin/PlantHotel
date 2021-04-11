import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, TextInput} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{height:'80%',width:'100%'}}
            source={require('./pngwing.com.png')}/>
          <Text style={styles.title}>
            아이디/비밀번호 저장기
          </Text>
          <Button
            title="네이버"
            color="#f194ff"
            onPress={() => Alert.alert('abcd<br>1234')}
          />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#e0400f',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});