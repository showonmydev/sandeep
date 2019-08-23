/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/

// MAIN COLORS - VUESAX THEME COLORS
let colors = {
	primary: '#D3001D',
	success: '#009A45',
	danger: '#FF830D',
	warning: '#FFD500',
	dark: '#1E1E1E',
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme:{ colors } });


// CONFIGS
const themeConfig = {
	theme: 'semi-dark',						        // options[String]: 'light'(default), 'dark', 'semi-dark'
	sidebarCollapsed: false,			    // options[Boolean]: true, false(default)
	navbarColor: "#000000",				      // options[String]: HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
	navbarType: "floating",				    // options[String]: floating(default) / static / sticky / hidden
	footerType: "static",				      // options[String]: static(default) / sticky / hidden
	routerTransition: 'zoom-fade',		// options[String]: zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
	disableCustomizer: false,			    // options[Boolean]: true, false(default)
	hideScrollToTop: false,				    // options[Boolean]: true, false(default)
	disableThemeTour: false,					// options[Boolean]: true, false(default)

  // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

export default themeConfig
