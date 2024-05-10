const { Brand } = require("../models/models.ts");
const ApiError = require("../error/ApiError.ts");

class BrandController {
  async create(req: any, res: any) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req: any, res: any) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
