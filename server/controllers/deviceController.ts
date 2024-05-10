const { Device, DeviceInfo } = require("../models/models.ts");
const ApiError = require("../error/ApiError.ts");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
  async create(req: any, res: any, next: any) {
    try {
      let { name, price, BrandId, TypeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        BrandId,
        TypeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i: any) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            DeviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  }

  //Функция получения данных с бд, фильтрация и пагинация
  async getAll(req: any, res: any) {
    let { BrandId, TypeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!BrandId && !TypeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }

    if (BrandId && !TypeId) {
      devices = await Device.findAndCountAll({
        where: { BrandId },
        limit,
        offset,
      });
    }

    if (!BrandId && TypeId) {
      devices = await Device.findAndCountAll({
        where: { TypeId },
        limit,
        offset,
      });
    }

    if (BrandId && TypeId) {
      devices = await Device.findAndCountAll({
        where: { TypeId, BrandId },
        limit,
        offset,
      });
    }

    return res.json(devices);
  }

  async getOne(req: any, res: any) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
