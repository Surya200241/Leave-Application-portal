const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  userId: String,
  type: String,
  fromDate: Date,
  toDate: Date,
  reason: String,
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Leave', leaveSchema);