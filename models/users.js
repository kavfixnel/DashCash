const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        default: ""
    },
    lname: {
        type: String,
        default: ""
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    elo: {
        type: Number,
        // Ask Sai about elo
        default: 800
    },
    dateSignedUp: {
        type: Date,
        default: Date.now()
    },
    picture: {
        // Maybe add a default picture
        type: String
    },
    balance: {
        type: Number,
        default: 0
    },
    /*currentGroup: {
        type: Schema.Types.ObjectId,
        ref: 'group',
        default: ""
    },*/
    progress: {
        type: Number,
        default: 0
    }
});

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;  