const mongooose = require('mongoose')
mongooose.set('strictQuery', false)

const db = 'mongodb+srv://NewOne:Durgesh%402022@cluster0.lvsxb5w.mongodb.net/travel';

mongooose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=> console.log("Your Database is Connected")).catch((err)=>{
    console.log(err);
})

