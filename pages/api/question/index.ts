import type { NextApiRequest, NextApiResponse } from 'next'
import type { Document, ObjectId } from 'mongoose'
import connectMongo from '../../../utils/connectMongo'
import Question from '../../../models/Question'
import { ok, server_error } from '../../../helpers/responseHelper'

interface IQuestion extends Document {
    success: boolean
    data: {
        statement: string
        answer: string
        _id: ObjectId
    }
}

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addQuestion(
    req: NextApiRequest,
    res: NextApiResponse<IQuestion>
) {
    try {
        await connectMongo()
        const newQuestion = new Question({
            statement: req.body.statement,
            answer: req.body.answer,
        })
        await newQuestion.save()
        return ok({ res, code: 200, data: newQuestion })
    } catch (err: any) {
        console.log(err)
        return server_error({ res, err })
    }
}
