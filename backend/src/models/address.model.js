import {Schema,model} from 'mongoose'
const  addressSchema = new Schema({
  street : {type:String,required:true,trim:true,maxLength:[100,'Street should be less than 100 characters']},
  city : {type:String,required:true,trim:true,maxLength:[50,'City should be less than 50 characters']},
  region : {type:String,required:true,trim:true,maxLength:[50,'Region should be less than 50 characters']},
  postalCode : {type:String,required:true,trim:true,maxLength:[20,'Postal code should be less than 20 characters']},
  country : {type:String,required:true,trim:true,maxLength:[50,'Country should be less than 50 characters']},
  isActive : {type:Boolean,default:true},
},{timestamps:true});

const Address = model('Address', addressSchema);
export default Address;