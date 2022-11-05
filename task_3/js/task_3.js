
const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

for (let i = 0; i < 5; i++) { 
    const div = document.createElement('div');
    div.classList = 'element';
    const rand = Math.floor(Math.random() * colors.length);
    container.appendChild(div).innerHTML = 'Element ' + `<span style='color: ${colors[rand]}'>${i+1}</span>`;
};
