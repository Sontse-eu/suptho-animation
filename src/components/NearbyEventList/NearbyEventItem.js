import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class NearbyEventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.listItemCon}>
        <View style={styles.listItem}>
          <View style={styles.qrCon}>
            <QRCode value={'test'} />
          </View>
          <View style={styles.dataCon}>
            <View style={styles.dataConTxt}>
              <Text style={styles.title}>House Party</Text>
              <Text style={styles.desc}>Everyone with code could join us.</Text>
            </View>
            <View style={styles.peopleCon}>
              <View style={styles.peopleImgStack}>
                <Image
                  source={require('../../assets/imgs/tImg1.jpg')}
                  style={{...styles.img, ...styles.img1}}
                />
                <Image
                  source={require('../../assets/imgs/tImg2.jpg')}
                  style={{...styles.img, ...styles.img2}}
                />
                <Image
                  source={require('../../assets/imgs/tImg3.jpg')}
                  style={{...styles.img, ...styles.img3}}
                />
              </View>
              <Text style={styles.peopleCount}>+58 People</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemCon: {
    height: 170,
    width: 365,
    padding: 10,
    paddingRight: 0,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.11,

    elevation: 14,
  },

  qrCon: {
    justifyContent: 'center',
  },
  dataCon: {
    flex: 1,
    paddingLeft: 25,
  },
  dataConTxt: {
    flex: 1,
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
  },
  desc: {
    color: '#888',
  },
  peopleCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleImgStack: {
    flexDirection: 'row',
  },
  img: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
  },
  img2: {
    left: -8.5,
  },
  img3: {
    left: -17,
  },
  peopleCount: {
    flex: 1,
  },
});

export default NearbyEventItem;
