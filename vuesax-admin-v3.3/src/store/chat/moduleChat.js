/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleChatState.js'
import mutations from './moduleChatMutations.js'
import actions from './moduleChatActions.js'
import getters from './moduleChatGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}