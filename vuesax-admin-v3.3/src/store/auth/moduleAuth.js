/*=========================================================================================
  File Name: moduleAuth.js
  Description: Auth Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleAuthState.js'
import mutations from './moduleAuthMutations.js'
import actions from './moduleAuthActions.js'
import getters from './moduleAuthGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}