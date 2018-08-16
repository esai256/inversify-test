import Vue, { Component } from 'vue';
import FormComponent from './components/FormComponent';
import 'babel-polyfill';
import IDENTIFIERS from './components/Identifiers';
import EmailComponent from './components/EmailComponent';
import { Container, interfaces } from 'inversify';
import 'reflect-metadata';
import IEmailComponent from './components/IEmailComponent';
import IFormComponent from './components/IFormComponent';

const container: Container = new Container();

function onDocumentReady() {
  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => {
      const element = document.createElement('div');

      element.setAttribute("id", "el");

      document.documentElement.appendChild(element);
      resolve();
    });
  });
}

async function doThings() {
  await onDocumentReady();

  container.bind<interfaces.Newable<IEmailComponent>>(IDENTIFIERS.EmailComponent).toConstructor<EmailComponent>(EmailComponent);
  container.bind<interfaces.Newable<IFormComponent>>(IDENTIFIERS.FormComponent).toConstructor<FormComponent>(FormComponent);
  const ActualFormComponent = container.get<interfaces.Newable<IFormComponent>>(IDENTIFIERS.FormComponent);
  const ActualEmailComponent = container.get<interfaces.Newable<IEmailComponent>>(IDENTIFIERS.EmailComponent);

  new Vue({
    el: '#el',
    provide: {
      EmailComponent: ActualEmailComponent
    },
    render() {
      return (
        <div>
          <h1>Hi. Below me begins injection.</h1>
          <ActualFormComponent></ActualFormComponent>
        </div>
      );
    }
  });
}

doThings();
