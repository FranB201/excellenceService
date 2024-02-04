import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleProp, TextStyle} from 'react-native';
import {styles} from './AcordionProviderStyle';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<TextStyle>;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  titleStyle,
  headerStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleExpand}
        style={[styles.headerStyle, headerStyle]}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        <Text style={styles.iconStyle}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && <View style={styles.contentStyle}>{children}</View>}
    </View>
  );
};
