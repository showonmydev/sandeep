/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbarSearchAndPinList'
import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

const state = {
    isSidebarActive: true,
    breakpoint: null,
    sidebarWidth: "default",
    reduceButton: themeConfig.sidebarCollapsed,
    bodyOverlay: false,
    sidebarItemsMin: false,
    theme: themeConfig.theme || 'light',
    navbarSearchAndPinList: navbarSearchAndPinList,
    AppActiveUser: {
        id: 0,
        name: 'John Doe',
        about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
        img: 'avatar-s-11.png',
        status: 'online',
    },

    themePrimaryColor: colors.primary,

    starredPages: navbarSearchAndPinList.data.filter((page) => page.highlightAction),
    userRole: null,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar component
    windowWidth: null,
}

export default state
