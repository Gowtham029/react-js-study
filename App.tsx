import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { concat } from "react-native-reanimated";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onPress = () => {
    console.log("Hello World");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            autoFocus
            style={styles.inputText}
            placeholder="enter your username"
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="enter your password"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Don't have account? Signup here.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    borderColor: "#2DC2BE",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
  },
  inputText: {
    height: 50,
  },
  forgot: {
    color: "#C81B1C",
    fontSize: 14,
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "#2DC2BE",
    color: "#fff",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
    marginBottom:10
  },
  loginText: {
    color: "white",
  },
});
export default App;
