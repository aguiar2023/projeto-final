import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SocialButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VnjdikpgR0E')} style={styles.button}>
        <View style={styles.buttonContent}>
          <FontAwesome name="graduation-cap" size={32} color="#FF0000" />
          <Text style={styles.buttonText}>TUTORIAL</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    paddingHorizontal: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
});

export default SocialButtons;
