function count(counter) {
    setTimeout(() => {
        console.log(counter)
        count(counter+1)
    }, 1000)
}

count(1)