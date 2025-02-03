const router = require('express').Router();
const Gym = require('../../models/Gym');

// Create a new gym
router.post('/', async (req, res) => {
  try {
    const gym = new Gym(req.body);
    await gym.save();
    res.status(201).json(gym);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all gyms
router.get('/', async (req, res) => {
  try {
    const gyms = await Gym.find();
    res.json(gyms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get gym by ID
router.get('/:id', async (req, res) => {
  try {
    const gym = await Gym.findById(req.params.id);
    if (!gym) {
      return res.status(404).json({ message: 'Gym not found' });
    }
    res.json(gym);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
