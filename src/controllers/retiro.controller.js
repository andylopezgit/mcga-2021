import Retiro from '../models/retiro.model';

const datos = {
  "descripcion": "retiro prueba"
}

let RetiroController = {

  getRetiros: async (req, res) => {
    try {
      const retiro = await Retiro.find();
      res
        .status(200)
        .json(retiro);
    } catch (error) {
      res
      console.log(error)
    }
  },
  saveRetiro: async (req, res) => {
    const body = req.body
    console.log(body)

    try {
      const savedRetiro = await Retiro.create(body);
      res
        .status(201)
        .json(savedRetiro);
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        });
    }
  },
  getRetiro: async (req, res) => {
    const _id = req.params.id;
    try {
      const retiro = await Retiro.findOne({ _id });
      res
        .status(200)
        .json(retiro)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  deleteRetiro: async (req, res) => {
    const _id = req.params.id;
    try {
      const revomedRetiro = await Retiro.findByIdAndDelete({ _id });

      if (!revomedRetiro) {
        return res.status(404).json({
          message: err
        })
      }

      res.json(revomedRetiro)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  updatedRetiro: async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    
    ;
    try {
      const updatedRetiro = await Retiro.findByIdAndUpdate(
        _id,
        body,
        { new: true });

      if (!updatedRetiro) {
        return res.status(404).json({
          message: err
        })
      }
      res
        .status(200)
        .json(updatedRetiro)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        })
    }
  }
};

export default RetiroController;