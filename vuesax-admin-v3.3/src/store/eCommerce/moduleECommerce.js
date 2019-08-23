/*=========================================================================================
  File Name: moduleecommerce.js
  Description: ecommerce Module
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import state from './moduleECommerceState.js'
import mutations from './moduleECommerceMutations.js'
import actions from './moduleECommerceActions.js'
import getters from './moduleECommerceGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}