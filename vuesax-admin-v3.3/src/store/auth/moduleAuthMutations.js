/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


export default {
	UPDATE_AUTHENTICATED_USER(state, user) {
		localStorage.setItem('userInfo', JSON.stringify(user));
		localStorage.setItem('userRole', 'admin');
	},
}