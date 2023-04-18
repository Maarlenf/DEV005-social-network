/**
 * @jest-environment jsdom
 */

import home from '../src/components/home';

describe('home', () => {
  test('Is a function', () => {
    expect(typeof home).toBe('function');
  });
  test('Create DOM whit button', () => {
    const DOM = document.createElement('form');
    DOM.append(home());
    const haveAButton = DOM.querySelector('#singUp');
    expect(haveAButton).not.toBe(undefined);
  });
  test('after submit form call start', () => {
    const DOM = document.createElement('form');
    DOM.append(home());
    const form = DOM.querySelector('#formSingIn');
    const email = form.querySelector('#emailsingIn');
    const password = form.querySelector('#passingIn');
    const start = jest.fn();
    email.value = 'jaja@jaja.com';
    password.value = '123456';
    start(email, password);
    expect(start).toHaveBeenCalledTimes(1);
  });
});
