import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    examType: {
        type: String, // e.g., Mid-term, Final
        required: true,
    },
    marks: {
        type: Number,
        required: true,
        min: 0,
    },
    totalMarks: {
        type: Number,
        required: true,
        min: 1,
    },
    grade: {
        type: String,
    },
    remarks: {
        type: String,
    }
}, { timestamps: true });

const Result = mongoose.model('Result', resultSchema);
export default Result;
