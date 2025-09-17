const Idea = require('../models/Idea');

// @desc    Get all ideas
// @route   GET /api/ideas
// @access  Public or Protected (depending on middleware)
const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const createIdea = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newIdea = new Idea({ title, description, user: req.user.id });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

const updateIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
