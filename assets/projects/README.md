# Project media

Photos for the hardware galleries live here, one folder per project. Filenames
must match the `cover` / `media` paths in [`script.js`](../../script.js).

Current setup:

```
lcd-temp-alarm/
  cover.webp   <- LCD close-up, card thumbnail
  01.webp      <- full build photo (Temp Limit!)
  02.webp      <- full build photo (Temperature)
  (demo video is a YouTube embed, id in script.js)

memory-speed-game/
  cover.webp   <- YouTube thumbnail (video-only project, no photos)
  (demo video is a YouTube embed, id in script.js)
```

## Adding or replacing a photo

1. Drop the file in the project folder.
2. Add/replace its entry in that project's `media: [...]` array in `script.js`
   (`{ type: "image", src: "...", alt: "short caption" }`), and point `cover`
   at whichever image should be the card thumbnail.
3. Optimize first — resize to ~1400px on the long edge. Phone photos are 3-8 MB
   and drag the page down. With ImageMagick:

   ```bash
   magick input.jpg -auto-orient -resize 1400x -quality 82 out.webp
   ```

   `-auto-orient` bakes in the phone's rotation so it shows upright in the browser.

## Adding a video

Videos are YouTube embeds, so they aren't stored here. Grab the id from the URL
(`youtu.be/<id>`, `watch?v=<id>`, or `shorts/<id>`) and add it to `media`:

```js
{ type: "youtube", id: "<id>", title: "short caption", aspect: "portrait" }
```

Use `aspect: "portrait"` for vertical clips / Shorts; drop it for normal 16:9.
