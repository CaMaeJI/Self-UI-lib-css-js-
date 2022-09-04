import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for(let i = 0; i< this.length; i++) {
        if(!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function(...classNames) {
    for(let i = 0; i< this.length; i++) {
        if(!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(className) {
    for(let i = 0; i< this.length; i++) {
        if(!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(className);
    }

    return this;
};

$.prototype.addAttr = function(attribute, value) {
    for(let i = 0; i< this.length; i++) {

        this[i].setAttribute(attribute, value);
    }

    return this;
};

$.prototype.removeAttr = function(attribute, value) {
    for(let i = 0; i< this.length; i++) {

        this[i].removeAttribute(attribute, value);
    }

    return this;
};




