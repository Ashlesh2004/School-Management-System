import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
    },
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
    }],
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }]
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
