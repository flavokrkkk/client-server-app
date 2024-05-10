//Обьединяющий файл маршрутов
const Router = require('express')
const userController = require('../controllers/userController.js')
const router = Router()
const authMiddleware = require('../middleware/authMiddleware.js')

//Расписываем маршруты

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)


module.exports = router;