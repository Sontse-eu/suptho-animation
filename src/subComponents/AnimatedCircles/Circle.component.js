import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Image, TouchableOpacity} from 'react-native';

export const circleDiameter = 108;
const circleRadius = circleDiameter / 2;

export const Circle = ({translateX, translateY, dat, onClick}) => {
  const [pressed, setPressed] = useState(false);

  const scl = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scl.value * 255}],
    };
  });

  const selected = dat?.selected;

  return (
    <Animated.View
      style={{
        transform: [{translateX}, {translateY}, {scale: selected ? 1.2 : 1}],
        position: 'absolute',
        width: circleDiameter + (selected ? 10 : 0),
        height: circleDiameter + (selected ? 10 : 0),
        borderRadius: circleRadius + (selected ? 10 : 0),
        backgroundColor: selected ? '#6fe2c5' : '#000',
        overflow: 'hidden',
      }}>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => onClick(dat, selected)}
        onPressIn={() => {
          setPressed(true);
          scl.value = withSpring(1.1);
        }}
        onPressOut={() => {
          setPressed(false);
          scl.value = withSpring(1);
        }}>
        <Image
          source={dat.img}
          style={{
            width: circleDiameter - 6 + (selected ? 10 : 0),
            height: circleDiameter - 6 + (selected ? 10 : 0),
            borderRadius: circleRadius + (selected ? 10 : 0),
            overflow: 'hidden',
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
