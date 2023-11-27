const express = require('express')
const app = express();
const router = express.Router()
const mongoose = require('mongoose');
async function connectDatabase() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/test');
    mongoose.connect('mongodb+srv://aligohar:LUkdSqHFqxw3JbTO@cluster0.yll3xil.mongodb.net/Todolist?retryWrites=true&w=majority')
    .then(console.log('db connected'))
  }
connectDatabase()
app.use(express.json()) // it helps you to read the data from the body
const Todolist = new mongoose.Schema({
text:{type: String},
status: {type: String},
});
const TodoModel = mongoose.model('Todos', Todolist);
app.use(router);
const PORT =  5000;
app.listen(PORT,()=>{
    console.log(`Todo Application Server is started on port ${PORT}`)
})

router.get('/send', async(req,res) => {
    const comps  = await TodoModel.find();  
    res.json(comps)
} )

router.get('/complete',async(req,res)=>{
    const comp  = await TodoModel.find({ status: "Complete"}); 
    console.log(comp)
    res.json(comp)
})

router.get('/incomplete',async(req,res)=>{
    const incomp  = await TodoModel.find({ status: "incomplete"});  
    console.log(incomp)
    res.json(incomp)
})

router.post('/' , (req,res) => {
    TodoModel.create({text: req.body.text, status: req.body.status}).then(res.json('hello'))
})

router.post('/delete/:id' , (req,res) => {
    const id = req.params.id
    TodoModel.findByIdAndDelete(id)
    .then(res.json('task deleted'))
})

router.post('/update/:id' , (req,res) => {
    const id = req.params.id
    TodoModel.findByIdAndUpdate(id,{text: req.body.text, status: req.body.status} )
    .then(res.json('task updated'))
})

