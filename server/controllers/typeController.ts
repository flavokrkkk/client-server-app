const { Type } = require("../models/models.ts");
const ApiError = require("../error/ApiError.ts");

class TypeController {
  async create(req: any, res: any) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req: any, res: any) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
