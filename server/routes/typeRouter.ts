//Обьединяющий файл маршрутов
const Router = require("express");
const typeController = require("../controllers/typeController");
const router = Router();
const checkRole = require("../middleware/checkRoleMiddleware.ts");

//Расписываем маршруты

router.post("/", checkRole("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
