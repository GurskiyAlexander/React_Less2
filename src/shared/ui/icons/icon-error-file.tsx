import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconErrorFile = ({ size }: TBaseIconProps) => (
  <Svg
    width={size ?? 148}
    height={size ?? 148}
    viewBox="0 0 148 148"
    fill="none"
  >
    <Circle cx={74} cy={74} r={74} fill="#403A47" />
    <Path
      fill="#6C78E6"
      fillRule="evenodd"
      d="M46 23h46c.09 0 .18.006.268.018a1.5 1.5 0 0 1 1.399.54l21 26c.277.342.378.77.315 1.173.012.088.018.178.018.269v63c0 5.523-4.477 10-10 10H46c-5.523 0-10-4.477-10-10V33c0-5.523 4.477-10 10-10Zm64.36 26L94 28.744V48a1 1 0 0 0 1 1h15.36ZM95 52a4 4 0 0 1-4-4V26H46a7 7 0 0 0-7 7v81a7 7 0 0 0 7 7h59a7 7 0 0 0 7-7V52H95Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F678BA"
      fillRule="evenodd"
      d="M55.825 59.56a1.5 1.5 0 0 1 2.122-2.12l4.44 4.439 4.439-4.44a1.5 1.5 0 0 1 2.12 2.122L64.508 64l4.44 4.44a1.5 1.5 0 0 1-2.121 2.12l-4.44-4.439-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122L60.264 64l-4.44-4.44Zm48.82 27.883a1.5 1.5 0 0 0-1.003-1.869A95.998 95.998 0 0 0 75.886 81.5a96.038 96.038 0 0 0-27.82 4.093 1.5 1.5 0 0 0 .868 2.872A93.037 93.037 0 0 1 75.886 84.5c1.002 0 2.002.016 3 .047V94a8.5 8.5 0 1 0 17 0v-7.345a92.262 92.262 0 0 1 6.89 1.791 1.5 1.5 0 0 0 1.869-1.003ZM81.886 84.69a93.65 93.65 0 0 1 4 .341V93.5a1.5 1.5 0 1 0 3 0v-8.099c1.34.188 2.674.404 4 .649V94a5.5 5.5 0 0 1-11 0v-9.31Zm.94-27.25a1.5 1.5 0 0 0 0 2.12L87.264 64l-4.44 4.44a1.5 1.5 0 0 0 2.122 2.12l4.44-4.439 4.439 4.44a1.5 1.5 0 0 0 2.12-2.122L91.508 64l4.44-4.44a1.5 1.5 0 0 0-2.121-2.12l-4.44 4.439-4.44-4.44a1.5 1.5 0 0 0-2.12 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
