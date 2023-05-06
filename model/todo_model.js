// const mongoose= require('mongoose');
// const db = require('../config/db');
// // we also need to store of which user this todo refers so import user model
// const UserModel= require('./user_model')
// const {Schema}= mongoose; // import schema property

// const todoSchema = new Schema (
//     {
//         title:{
//             type:String,
//             lowercase:true,
//             required:true,
            
//         },
//         desc:{
//             type:String,
//             required: true
//         },
//         userId:{
//             type:Schema.Types.ObjectId,
//             ref: UserModel.modelName
//         }
//     },{timestamps:true}
// );


// const TodoModel = db.model('todo',todoSchema);
// module.exports = TodoModel;