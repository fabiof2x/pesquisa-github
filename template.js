const languageSelect = document.querySelector('#language-tags');
const listElement = document.querySelector('#list');
const templateWorker = new Worker('./template_worker.js');

const config = new Proxy({
  listItems: [],
  languageTag: 'en-US'
}, {
  set: function (target, prop, value, receiver) {
    if (prop === 'listItems' || prop === 'languageTag') {
      //Reflect.set(target, prop, value, receiver);
      Reflect.set(...arguments);
      render();
      return true;
    }
    return false;
  }
})

languageSelect.addEventListener('change', changeLanguage);

function changeLanguage() {
  config.languageTag = languageSelect.value;
}

export function setList(list) {
  config.listItems = list;
}

function render() {
  const configParam = JSON.parse(JSON.stringify(config));
  templateWorker.postMessage(configParam);

  templateWorker.onmessage = function ({ data }) {
    listElement.innerHTML = data;
  }
}