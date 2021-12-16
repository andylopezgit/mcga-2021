import retiroRoutes from './routes/retiro.routes'
import jwtMiddle from './middleware/jwtMiddle'
import cors from 'cors'

export default (app) => {

  var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors())
  app.use(() => {
    console.log('desde router')
  })
  app.use('/api', cors(corsOptions),/* jwtMiddle */ retiroRoutes);

}