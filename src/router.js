import retiroRoutes from './routes/retiro.routes'
import jwtMiddle from './middleware/jwtMiddle'
import cors from 'cors'

export default (app) => {

  app.use(cors())
  app.use(() => {
    console.log('desde router')
  })
  app.use('/api', /* jwtMiddle */ retiroRoutes);

}