const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const habitSchema=new Schema({
    user:{type:String,required:true},
    name:{type:String,required:true},
    duration:{type:Number,required:true},
    target:{type:Number},
    countdone:{type:Number}
},{
    timestamps:true,
});

const Habit=mongoose.model('Habit',habitSchema);

module.exports=Habit;