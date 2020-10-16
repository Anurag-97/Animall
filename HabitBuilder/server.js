const express= require('express')
const cors= require('cors')
const mongoose= require('mongoose')
const Habit=require('./schema/habitschema');
const User=require('./schema/userschema');
const path=require('path')

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri='mongodb+srv://animall:anurag@cluster0.fpbah.gcp.mongodb.net/animall?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI || uri,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb database connection established")
});
app.post('/adduser',(req,res)=>{
    User.findOne({gmail:req.body.gmail})
    .then((response)=>{
        if(response){
        //console.log('User exists')
        res.send("Already there")
        }
        else{
            const newuser=req.body;
            User.create(newuser,(err,data)=>{
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(201).send(`New user added ${data}`)
                }
            })
        }
    })

})
app.get('/habits',(req,res)=>{
    Habit.find({user:req.query.user})
    .then((response)=>{
        //console.log(response)
        res.send(response)})
    .catch(err=>res.status(400).send(`Opps !! ${err}`))
})
app.post('/habits/add',(req,res)=>{
    const user=req.body.user;
    const name=req.body.name;
    const duration=Number(req.body.duration);
    const target=Number(req.body.target);
    const countdone=Number(req.body.countdone);
    const newhabit=new Habit({user,name,duration,target,countdone});
    newhabit.save()
    .then(()=>res.json('Habit added!!'))
    .catch(err=>res.status(400).send(`Opps !! ${err}`))
})
app.put('/habits/update/:id',(req,res)=>{
    const id=req.params.id;
    Habit.update({_id:id},{$inc:{countdone:1}})
    .then(()=>res.send("Updated"))
    .catch(err=>res.send(err))
})
app.delete('/habits/delete/:id',(req,res)=>{
    console.log(req.params.id)
    Habit.findByIdAndDelete(req.params.id)
    .then(()=>res.send("Habit deleted"))
    .catch(err=>res.status(400).send(`Opps !! ${err}`))
})
if(process.env.NODE_ENV==='production'){
    app.use(express.static('habit-builder/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'habit-builder','build','index.html'));
    })
}
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})