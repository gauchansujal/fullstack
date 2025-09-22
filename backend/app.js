const path = requyire('path');
const pathString1 = path.format({
    dir: '/users/docs',
    base: 'file.txt'
});

console.log(pathString1);

const pathString2 = path.format({
    root : '/',
    dir : '/users/docs',
    name : 'file',
    ext : '.txt'
});

console.log(pathString2);

const parsePath = path.parse('/users/docs/old-file.txt');
parsedPath.base = 'new-file.md';
const newPath = path.format(parsePath);
console.log(newPath);