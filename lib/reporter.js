
const fs = require('fs')

function generateCards(employees){

    let output = ''
    //open html
    //output += '<html><body>'

    for(const e of employees){
        output += '\n<!-- start -->\n'
        output += e.getRowHtml()
        output += '\n<!-- end -->\n'
    }
    //close html
    //output += '</body></html>'

    //console.log(output)
    return output
}



function wrapWithPage(cards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./src/style.css">
        <title>My Team Profile</title>
    </head>
    <body>

        <header>

            <h1> MY TEAM </h1>

        </header>

        <div class="carryMyCards">
        <div class="cardContent">
            ${cards}
        </div>
        </div>
        
    </body>
    </html>
`
}

function writeToFile(html){
    fs.writeFileSync('report.html', html)
}

function writeReport(employees){
    const cards = generateCards(employees)
    const html = wrapWithPage(cards)
    writeToFile(html)
}

module.exports = {
    generateCards,
    writeReport,
    wrapWithPage,
    writeToFile
}