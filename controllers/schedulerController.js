const cueScheduler = require("../models/scheduler/cueScheduler");

// Defined methods for the cuesController
module.exports = {
  start: function(req, res) {
    cueScheduler.startCueScheduler();
    res.json({ msg: "cue scheduler started" });
  },

  stop: function(req, res) {
    cueScheduler.stopCueScheduler();
    res.json({ msg: "cue scheduler stopped" });
  },

  test: function(req, res) {
    cueScheduler.scheduleMinuteCues();
    res.json({ msg: "starting test cue scheduler" });
  },
};
