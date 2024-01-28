const fs = require('fs')

fs.readFile("3-read-from-file.md", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log(sum)