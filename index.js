const  express = require ("express");
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Hello Testing');
});
const router = express.Router();
router.get('/', function (req,res)
{
    res.json('Salam we are live');
}
    );

    app.use(router);
    res.json({success: true, message: "Live"});


//today 

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
status: {type: Boolean},
});
const TodoModel = mongoose.model('Todos', Todolist);
app.use(router);
const PORT =  5000;
app.listen(PORT,()=>{
    console.log(`Animal Application Server is started on port ${PORT}`)
})

app.get('/', (req,res) => {
    res.json('koko');
} )

router.get('/animals',async(req,res)=>{
    const animals  = await TodoModel.find(); // returns all the animals 
    console.log(animals)
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

