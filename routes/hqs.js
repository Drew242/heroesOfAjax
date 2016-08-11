// Headquarters Controller //
// Routes Handlers for HQ model //

var HQ = require('../model/hq');

module.exports = {

  get : (req, res) => {
    if(req.params.id) {
      // Find One
      HQ.find({_id : req.params.id },
        function(err, hqs) {
          res.json(hq);
        });
      } else {
        // Find All
        HQ.find({}, function(err, hqs){
          res.json(hqs);
        }
      });
    },

    upsert : (req, res) => {
      if(req.params.id) {
        // Update since something exists
        HQ.find({_id : req.params.id },
          function(err, hqs) {
            res.json(hq);
          });
        } else {
          // Create
          var newHQ = new HQ(req.body);
          newHQ.save(function(err, doc) {
            res.json({success : 'HQ added!'});
          });
        }
      }

}
