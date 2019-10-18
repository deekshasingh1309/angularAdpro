module.exports = (app) => {
    const fetchData = require('./controllers/userController');

    //route for get api
    app.get('/userdetails', fetchData.userdetails);

    // post the details of users
    app.get('/adduser', fetchData.addUser);


}
