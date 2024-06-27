const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    // taskCategory: {
    //     type: String,
    //     // required: true
    // },
    taskImages: [{
        type: String,
        // required: true
    }],
    // taskStartDate: {
    //     type: Date,
    //     // required: true
    // },
    taskEndDate: {
        type: Date,
        // required: true
    },
    taskAssignPerson: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    taskPriority: {
        type: String,
        // required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    },
    description: {
        type: String,
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
