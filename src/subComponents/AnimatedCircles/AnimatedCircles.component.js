import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import { useGravityAnimation } from "./useGravityAnimation.hook";
import { Circle } from "./Circle.component";

const S = StyleSheet.create({
  flex: { flex: 1 },
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export function AnimatedCircles(props) {
  const [viewDimensions, setViewDimensions] = useState(undefined);
  const handleLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setViewDimensions({ width, height });
  }, []);

  const isCanvasReady = viewDimensions !== undefined;

  return (
    <View style={S.flex} onLayout={handleLayout}>
      {isCanvasReady && (
        <AnimatedCirclesInner
          dimensions={viewDimensions}
          {...props}
        ></AnimatedCirclesInner>
      )}
    </View>
  );
}

export function AnimatedCirclesInner({ dimensions, vals, onSelect }) {
  const circles = useGravityAnimation(dimensions, vals);
  return (
    <View style={S.wrap}>
      {circles.map((p, index) => {
        return (
          <Circle
            key={index}
            translateX={p.x}
            translateY={p.y}
            dat={p.dat}
            onClick={onSelect}
          />
        );
      })}
    </View>
  );
}
