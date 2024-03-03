import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleProp, TextStyle} from 'react-native';
import {styles} from './AcordionProviderStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<TextStyle>;
  buttoninformation?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  titleStyle,
  headerStyle,
  buttoninformation
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={[ headerStyle]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {buttoninformation && (
          <View style={{ marginRight: 10 }}>{buttoninformation}</View>
        )}
        <TouchableOpacity
          onPress={toggleExpand}
          style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Text style={[styles.titleStyle, titleStyle, { flex: 1 }]}>{title}</Text>
          <Text style={styles.iconStyle}>{isExpanded ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {isExpanded && <View style={styles.contentStyle}>{children}</View>}
    </View>
  );
};
