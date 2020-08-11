import knex from '../database/connection'
import {Request, Response, response} from 'express'

class UserController {
    async index(req:Request, res:Response){
        const users = await knex('users').select('*')

        const serializedUsers = users.map(user =>{
            return {
                id: user.id,
                name: user.name,
                nickname: user.nickname,
                password: user.password,
                symbol:`http://localhost:3333/uploads/${user.symbol}`,
                photo:`http://localhost:3333/uploads/${user.photo}`
            }
        })

        return res.json(serializedUsers)
    }
    async show(req:Request, res:Response){
        const {id} = req.params

        const user = await knex('users').where('id',id)

        return res.json(user)
    }
    async create(request:Request, response:Response){
        const {name, nickname,password, symbol,photo} = request.body

    await knex('users').insert({
        name,
        nickname,
        password,
        symbol,
        photo
    })

    return response.json({nickname});
    }
}

export default UserController