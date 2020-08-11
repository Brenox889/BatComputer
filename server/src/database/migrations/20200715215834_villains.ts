import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('villains',table =>{
        table.increments('cod_villain').notNullable
        table.string('name').notNullable
        table.string('nickname').notNullable
        table.string('miniature').notNullable
        table.string('photo').notNullable
        table.string('story').notNullable
    })
}



export async function down(knex: Knex) {
    return knex.schema.dropTable('villains')
}

