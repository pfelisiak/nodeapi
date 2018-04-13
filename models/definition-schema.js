var db = require('../config/db');

var DefinitionSchema = db.Schema({
  logType: String,
  description: String,
  owner: { type: db.Schema.Types.ObjetcId, ref: 'User' }
});

module.exports = DefinitionSchema;
