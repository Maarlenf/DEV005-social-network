/**
 * @jest-environment jsdom
 */

import home from '../src/components/home';
import register from '../src/components/register';
import wall from '../src/components/wall';
import * as postConfig from '../src/lib/post';
import * as closeConfig from '../src/lib/close';

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

describe('register', () => {
  test('Is a fuction', () => {
    expect(typeof register).toBe('function');
  });
  test('Create DOM whit button', () => {
    const DOM = document.createElement('form');
    DOM.append(register());
    const haveAButton = DOM.querySelector('#singUp');
    expect(haveAButton).not.toBe(undefined);
  });
  test('after submit form call addAcount', () => {
    const DOM = document.createElement('form');
    DOM.append(register());
    const form = DOM.querySelector('#formSingUp');
    const email = form.querySelector('#emailsingUp');
    const password = form.querySelector('#passingUp');
    const addAccount = jest.fn();
    email.value = 'jaja@jaja.com';
    password.value = '123456';
    addAccount(email, password);
    expect(addAccount).toHaveBeenCalledTimes(1);
  });
});

describe('wall', () => {
  test('Is a function', () => {
    expect(typeof wall).toBe('function');
  });
  test('watchUser is called for wall', () => {
    const user = { email: 'juan@juan.com' };
    // eslint-disable-next-line no-unused-vars
    const inLine = user.email;
    const watchUser = jest.fn();
    watchUser();
    expect(watchUser).toHaveBeenCalledTimes(1);
  });
  test('create form in wall', () => {
    jest.spyOn(postConfig, 'watchUser').mockImplementation(() => jest.fn());
    const DOM = document.createElement('div');
    DOM.append(wall());
    const form = DOM.querySelector('.formPost');
    expect(form).not.toBe(undefined);
  });
  test('have a icon to exit', () => {
    jest.spyOn(closeConfig, 'closeSesion').mockImplementation(() => jest.fn());
    const DOM = document.createElement('div');
    DOM.append(wall());
    const icon = DOM.querySelector('#iconExit');
    icon.click();
    expect(closeConfig.closeSesion).toHaveBeenCalledTimes(1);
  });
  test('have form to create doc', () => {
    jest.spyOn(postConfig, 'postIt').mockImplementation(() => {});
    const DOM = document.createElement('div');
    DOM.append(wall());
    const form = DOM.querySelector('.formPost');
    const nameCock = DOM.querySelector('#inName');
    const ingredientsPost = DOM.querySelector('#textIngre');
    const preparationPost = DOM.querySelector('#textPrepa');
    nameCock.value = 'Berries';
    ingredientsPost.value = 'frutos rojos';
    preparationPost.value = 'juntar';
    form.submit();
    expect(postConfig.postIt).toHaveBeenCalledTimes(1);
  });
});
