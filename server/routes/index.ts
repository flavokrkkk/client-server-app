//Обьединяющий файл маршрутов
const Router = require("express");
const deviceRouter = require("./deviceRouter.ts");
const brandRouter = require("./brandRouter.ts");
const typeRouter = require("./typeRouter.ts");
const userRouter = require("./userRouter.ts");

const router = Router();

//Расписываем маршруты

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;
