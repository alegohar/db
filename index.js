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