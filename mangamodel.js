var mongoose = require('mongoose');
 
var Manga = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });
  
module.exports = new mongoose.model('Manga', Manga, "Manga");
