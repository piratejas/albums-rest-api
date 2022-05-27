//imports express library
import express from "express";

//calls an instance of express.Router method and stores in variable (`router`)
const router = express.Router();

//imports functions from models
import {
    getAlbums,
    //searchAlbumsByTitle,
    //searchAlbumsByArtist,
    //searchAlbumsByReleaseYear,
    //searchAlbumsByLabel,
    getAlbumById,
    createAlbum,
    updateAlbumById,
    deleteAlbumById
} from "../models/albums.js";

router.get("/", async function (req, res) {
    /*if (req.query.search !== undefined) {
      const result = await searchAlbumsByTitle(req.query.search);
      return res.json({ success: true, payload: result });
    }
  
    if (req.query.artist !== undefined) {
      const result = await searchAlbumsByArtist(req.query.artist);
      return res.json({ success: true, payload: result });
    }

    if (req.query.releaseYear !== undefined) {
      const result = await searchAlbumsByReleaseYear(req.query.releaseYear);
      return res.json({ success: true, payload: result });
    }

    if (req.query.label !== undefined) {
      const result = await searchAlbumsByLabel(req.query.label);
      return res.json({ success: true, payload: result });
    }*/
  
    const result = await getAlbums();
    res.json({ success: true, payload: result });
  });

router.get("/:id", async function (req, res) {
    const id = Number(req.params.id);
    const album = await getAlbumById(id);
    res.json({ success: true, payload: album });
  });

router.post("/", async function (req, res) {
    const newAlbum = req.body;
    await createAlbum(newAlbum);
    res.json({ success: true, payload: newAlbum });
  });
  
router.put("/:id", function (req, res) {
    const id = Number(req.params.id);
    const data = req.body;
    const result = updateAlbumById(id, data);
    res.json({ success: true, payload: data });
  });
  
router.delete("/:id", async function (req, res) {
    const id = Number(req.params.id);
    const result = await deleteAlbumById(id);
    res.json({ success: true, payload: `Album with ID ${id} has been successfully deleted` });
  });

//exports router
export default router;