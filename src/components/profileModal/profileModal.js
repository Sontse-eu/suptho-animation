import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {BlurView, VibrancyView} from '@react-native-community/blur';

const ProfileModal = ({visible, onDismiss}) => {
  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      transparent
      onDismiss={onDismiss}>
      <BlurView blurType={'xlight'} style={styles.modalCon}>
        <View style={styles.profileConOut}>
          <View style={styles.profileCon}>
            <View style={styles.propicCon}>
              <Image
                source={require('../../assets/imgs/tImg3.jpg')}
                style={styles.propic}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.name}>Guy Hawkins</Text>
              <Text style={styles.uname}>@super_man</Text>
              <Text style={{...styles.desc, marginTop: 25}}>
                Whitman/History Major
              </Text>
              <Text style={styles.desc}>
                Hobbies: Blogging, Poetry, Languages
              </Text>

              <View style={styles.btnsCon}>
                <TouchableOpacity style={styles.showMoreBtn}>
                  <Text style={styles.showMoreBtnTxt}>SHOW MORE</Text>
                  <Feather name={'chevron-down'} color={'#888'} size={17} />
                </TouchableOpacity>

                <View style={{...styles.waveBtnCon, marginTop: 25}}>
                  <TouchableOpacity style={styles.waveBtn}>
                    <Text style={styles.waveBtnTxt}>SEND A WAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.closeBtnConOut}>
          <View style={styles.closeBtnCon}>
            <TouchableOpacity style={styles.closeBtn} onPress={onDismiss}>
              <Feather name={'x'} color={'#fff'} size={22} />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCon: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profileConOut: {
    flex: 1,

    justifyContent: 'center',
    padding: 20,
  },
  profileCon: {
    // flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 45,
  },
  propicCon: {
    position: 'absolute',
    top: -97,
    width: 194,
    height: 194,
    borderRadius: 100,
    padding: 7,
    backgroundColor: '#6fe2c5',
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 35,
    paddingTop: 120,
    paddingHorizontal: 35,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  uname: {
    color: '#000',
    fontWeight: '600',
    marginTop: 7,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
  btnsCon: {
    marginTop: 25,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  showMoreBtn: {
    flexDirection: 'row',
  },
  showMoreBtnTxt: {
    color: '#888',
    fontSize: 13.5,
    fontWeight: '600',
    marginRight: 6,
  },
  waveBtnCon: {
    width: '100%',
    height: 55,
    borderRadius: 60,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
  },
  waveBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveBtnTxt: {
    fontWeight: '700',
    fontSize: 16,
  },
  propic: {
    width: 180,
    height: 180,
    borderRadius: 100,
    overflow: 'hidden',
  },
  closeBtnConOut: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 50,
  },
  closeBtnCon: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileModal;
