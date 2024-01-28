const fs = require('fs')

const cleanify = (str) => {
    str = str.replace(/\s\s+/g, ' ');
    return str
}

const writeToFile = (content) => {
    fs.writeFile('test.md', content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Written Successfully")
        }
    });
}

fs.readFile("test.md", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    writeToFile(cleanify(data.toString()))
});
