dbPassword = 'mongodb+srv://damsconas:'+ encodeURIComponent('damilola') + '@dami-mongo-database.84s7b.mongodb.net/test?retryWrites=true';

//dbPassword = 'mongodb+srv://damsconas:<damilola>@dami-mongo-database.84s7b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
module.exports = {
    mongoURI: dbPassword
};
