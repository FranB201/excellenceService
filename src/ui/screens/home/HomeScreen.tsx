import React, { useRef } from 'react'
import { Animated, FlatList, Image, ScrollView, Text, Vibration, View } from 'react-native'
import { HomeStyle } from './HomeStyle'
import { InputAvatar } from '../../components/inputs/InputAvatar';
import { MessageCard } from '../../components/cards/messageCard/MessageCard';



interface ListItem {
    type: 'header' | 'input' | 'message';
    source?: any; // Puedes especificar un tipo más adecuado para tus imágenes
    name?: string;
    messageText?: string;
    date?: string;
    avatarUri?: string;
  }
  
  const data: ListItem[] = [
    {
      type: 'header',
      source: require('../../assets/homeImgs/pontealdia.png'),
    },
    {
      type: 'input',
    },
    {
      type: 'message',
      name: 'Catherine Marin',
      messageText: 'Buenas!, Queria daros la enhorabuena por el gran trabajo de estas fiestas!, Seguir así equipazo! 💪',
      date: '14 ene',
      avatarUri: 'avatar3',
    },
     {
      type: 'message',
      name: 'Carmen López',
      messageText: 'Hola 👋, recordad por la revisar la máquina extractora de zumos, gracias.',
      date: '22 dic',
      avatarUri: 'avatar2',
    },
    {
      type: 'message',
      name: 'Jose Luis',
      messageText: 'Buenas tardes, recordad que esta semana tenemos que vender mucho solomillo, ánimo, Podemos!!',
      date: '22 dic',
      avatarUri: 'avata1',
    },
];

const renderItem = ({ item }: { item: ListItem }) => {
    switch (item.type) {
          case 'header':
            return <Image source={item.source} style={{ width: '95%', height: 175, marginHorizontal: 10, borderRadius: 20}} />;
          case 'input':
            return <InputAvatar placeh='Comparte algo con tu equipo...' />;
          case 'message':
            return <MessageCard name={item.name} messageText={item.messageText} date={item.date} avatarUri={item.avatarUri} />;
          default:
            return null;
        }
      };

      export const HomeScreen = () => {
        return (
          <View style={HomeStyle.container}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      };