const tasks = [
        {
                name: 'Theory of Mendel',
                done: undefined,
        },
        {
                name: 'Physical workshop',
                done: undefined,
        },
];
const onClick = (index) => {
        if (index.done === undefined || !index.done) {
                index.done = true;
        } else {
                index.done = false;
        }
};
tasks.forEach(element => {
        onClick(element);
        console.log(element.done);
});