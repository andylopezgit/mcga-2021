import Cliente from "..//models/cliente.model";

let ClienteController = {

  getClientes: async (req, res) => {
    try {
      let msj = 'prueba'
      const clientes = await Cliente.find();
      res
        .status(200)
        .json(clientes);
    } catch (error) {
      res
      console.log(error)

    }
  },

  saveCliente: async (req, res) => {
    const body = req.body
    console.log(body)
    try {
      const savedCliente = await Cliente.create(body);
      res
        .status(201)
        .json(savedCliente);
    } catch (error) {
      res
        .status(500)
        .json({
          mensage: error
        })

    }
  },

  getCliente: async (req, res) => {
    const _id = req.params.id;
    try {
      const cliente = await Cliente.findOne({ _id });
      res
        .status(200)
        .json(cliente)
    } catch (error) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },

  deleteCliente: async (req, res) => {
    const _id = req.params.id;
    try {
      const revomedcliente = await Cliente.findByIdAndDelete({ _id });

      if (!revomedcliente) {
        return res.status(404).json({
          message: err
        })
      }

      res.json(revomedcliente)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },

  updatedCliente: async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const updatedCliente = await Cliente.findByIdAndUpdate(
        _id,
        body,
        { new: true });

      if (!updatedCliente) {
        return res.status(404).json({
          message: err
        })
      }
      res
        .status(200)
        .json(updatedCliente)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        })
    }
  }
};

export default ClienteController;
