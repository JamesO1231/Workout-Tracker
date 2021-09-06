const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: 'Please eneter an exercise',
                },
                name: {
                    type: String,
                    required: 'Please enter your exercise name',
                },
                duration: {
                    type: Number,
                    required: 'Please enter how long your exercise was',
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },

            }
        ]
    },
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;