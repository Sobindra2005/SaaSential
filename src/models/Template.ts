import mongoose from 'mongoose';

const AvailableTemplateSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required'],
        trim: true
    },
    projectType: {
        type: String,
        required: [true, 'Project type is required'],
        trim: true
    },
    html: {
        type: String,
        required: [true, 'HTML content is required']
    },
    css: {
        type: String,
        required: [true, 'CSS content is required']
    },
    thumbnailImage: {
        type: String,
        required: [true, 'Thumbnail image is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp before saving
AvailableTemplateSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
})

export const Template = mongoose.models.AvailableTemplates || mongoose.model('AvailableTemplates', AvailableTemplateSchema);