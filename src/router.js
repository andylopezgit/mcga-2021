import retiroRoutes from './routes/retiro.routes'
import jwtMiddle from './middleware/jwtMiddle'

export default (app) => {

  app.use('/api', /* jwtMiddle */ retiroRoutes);

}