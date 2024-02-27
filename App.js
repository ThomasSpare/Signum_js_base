import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGNUM</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr 2fr repeat(2, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    div1: { gridArea: '2/1/3/2', backgroundColor: 'red' },
    div2: { gridArea: '2 / 2 / 3 / 3', },
    div3: { gridArea: '2 /3 / 3 / 4', },
    
  },
  text: {
    color: 'cyan',
    marginBottom: 750,
    marginLeft: 280,
    fontFamily: '',
    fontStyle: 'bold',
    },
  }
)
