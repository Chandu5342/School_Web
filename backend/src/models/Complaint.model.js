import { Schema, model } from 'mongoose'

const complaintSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'Title should be less than 100 characters']
    },
    description: {
        type: String,
        trim: true,
        default: '',
        maxLength: [500, 'Description should be less than 500 characters']
    },
    category: [
        {
            type: String,
            enum: ['general', 'academic', 'disciplinary', 'other'],
        },
    ],
    severity: [
        {
            type: String,
            enum: ['low', 'medium', 'high'],
        }
    ],
    status: [
        {
            type: String,
            enum: ['pending', 'in_progress', 'resolved'],
            default: 'pending'
        }
    ],
    reporter: {
        type: Schema.Types.ObjectId
    },

    witnesses: {
        type: String,
        trim: true,
        default: '',
        maxlength: [200, 'Witnesses cannot exceed 200 characters']
    },

    reportedParty: {
        type: String,
        trim: true,
        default: '',
        maxlength: [50, 'Reported party cannot exceed 50 characters']
    },

    photoEvidence: [{
        type: String,
        trim: true,
        default: ''
    }],

    dateFiled: {
        type: Date,
        required: true,
        default: Date.now
    },

    dateResolved: {
        type: Date,
        required: false
    },

    resolutionNotes: {
        type: String,
        trim: true,
        default: ''
    },

    resolutionDate: {
        type: Date,
        required: false
    }


}, { timestamps: true });

const Complaint = model('Complaint', complaintSchema);
export default Complaint;