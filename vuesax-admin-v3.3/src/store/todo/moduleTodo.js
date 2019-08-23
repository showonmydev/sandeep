/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleTodoState.js'
import mutations from './moduleTodoMutations.js'
import actions from './moduleTodoActions.js'
import getters from './moduleTodoGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}