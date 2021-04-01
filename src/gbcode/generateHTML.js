// const inquirer = require('inquirer');
// const fs = require('fs');
// const { writeReport } = require('../lib/reporter');
// //const employeeCard = require('./Employee')



// const generatedHTML = function (employeeCard) {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="./src/style.css">
//         <title>My Team Profile</title>
//     </head>
//     <body>

//         <header>

//             <h1> MY TEAM </h1>

//         </header

//         <div class="carryMyCards">

//         ${writeReport()}


//         </div>

//     </body>
//     </html>

// `;
// };


// fs.writeFile('./dist/myTeam.html', generatedHTML, (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("File written successfully\n");
//     }
// });