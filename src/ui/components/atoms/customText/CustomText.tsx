import React, { ReactNode } from 'react';
import { Text, TextStyle, TextProps, StyleSheet } from 'react-native';
import { styles } from './CustomTextStyle';

interface CustomTextProps extends TextProps {
    children: ReactNode;
    style?: TextStyle | TextStyle[];
  }

  export const CustomText: React.FC<CustomTextProps> = ({ children, style, ...props }) => (
    <Text style={[styles.globalFontStyle, style]} {...props}>
      {children}
    </Text>
  );
  