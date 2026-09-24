import {Schema, model} from 'mongoose';     

const announcementSchema = new Schema({ 
    title : {type:String,required:true,trim:true,
        maxLength:[100,'Title should be less than 100 characters']},
    description : {type:String,required:true,trim:true, default:'', maxLength:[1000,'Description should be less than 1000 characters']},
   category : {type:String,enum:['general','academic','dispilinary','other'],message:'Category must be either general, academic, dispilinary or other',default:'general'},
   severity : {type:String,enum:['low','medium','high'],message:'Severity must be either low, medium or high',default:'low'},
   targetAudience : {type:String,enum:['all','students','teachers','guardians','other'],message:'Target audience must be either all, students, teachers or guardians',default:'all'},
},{timestamps:true});

const announcement = model('Announcement', announcementSchema);
export default announcement;