/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleEmailState.js'
import mutations from './moduleEmailMutations.js'
import actions from './moduleEmailActions.js'
import getters from './moduleEmailGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}