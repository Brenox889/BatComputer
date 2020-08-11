import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { name:'Bruce Wayne',
        nickname:'Batman',
        password:'tananabatmann',
        symbol:'batmanLogo.png',
        photo:'batmanPerf.jpg'
        },
        { name:'Barbara Gordon',
        nickname:'Batgirl',
        password:'oracle123',
        symbol:'batgirlLogo.png',
        photo:'batgirlPerf.jpg'
        },
        { name:'Dick Grayson',
        nickname:'NightWing',
        password:'bestRobin',
        symbol:'nightwingLogo.png',
        photo:'nightwingPerf.jpg'
        },
        { name:'Tim Drake',
        nickname:'Robin',
        password:'RedRobin',
        symbol:'robinLogo.png',
        photo:'RobinPerf.jpg'
        },
    ]);
};
