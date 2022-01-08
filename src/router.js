import retiroRoutes from './routes/retiro.routes'

export default (app) => {


  app.use('/api',retiroRoutes);



}