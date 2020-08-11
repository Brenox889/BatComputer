import * as Knex from "knex";


export async function up(knex: Knex){
    return knex.schema.createTable('villain_bases',table =>{
        table.increments('id').notNullable
        table.integer('cod_villain').unsigned().references('cod_villain').inTable('villains')
        table.string('name').notNullable
        table.string('image').notNullable
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf',2).notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('villain_bases')
}


