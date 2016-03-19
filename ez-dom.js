"use strict";

/**
 *
 *
 *
 * ### Examples
 * var a = ß('#myDiv') //
 *
 */
var helpers = function helpers(el) {

    var element = /\<.*\>/.test(el) ? create(el) : get(el);

    element.append = function (el) {
        element.appendChild(el);
    };

    return element;

    function create(el) {

        var newEl = document.createElement(el.match(/\<(.*)\>/)[1]);

        if (el.match(/\#(.*)/) !== null) newEl.id = el.match(/\#(.*)/)[1];

        return newEl;
    }

    function get(el) {
        return document.querySelector(el) === null ? document : document.querySelector(el);
    }
};

var ß = helpers;