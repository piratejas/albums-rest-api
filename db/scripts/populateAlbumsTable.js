import { query } from '../index.js';
import { albums } from '../../libs/data.js';

async function populateAlbumsTable() {
    console.log('start');

    for(let i = 0; i < albums.length; i++) {
    const res = await query(`INSERT INTO albums (title, artist, release_year, label) VALUES ($1, $2, $3, $4);`, [albums[i].title, albums[i].artist, albums[i].release_year, albums[i].label]);
    }
    
    console.log('finish');
}

populateAlbumsTable();