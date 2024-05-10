//Обьединяющий файл маршрутов
const Router = require('express')
const deviceController = require('../controllers/deviceController')

const router = Router()

//Расписываем маршруты

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


module.exports = router;