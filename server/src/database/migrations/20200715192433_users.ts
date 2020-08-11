import * as Knex from "knex";


export async function up(knex: Knex){

    return knex.schema.createTable('users',table =>{
        table.increments('id').notNullable
        table.string('name').notNullable
        table.string('nickname').notNullable
        table.string('password').notNullable
        table.string('symbol').notNullable
        table.string('photo').notNullable
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}

