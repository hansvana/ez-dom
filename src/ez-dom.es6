class Helpers {
    /**
     *
     * Get an element by element name, class or id
     *
     * @param query
     * @param parent
     * @returns {Element}
     */
    get(query, parent = document)
    {
        return parent.querySelector(query);
    }

    /**
     *
     * Retuns a new element of type
     * @param type
     * @returns {Element}
     */
    create(name) {
        return document.createElement(type);
    }
}
let ß = new Helpers();