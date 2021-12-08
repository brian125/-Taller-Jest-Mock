export const add      = (a, b) => a + b;
export const subtract = (a, b) => b - a;
export const multiply = (a, b) => a * b;
export const divide   = (a, b) => b / a;

import {jest} from '@jest/globals';

export const add2      = jest.fn();
export const subtract2 = jest.fn();
export const multiply2 = jest.fn();
export const divide2   = jest.fn();