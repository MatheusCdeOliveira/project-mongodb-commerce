db
.produtos
.find({ nome: 
  { $nin: ["Big Mac", "McChicken"] } }, { _id: false, nome: true, vendidos: true, curtidas: true });