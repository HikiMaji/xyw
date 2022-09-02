// ==UserScript==
// @name         xyw登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://10.11.1.3/*

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    let username = "*****";
    let password = "*****";

    let set = document.getElementsByClassName("edit_lobo_cell");


    set[1].value = username;
    set[2].value = password;

})();