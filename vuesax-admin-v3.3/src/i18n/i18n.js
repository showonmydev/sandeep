/*=========================================================================================
  File Name: i18n.js
  Description: i18n configuration file. Imports i18n data.
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18nData from './i18nData'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en', // set default locale
  messages: i18nData,
})