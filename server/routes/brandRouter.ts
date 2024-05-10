//Обьединяющий файл маршрутов
const Router = require("express");
const brandController = require("../controllers/brandController");

const router = Router();

//Расписываем маршруты

router.post("/", brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
