import React from 'react';

export default class JustAClass {
    constructor() {
        this.name = 'Some Name';
    }

    someFn() {
        return `I'm just a function call someFn ${this.name}`
    }
}