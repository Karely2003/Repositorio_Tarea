import React from 'react';
import { View, Button } from 'react-native';
import { Calendar as CalendarView } from 'react-native-calendars'; 
import * as Calendar from 'expo-calendar'; 

export default function Calendario() {

  async function askforcalendarPermissions() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
      console.log('Permiso de calendario concedido');
    } else {
      console.log('Permiso de calendario denegado');
    }
  }


  async function getDefaultCalendarSource() {
    try {
      const calendarsSource = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      if (calendarsSource.length === 0) {
        console.log('No se encontraron calendarios disponibles');
        return null;
      }
      const defaultCalendarId = calendarsSource[0].id;
      return defaultCalendarId;
    } catch (error) {
      console.error('Error al obtener calendarios:', error);
      return null;
    }
  }

  async function createTask(calendarId, title, startDate, endDate) {
    try {
      const newEvent = await Calendar.createEventAsync(calendarId, {
        title: title,
        startDate: startDate,
        endDate: endDate,
      });
      console.log('Evento creado con ID:', newEvent);
      return newEvent;
    } catch (error) {
      console.error('Error al crear el evento:', error);
    }
  }


  function MyCalendarScreen() {
    const handleCreateTask = async () => {
      await askforcalendarPermissions();

      const calendarId = await getDefaultCalendarSource();
      if (calendarId) {
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);

        await createTask(calendarId, 'Mi Tarea Importante', now, tomorrow);
      } else {
        console.log('No se pudo obtener un calendarId válido');
      }
    };

    return (
      <View>
        <Button title="Crear Nueva Tarea" onPress={handleCreateTask} />

        <CalendarView
          onDayPress={(day) => {
            console.log('Día seleccionado:', day);
          }}
          markedDates={{
            '2025-09-08': { marked: true, dotColor: 'blue' },
          }}
        />
      </View>
    );
  }

  return <MyCalendarScreen />;
}
