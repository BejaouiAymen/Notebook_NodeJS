const mongoose = require('mongoose') ;
const URL = 'mongodb+srv://yoda:root@cluster0.cm9nh.mongodb.net/yoda?retryWrites=true&w=majority'


mongoose.connect(URL,{ useUnifiedTopology: true , useNewUrlParser: true } )
    .then( ()=>
        {
            console.log('bd connecte') ;
        }
    ).catch(()=>
        {
            console.log('probleme connection base donne !')
        }
    )
    
