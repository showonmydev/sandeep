/*=========================================================================================
  File Name: moduleCalendar.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleCalendarState.js'
import mutations from './moduleCalendarMutations.js'
import actions from './moduleCalendarActions.js'
import getters from './moduleCalendarGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}