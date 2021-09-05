const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date(),
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Please eneter an exercise',
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Please enter your exercise name',
                },
                time: {
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
    {
        toJSON: {
            virtuals: true,
        }
    }
);

workoutSchema.virtual('totalTime').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.time;
    }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;