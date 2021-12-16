import retiroRoutes from './routes/retiro.routes'

export default (app) => {

  app.use(cors())
  app.use(() => {
    console.log('desde router')
  })
  app.use('/api',/* jwtMiddle */ retiroRoutes);

}