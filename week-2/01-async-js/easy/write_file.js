const fs = require('fs')
const content = "Some Content!"

fs.writeFile('test.md', content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Written Successfully")
    }
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log(sum)