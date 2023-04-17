const Todo = require('../models/Todo')

module.exports = {

    getTodos: async(req,res)=>{
        try {
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs',{items: todoItems, left: itemsLeft})
        } catch (error) {
            console.log(error)
        }
    },
    
    createTodo: async(req,res)=>{
        try {
            console.log(req.body)
            await Todo.create({thingTodo: req.body.todo, completed: false})
                console.log('todo created')
                res.redirect('/todos')
        } catch (error) {
            console.log(error)
        }
    },
   
    

    deleteTodo: async(req, res)=>{
        try {
            await Todo.findOneAndDelete({_id:req.body.itemIdFromJS})
            console.log('Todo Deleted')
            res.json('Todo Deleted')
        } catch (error) {
            console.log(error)
        }
    },

    markComplete: async(req, res) => {
        try {
            console.log(req.body.itemFromJS)
            await Todo.findOneAndUpdate({_id: req.body.itemIdFromJS},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (error) {
            console.log(error)
        }
    },

    markUncomplete: async(req,res)=>{
        try {
            console.log(req.body.itemFromJS)
            await Todo.findOneAndUpdate({_id:req.body.itemIdFromJS},{
                    completed: false
            })
                
                console.log('Marked Uncomplete')
                res.json('Marked Uncomplete')
        } catch (error) {
            console.log(error)
        }
    }
}