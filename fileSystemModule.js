let fs = require("fs");
let flag = fs.readFileSync("tempfile.js");

//to read the whole file as word to word
console.log("File reading "+flag);

//to create new file
fs.openSync("filetxt.txt","w");

//to write the text
fs.writeFileSync("filetxt.txt","I am writing this");

//to update or to add content in file
fs.appendFileSync("filetxt.txt",", I am adding this text at another step");

//to add and update
let varFlag = fs.readdirSync("tempFolder");
// console.log(varFlag[0]);

//to remove file
// fs.unlinkSync("tempFolder/"+varFlag[0]);

//to know if path is available
let varNew = fs.existsSync("filetxt.txt");
console.log(varNew);

let varNew2 = fs.lstatSync("first.js");
console.log(varNew2.isDirectory());
console.log(varNew2.isFile());

// use of mkdir and writeFileSync in for loop to create multiple files
// for(let i=1;i<=5;i++){
//     let dirToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirToMake);
    // fs.writeFileSync(dirToMake+"\\"+"readme.md",` # i am writing this content for ${dirToMake}`);
// }