import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, setEmail, setFullName, setConfirmPassword, setPassword } from '../redux/RegistrationSlice';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AppDispatch,RootState } from '../redux/store';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const { username, email, password, confirm_password ,status, successMessage, error } = useSelector((state: RootState) => state.registration);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUpPress = () => {
    dispatch(registerUser({ username, email, password, confirm_password }))
      .unwrap()
      .then(() => {
        if (status === 'succeeded') {
          navigation.navigate('Login');
        }
      })
      .catch(() => {});
  };
  
  return (
    <>
    <View style={styles.outerContainer}>
      <View style={styles.header}>
      <Text style={styles.title}>Let's Begin</Text>
      <Text style={styles.subtitle}>Create an Account</Text>
      </View>
    </View>
    <View style={styles.innerContainer}>
      <View style={styles.inputContainer}>
    <Text style={[styles.title, styles.inputText]}>Sign Up</Text>
    <Text style={styles.label}>Full Name</Text>
    <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => dispatch(setFullName(text))}
        value={username}
      />
      {username.includes(' ') && <FontAwesome name="check" size={20} color="green" />}
    <Text style={styles.label}>Email Address</Text>
    <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => dispatch(setEmail(text))}
        value={email}
        {.../\S+@\S+\.\S+/.test(email) && <FontAwesome name="check" size={20} color="green" />}
      />
    <Text style={styles.label}>Password</Text>
    <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        onChangeText={(text) => dispatch(setPassword(text))}
        value={password}
      />
      {password && (
            <>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={(text) => dispatch(setConfirmPassword(text))}
                secureTextEntry
                value={confirm_password}
              />
            </>
          )}
       <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
        <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
      </Pressable>
      <View style={styles.footer}>
      <Pressable style={styles.signUpButton} onPress={handleSignUpPress} disabled={status === 'loading'}>
        <Text style={styles.signUpButtonText}>Create Account</Text>
      </Pressable>
      <Pressable style={styles.registeredUser} onPress={() => navigation.navigate('Login')}>
        <Text>Already have an Account?</Text>
        <Text style={styles.signInText}>Log In</Text>
      </Pressable>
      </View>
      </View>
    </View>
    {error && (
      <Text style={styles.errorText}>{error}</Text>
    )}
    {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
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
  errorText: { 
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '80%',
    marginBottom: 10,
  },
  footer: {
    margin: 12,
  },
  registeredUser: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  signUpButton: {
    backgroundColor: '#020035',
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '90%',
    borderRadius: 8,
    marginBottom: 10,
  },
  signUpButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signInText: {
    fontSize: 20,
    color: '#CB7723'
  },
  inputText: {
    color: '#020035',
    padding: 5
  },
  inputContainer: {
    padding: 20,
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
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
  },
  forgotPassword: {
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 10,
    color: 'white',
  }
});

export default RegistrationScreen;