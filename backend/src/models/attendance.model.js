    import { Schema,model } from "mongoose";

    const ATTENDANCE_STATUSES = ['present', 'absent', 'late','excused'];
    const attendanceSchema = new Schema({
        lesson:{
            type:Schema.Types.ObjectId, ref:'Lesson', required:true
        },
        student:{
            type:Schema.Types.ObjectId, ref:'Student', required:true
        },
        class:{
            type:Schema.Types.ObjectId, ref:'Class', required:true
        },
        teacher:{
            type:Schema.Types.ObjectId, ref:'Teacher', required:true
        },
        status:{
            type:String,enum:ATTENDANCE_STATUSES,required:true
        },
        notes:{
            type:String,trim:true,maxLength:[500,'Notes should be less than 500 characters'],default:''
        },
        markedBy:{
            type:Schema.Types.ObjectId, ref:'Teacher', required:true
        },
        markedAt:{
            type:Date, default:Date.now,required:true
        },
        date:{
            type:Date, required:true
        }
    }, {timestamps:true});

    attendanceSchema.index({ lesson: 1, student: 1, date: 1 }, { unique: true });
    attendanceSchema.index({ student: 1, date: -1 });
    attendanceSchema.index({ class: 1, date: -1 });
    attendanceSchema.index({ teacher: 1, date: -1 });

    const Attendance = model('Attendance', attendanceSchema);
    export default Attendance;
    export { ATTENDANCE_STATUSES };