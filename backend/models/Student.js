import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    enrolledClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    address: {
        type: String,
    },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
export default Student;
