const db = require("../knex/knex")

function findAll() {
	return db('items')
}

function findById(id) {
	return db("items")
		.where({ id })
		.first()
}

const add = async (item) => {
	 const [id] = await db("items").insert(item, "id")
     return findById(id)
}

const update = async (item, id) => {
	await db("items").where({ id }).update(item)
	return findById(id)
}

const remove = (id) => {
	return db("items")
		.where({ id })
		.del()
}

module.exports = {
	findAll,
    findById,
    add,
    update,
    remove
}