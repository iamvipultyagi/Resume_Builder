const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  education: [
    {
      school: String,
      degree: String,
      field: String,
      startDate: String,
      endDate: String,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  ],
  skills: [String],
  certifications: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
