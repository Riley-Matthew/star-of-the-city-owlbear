import './style.css'
import OBR from"@owlbear-rodeo/sdk";
import viteLogo from '/vite.svg'
import { setupContextMenu } from "/contextMenu";
import { setupCounter } from './counter.js'
import { setupInitiativeList } from "/initiativeList";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter"  type="button"></button>
  </div>
  <div><h1>Initiation tracker</h1> 
  <ul id="initiative-list"></ul>
  </div>
`;
OBR.onReady(() => {
  setupContextMenu(); 
setupInitiativeList(document.querySelector("#initiative-list"));
});
setupCounter(document.querySelector('#counter'))

setupInitiativeList(document.querySelector("#initiative-list"));
