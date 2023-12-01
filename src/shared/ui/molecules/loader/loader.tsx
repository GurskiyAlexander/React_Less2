import { Animated, Easing } from 'react-native'
import { IconLoader } from '@shared/ui/icons'
import React from 'react'

type Props = {
  color?: string
}

export const Loader = ({ color }: Props) => {
  const animatedValue = new Animated.Value(0)
  const animated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  const transformStyle = { transform: [{ rotate: animated }] }
  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start()

  return (
    <Animated.View style={transformStyle}>
      <IconLoader color={color} />
    </Animated.View>
  )
}
