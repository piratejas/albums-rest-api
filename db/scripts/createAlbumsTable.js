import { query } from '../index.js';

async function createAlbumsTable() {
    console.log('start');

    const res = await query(`CREATE TABLE IF NOT EXISTS albums (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(50),
        artist VARCHAR(50),
        release_year VARCHAR(50),
        label VARCHAR(50));`);

        console.log('finish');
}

createAlbumsTable();