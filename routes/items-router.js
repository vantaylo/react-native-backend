const express = require("express")
const Items = require("../models/items-model")

const router = express.Router()

router.get("/items", async (req, res, next) => {
	try {
		const items = await Items.findAll()
		return res.json(items)
	} catch (err) {
		next(err)
	}
})

router.get("/:item_id", async (req, res, next) => {
	try {
		const item = await Items.find(req.params.id)
		return res.status(200).json(item)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const newItem = { name: req.body.name, frequency: req.body.frequency, last_replaced: req.body.last_replaced, next_replace: req.body.next_replace }
		const item = await Items.add(newItem)
		return res.status(201).json(item)
	} catch (err) {
		next(err)
	}
})

router.put("/:item_id", async (req, res, next) => {
	try {
		const item = await Items.update(req.body, req.params.item_id)
		return res.status(201).json(item)
	} catch (err) {
		next(err)
	}
})

router.delete("/:item_id", async (req, res, next) => {
	try {
		await Items.remove(req.params.item_id)
		return res.status(200).json({ message: `Item has been deleted` })
	} catch (err) {
		next(err)
	}
})

module.exports = router
