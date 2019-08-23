/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


export default {
  eventById: state => (eventId) => state.calendarEvents.filter((event) => event.id == eventId)[0],

  // Simple Calendar Getters
  simpleCalendareventById: state => (eventId) => state.simpleCalendarEvents.filter((event) => event.id == eventId)[0],
}
