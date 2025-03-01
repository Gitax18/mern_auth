exports.fetchProducts = async (req, res) => {
  return res.status(200).json([
    { id: 1, name: "ps 5", price: 500 },
    { id: 2, name: "cashews", price: 650 },
    { id: 3, name: "ram 64gb ddr5", price: 5000 },
    { id: 4, name: "macbook m3 pro", price: 120000 },
  ]);
};
