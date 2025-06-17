import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User ID is required']
    },
    projectName: {
        type: String,
        required: [true, 'Project name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    template: {
        type: String,
        required: [true, 'Template type is required'],
        trim: true
    },
    html: {
        type: String,
        trim: true,
        default: ''
    },
    css: {
        type: String,
        trim: true,
        default: ''
    },
    templateId: {
        type: String,
        required: [true, 'Template ID is required'],
        trim: true
    },
    projectImage: {
        type: String,
        required: [true, 'Project image is required'],
        trim: true
    },
    lastModified: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Update the lastModified timestamp before saving
ProjectSchema.pre('save', function (next) {
    this.lastModified = new Date();
    next();
});

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema); 