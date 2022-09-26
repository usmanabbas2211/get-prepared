import { Schema, model, models } from 'mongoose'

const questionSchema = new Schema({
    statement: String,
    answer: String,
})

module.exports = model('Question', questionSchema)
