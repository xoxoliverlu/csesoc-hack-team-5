const express = require("express");
const cors = require("cors");
const bcfetch = require("bandcamp-fetch");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const getFromLocation = async (location, genres) => {
  const data = await bcfetch.TagAPI.getAlbumHighlights({
    tagUrl: `https://bandcamp.com/tag/${location}`,
  });
  return data[0].items.map((t) => {
    return {
      artist: t.artist.name,
      imageURL: t.imageUrl,
      name: t.featuredTrack.name,
      streamURL: t.featuredTrack.streamUrl,
      genre: t.genre,
      album: t.name,
    };
  });
};

app.post("/tracks", async (req, res) => {
  try {
    const { location, genres } = req.body;
    let data = await getFromLocation(location.toLowerCase(), genres);
    data = data.filter((x) => genres.includes(x.genre));
    res.status(200).send(JSON.stringify(data));
  } catch (e) {
    console.log(e);
    res.status(400);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
