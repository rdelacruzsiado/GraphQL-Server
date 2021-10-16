const { sequelize, Monitores: monitorModel } = require('../models');

class MonitorService {
  async getOne(id) {
    const monitor = await monitorModel.findOne({
      where: {
        id
      }
    });

    return monitor;
  }

  async getAll() {
    const monitores = await monitorModel.findAll();

    return monitores;
  }

  async createMonitor(name) {
    return await monitorModel.create({ nombre: name });
  }
}

module.exports = MonitorService;
