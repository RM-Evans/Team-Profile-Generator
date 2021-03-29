function writeReport(employees){

    let output = ''
    //open html
    output += '<html><body><ul>'

    for(const e of employees){
        output += '\n<!-- start -->\n'
        output += e.getRowHtml()
        output += '\n<!-- end -->\n'
    }
    //close html
    output += '</ul></body></html>'

    //console.log(output)
}

module.exports = {
    writeReport
}