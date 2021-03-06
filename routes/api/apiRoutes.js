const router = require('express').Router();
const Workout = require('../../models/workout');


router.get('/api/workouts', (req, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body).then(data => { 
        res.json(data)
    }).catch(err => {
        res.json(err);
    });
});
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(10).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: { exercises: body }
        },
        {
            new: true, 
        }
    ).then(data => { 
        res.json(data)
    }).catch(err => {
         res.json(err);
    });
});
router.delete('/api/workouts', ({ body }, res) => {
    Workout.findByIdAndRemove(body.id).then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;