import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './AcordionProviderStyle';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({title, children}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpand} style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.iconStyle}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && <View style={styles.contentStyle}>{children}</View>}
    </View>
  );
};
