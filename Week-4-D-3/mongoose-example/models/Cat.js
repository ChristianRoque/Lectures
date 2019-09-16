const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String },
	username: { type: String },
	avatarUrl: { type: String, default: 'images/default-avatar.png' }
});

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;
