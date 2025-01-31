const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  membership_plan: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gym', gymSchema);
