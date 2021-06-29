import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ProfileModal} from '.';

const ProfileModalScreen = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={{color: '#0066cc', fontSize: 16}}>
          PRESS TO VIEW PROFILE
        </Text>
      </TouchableOpacity>

      <ProfileModal visible={showModal} onDismiss={() => setShowModal(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileModalScreen;
