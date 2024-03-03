import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.waveform}>Waveform</Text>
      </View>
      <Text style={styles.text}>SIGNUM</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'cyan',
    borderWidth: 2,
    borderRadius: 50,
  },
  text: {
    color: 'cyan',
    width: 100,
    marginTop: 290,
    marginLeft: 320,
    fontFamily: 'monospace',
    fontStyle: 'italic',
    transform: 'rotate(90deg)',
  },
  waveform: {
    backgroundColor: 'cyan',
    width: 600,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 220,
    marginRight: 30,
    transform: 'rotate(90deg)',
  }

});
