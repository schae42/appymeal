const mongoose = require('mongoose');
    
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 

})
    .then((res) => console.log(`DB connection established ${process.env.DB_NAME}`))
    .catch((err) => console.log(`Something went wrong: ${err}`));