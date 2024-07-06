import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
    <View style={styles.outerContainer}>
      <View style={styles.header}>
      <Text style={styles.title}>Welcome to your journal</Text>
      <Text style={styles.subtitle}>Sign Into Your Account</Text>
      </View>
    </View>
    <View style={styles.innerContainer}>
      <View style={styles.inputContainer}>
    <Text style={[styles.title, styles.inputText]}>Sign In</Text>
    <Text style={styles.label}>Your Email</Text>
    <TextInput
        style={styles.input}
        placeholder="Your Email"
      />
    <Text style={styles.label}>Password</Text>
    <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      </View>
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      {isChecked ? (
        <Ionicons name="checkmark-circle" size={24} color="green" />
      ) : (
        <Ionicons name="ellipse-outline" size={24} color="gray" />
      )}
      <Text style={styles.label}>Remember me</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newUser}>
        <Text>I'm a new user. Sign up</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    backgroundColor: '#020035',
    height: 10,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '80%',
    marginBottom: 10,
  },
  inputText: {
    color: '#020035',
    padding: 5
  },
  inputContainer: {
    padding: 17,
  },
  header: {
    display: 'flex',
    gap:10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  input: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#020035',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  newUser: {
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 10,
    color: 'white',
  },
  text: {
    fontSize: 10,
    color: 'white',
  },
});

export default LoginScreen;