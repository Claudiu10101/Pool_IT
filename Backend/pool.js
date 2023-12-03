const mongoose = require('mongoose')



const poolShema = new mongoose.Schema({
	Title:{
        type: String,
        required: true
    },
    MultipleChoice: {
        type: Boolean,
        default: false
    },
	Options: {
        type: [{
            Name: String,
            votes: {
                type: Number,
                default: 0
            }
        }],
    },
    Owner:{
        type: mongoose.SchemaTypes.ObjectId,
    },
    Voters:{
        type: [mongoose.SchemaTypes.ObjectId]
    }
})

module.exports = mongoose.model("Pool", poolShema);