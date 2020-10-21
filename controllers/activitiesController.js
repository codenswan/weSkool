const Activity = require('../models/Activity');

module.exports = {
    findById: async (req, res) => {
        try {
            const data = await Activity.findById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    findAll: async (req, res) => {
        try {
            const data = await Activity.find({});
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
}