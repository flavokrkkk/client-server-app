//Обьединяющий файл маршрутов
const Router = require('express')
const deviceRouter = require('./deviceRouter.js')
const brandRouter = require('./brandRouter.js')
const typeRouter = require('./typeRouter.js')
const userRouter = require('./userRouter.js')


const router = Router()

//Расписываем маршруты

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)



module.exports = router;