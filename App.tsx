import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
interface ButtonProps {
  title: string
}
function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text> {props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Simbora!</Text>

      <Button title="Nlw eSports" />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 22
  },
  button: {
    padding: '2%',
    backgroundColor:'#666',
    borderRadius:5
  }
});
