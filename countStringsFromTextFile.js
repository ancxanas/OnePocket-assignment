const fs = require("fs")

//function reads text file named data.txt and counts the number of words in it.
const countStringFromTextFile = () => {
  fs.readFile("data.txt", "utf8", (error, data) => {
    if (error) throw error

    const stringLength = data.split(" ").length
    console.log(stringLength)
  })
}

countStringFromTextFile()
