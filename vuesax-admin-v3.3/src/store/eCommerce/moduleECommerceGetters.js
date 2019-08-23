/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


export default {
    isInCart: state => itemId => {
        return state.cartItems.some((item) => item.objectID == itemId )
    },
    isInWishList: state => itemId => {
        return state.wishList.some((item) => item.objectID == itemId )
    }
}