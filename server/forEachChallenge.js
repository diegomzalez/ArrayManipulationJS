const tasks = [
        {
                name: 'Theory of Mendel',
                done: true,
        },
        {
                name: 'Physical workshop',
                done: false,
        },
        {
                name: 'Carabobo Battle',
                done: 'true',
        },
        {
                name: 'MR',
                status: 'false'
        }
];
const app = document.getElementById('app');
tasks.forEach(item => app.innerHTML += `<input type="checkbox" ${item.done && 'checked'}>${item.name}`);

