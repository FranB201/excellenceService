// SchedulerList.tsx
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import { styles } from './SchedulerListStyle';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr', 'May', 'Jun', 'Jul.', 'Ago', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy'
  };
  LocaleConfig.defaultLocale = 'es';
  
interface AgendaItem {
    day: string;
    name: string;
    height: number;
    hour: string;
}

interface ItemsMap {
    [date: string]: AgendaItem[];
}


export const SchedulerList = () => {
    // Static data for the calendar
    const items: ItemsMap = {
        '2024-05-10': [{
            day: '2024-05-10',
            name: 'Cat',
            height: 50,
            hour: '8:00 - 17:30'
        },
        {
            day: '2024-05-10',
            name: 'Fran',
            height: 50,
            hour: '8:00 - 17:30'
        },
        {
            day: '2024-05-10',
            name: 'Fran',
            height: 50,
            hour: '8:00 - 17:30'
        }


        ],
        '2024-05-11': [{
            day: '2024-05-11',
            name: 'Presentation Prep',
            height: 50,
            hour: '10:00'
        }],
        '2024-05-12': [{
            day: '2024-05-12',
            name: 'Client Feedback Session',
            height: 50,
            hour: '16:00'
        }]
    };

    const CALENDAR_THEME = {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'blue',
        indicatorColor: 'blue',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
   
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    };

    const renderEmptyItem = () => {
        return (
            <Text>No hay horarios programados</Text>
        );
    };

    return (

        <Agenda
            items={items}
            selected={'2024-05-10'}
            renderEmptyData={renderEmptyItem}
            renderItem={(reservation: AgendaEntry, isFirst: boolean) => {
                const item = reservation as AgendaItem;
                return (
                    <View style={{ marginRight: 10, marginTop: 17 }}>
                        <Text>{item.hour} - {item.name}</Text>
                    </View>
                );
            }}
            theme={{
                ...CALENDAR_THEME,
            }}
        />

    );
};
