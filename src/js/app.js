window.DARKNESS = {};

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWeb();
flsFunctions.collapseMenu();

import * as nav_Button from "./modules/nav.js";
nav_Button.navButton();

import * as navigation_Page from "./modules/nav_page.js";
navigation_Page.navigationPage();

import * as header from "./modules/header.js";
header.canvas();

import * as send from "./modules/form.js"
send.form_send();