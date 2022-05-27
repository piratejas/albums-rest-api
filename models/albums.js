//import albums array from data.js file
//import { albums } from "../libs/data.js";

import { query } from "../db/index.js";

//function to return albums array
//export for use in other files
/*export function getAlbums() {
    return albums;
}*/

export async function getAlbums() {
    const res = await query(`SELECT * FROM albums;`);
    return res.rows;
}

//console.log(getAlbums());

//search albums by title
/*export function searchAlbumsByTitle(searchTerm) {
    return albums.filter(function (album) {
      return album.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }*/

/*THIS DOES NOT WORK  
export async function searchAlbumsByTitle(title) {
    const found = await query(`SELECT * FROM albums WHERE title = $1;`,[title]);
    return found.rows;
  }*/

//search albums by artist
/*export function searchAlbumsByArtist(searchTerm) {
    return albums.filter(function (album) {
      return album.artist.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

//search albums by release year  
export function searchAlbumsByReleaseYear(searchTerm) {
    return albums.filter(function (album) {
      return album.release_year.includes(Number(searchTerm));
    });
  }

//search albums by label  
export function searchAlbumsByLabel(searchTerm) {
    return albums.filter(function (album) {
      return album.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }*/
  
//get album by ID
/*export function getAlbumById(id) {
    const found = albums.find(function (album) {
      return album.id === id;
    });
    return found;
  }*/

export async function getAlbumById(id) {
    const found = await query(`SELECT * FROM albums WHERE id = $1;`,[id]);
    return found.rows;
}

//create new album entry
/*export function createAlbum(album) {
    albums.push(album);
    return albums[albums.length - 1];
  }*/

export async function createAlbum(album) {
    const newAlbum = await query(`INSERT INTO albums (title, artist, release_year, label) VALUES ($1, $2, $3, $4)`, [album.title, album.artist, album.release_year, album.label]);
    return newAlbum;
}  

//update album by ID
export function updateAlbumById(id, updates) {
    const foundIndex = albums.findIndex(function (album) {
      return album.id === id;
    });
    albums[foundIndex] = updates;
    return albums[foundIndex];
  }
  
//delete album by ID
/*export function deleteAlbumById(id) {
    const foundIndex = albums.findIndex(function (album) {
      return album.id === id;
    });
    const item = albums[foundIndex];
    albums.splice(foundIndex, 1);
    return item;
  }*/

export async function deleteAlbumById(id) {
    const res = await query(`DELETE FROM albums WHERE id = $1;`, [id]);
    return res;
}