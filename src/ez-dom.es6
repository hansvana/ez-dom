let helpers = el => {

    let element = (/\<.*\>/.test(el) ? create(el) : get(el));

    element.append = el => {
        element.appendChild(el);
    };

    return element;

    function create(el) {

        let newEl = document.createElement(
            el.match(/\<(.*)\>/)[1]
        );

        if (el.match(/\#(.*)/) !== null)
            newEl.id = el.match(/\#(.*)/)[1];

        return newEl;
    }

    function get(el) {
        return (document.querySelector(el) === null ?
            document :
            document.querySelector(el));
    }
};

let ß = helpers;