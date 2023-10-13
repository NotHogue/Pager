import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  console.log('poo')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>blo</Text>
      <StatusBar style="auto" />
      <Pressable style={styles.inner} onPress={()=>alert('Fuck')}>
        <Text style={styles.text}>blahblah</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  inner: {
    borderColor: '#00FFFF',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5
  }
});
