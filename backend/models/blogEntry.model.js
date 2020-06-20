const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogEntrySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true},
  github: { type: String },
  // additionalLinks: { type: Array },
  // img: { data: Buffer, contentType: String },
}, {
  timestamps: true,
});

const BlogEntry = mongoose.model('BlogEntry', blogEntrySchema);

module.exports = BlogEntry;