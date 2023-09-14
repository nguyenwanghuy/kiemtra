import InventoryModel from "../models/inventory.model.js"

 const getAll= async (req, res) => {
   
        const products = await InventoryModel.find()
        res.json({
            data:products,
            message: 'Product'
        })
  }

 const getItemSm = async (req, res) => {
     try {
        const inventory = await InventoryModel.find()
       const results =  inventory.filter((item) => item.instock < 100);
       res.send({
        data: results,
        message:'success',
       })
       } catch (error) {
        res.send({message:'error'})
       }
 } 
const inventoryCtrl = {
    getAll,getItemSm
}
export default inventoryCtrl