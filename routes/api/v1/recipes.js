
const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (_, response) => {
    const shortRecipes = recipes.map(({ id, title, image, prepTime, difficulty}) => {
        return { id, title, image, prepTime, difficulty }
    })
    
    response.send(shortRecipes)
})

router.post('/recipe/add', (request, response) => {
    const { title, image, ingredients, instructions, prepTime, difficulty } = request.body
    const id = recipes.length + 1
    recipes.push({ id, title, image, ingredients, instructions, prepTime, difficulty })
    response.send({ id, title, image, ingredients, instructions, prepTime, difficulty })
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params

    const found = recipes.find(data => data.id.toString() === id)
    const { title, image, ingredients, instructions, prepTime, difficulty } = found
    response.send({ id, title, image, ingredients, instructions, prepTime, difficulty })
})

module.exports = router