// fs - filesystem -- it reads data from the file
// using fs we can read data and create a JS Object for data, then we can do read/write actions on that data

import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';

// Always build paths from __dirname. A bare './Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
// __dirname = current directory

const filePath = path.join(__dirname, 'User.json');
console.log('File Path: ',filePath);

const fileData = fs.readFileSync(filePath, 'utf-8');
// reads the entire User.json file synchronously and returns its contents as a plain string (via 'utf-8'), stored in fileData.
// 'utf-8' it's an encoding, not a file format — without it you'd get a raw Buffer; with it you get text you can hand to JSON.parse(fileData) on the next step.
// 'utf-8' tells Node how to turn the raw bytes into characters.


const userDataISObject = JSON.parse(fileData);

console.log(userDataISObject);


console.log(userDataISObject.username);
console.log(userDataISObject.password);


// Writing Data to a JSON file

const user = {
    name: "Prasad",
    role: "QA Engineer",
    phoneNumber: 9876543210
}

const outputPath = path.join(__dirname, 'output.json');
const jsonData = JSON.stringify(user);
// It's the inverse of JSON.parse on line 21. fs.writeFileSync can only write strings/Buffers, never objects — that's why this step is needed.

fs.writeFileSync(outputPath, jsonData); // it saves output.json in specified path(current directory)
// OR

//fs.writeFileSync('output.json', jsonData); // it stores output.json in root folder
// fs.writeFileSync('output.json', jsonData) synchronously writes that string to a file (creates it, or overwrites if it exists). 
// No encoding is needed here since jsonData is already a string; if the second arg were an object you'd get a TypeError.


console.log("JSON file created successfully: ");