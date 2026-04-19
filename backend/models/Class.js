import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    section: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

// Ensure unique class+section combination
classSchema.index({ name: 1, section: 1 }, { unique: true });

const Class = mongoose.model('Class', classSchema);
export default Class;
