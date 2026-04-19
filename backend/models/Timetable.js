import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    dayOfWeek: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true,
    },
    periods: [{
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
        },
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
        },
        startTime: {
            type: String, // e.g., '09:00 AM'
            required: true,
        },
        endTime: {
            type: String, // e.g., '10:00 AM'
            required: true,
        }
    }]
}, { timestamps: true });

// Ensure one timetable per class per day
timetableSchema.index({ class: 1, dayOfWeek: 1 }, { unique: true });

const Timetable = mongoose.model('Timetable', timetableSchema);
export default Timetable;
