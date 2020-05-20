const { Event } = require("../models");

class EventService {
  async add(req) {
    const eventInstance = new Event(req);
    await eventInstance.save();
    return eventInstance.toJSON();
  }

  async get(req = {}) {
    const events = await Event.find({ ...req, isActive: true }).lean();
    return events;
  }

  remove() {}
}

module.exports = new EventService();
