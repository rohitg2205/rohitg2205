const fs= require('fs');
const filepath='demo.txt';

fs.readFile(filepath,'utf8',(err, data)=>{
    if (err) 
    {
        console.error('Error reading file:',err);
    }
    else{
        console.log('File contents: \n',data);
    }
});

// npm init
// npm install express
// to run node filename.js
