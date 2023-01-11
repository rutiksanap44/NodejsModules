let path = require("path");
let fs = require("fs");

// to create folder and respective files automatically with path.join function
// for(let i=1;i<=5;i++){
//     let dirToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirToMake);
//     fs.writeFileSync(path.join(dirToMake,"readme.md"),` # i am writing this content for ${dirToMake}`);
// }


// this gives extension of the file type
let varExtension = path.extname(path.join(__dirname, "tempFile.txt"));
console.log(varExtension);

// this gives name of the file in two ways
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname,"tempFolder"),"tempFile.txt");
console.log(name);