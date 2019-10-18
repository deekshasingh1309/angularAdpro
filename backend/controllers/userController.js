const fs = require('fs');

// READ and parse json string to js object ------< get api >----------
var filedata=fs.readFileSync('data/users.json');
let obj = JSON.parse(filedata);
 
exports.userdetails = function (req, res) {  
    res.send(obj);
};


// const jsonString = JSON.stringify(customer)
// fs.writeFile('./newCustomer.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// })

exports.addUser = function (req, res) {
    fs.readFile('data/users.json', (err, data) => {
        if (err) return err;
        write(JSON.parse(data));
    })


    var write = (data) => {
        fs.writeFile('data/users.json', JSON.stringify(data), () => {
            res.status(200).send('new user added');
        })
    }
}
