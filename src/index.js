import { Data } from './modules/Data';
import { DOM } from './modules/Dom';
import './styles.css';

const textfield = document.querySelector('.location');
const button = document.querySelector('.newLocation');
const form = document.querySelector('.newLocation');

const data = Data();
await data.fetchData('London');
const dom = DOM(data);
dom.setDiv();

button.addEventListener('click', async (e) => {
  e.preventDefault();
  await data.fetchData(textfield.value);
  dom.setDiv();
});

textfield.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
    e.preventDefault();
    await data.fetchData(textfield.value);
    dom.setDiv();
    }
  });
