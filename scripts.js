const listElement = document.querySelector('#list');
const searchInput = document.querySelector('#search');

let listItems = [
  {
    full_name: 'Javascript 1',
    created_at: '2020-07-25T20:10:50',
    forks: 15300
  },
  {
    full_name: 'Javascript 2',
    created_at: '2020-07-25T20:10:50',
    forks: 15300
  },
  {
    full_name: 'Javascript 3',
    created_at: '2020-07-25T20:10:50',
    forks: 15300
  }
]

function render() {
  let html = '';
  listItems.forEach(item => {
    html += `
      <li>
        <div>
          <b>Nome:</b> ${item.full_name}
        </div>
        <div>
          <b>Criado em:</b> ${item.created_at}
        </div>
        <div>
          <b>Forks:</b> ${item.forks}
        </div>
      </li>
    `;
  })
  listElement.innerHTML = html;
}

render();