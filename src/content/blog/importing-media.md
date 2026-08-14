---
draft: false
title: "Importing Media: Images, Videos, PDFs, and PowerPoints"
snippet: "Bring welcome slides, lyric backgrounds, videos, and document decks into Worship Manager"
image: {
    src: "/opengraph.png",
    alt: "Worship Manager"
}
publishDate: "2026-07-04 12:00"
category: "Tutorials"
author: "Worship Manager"
tags: [tutorial, media, pdf, video]
---

Songs and Scripture cover a lot of the service — media covers the rest: welcome slides, announcement decks, backgrounds, countdowns, and video. Worship Manager’s Media tab is where those files live.

## Open the Media tab

Press `Ctrl + M` or click **Media**.

Across the top you will find:

- **Import Media** — open a file picker
- **VIDEO CAPTURE** — use a camera input
- **Screen / desktop capture** — share another window or display
- **Settings** — resize mode and video capture options

The rest of the panel is your linked media library.

## Supported media

Worship Manager is built for the formats churches actually use:

- **Images** — JPEG, PNG, WEBP, and similar
- **Video** — MP4, MKV, and other common containers
- **PDF** — imported and turned into navigable slides
- **PowerPoint (PPTX)** — converted for presentation (LibreOffice is used under the hood)

If PDF or PowerPoint import fails on a machine, double-check that Ghostscript, GraphicsMagick, and LibreOffice are installed — see the [getting started guide](/blog/getting-started).

## Import files

You can either:

1. Click **Import Media** and choose files, or
2. Drag and drop files onto the Media panel

Worship Manager copies/links them into its media store and generates thumbnails where it can. Large PDFs and presentations may take a moment — you will see loading state while that finishes.

### If a file already exists

When you import something with a name that is already in the library, Worship Manager asks whether to **Overwrite** or **Cancel**. Choose overwrite only when you intend to replace last week’s version.

## Present media

1. Click a file in the library — it appears in **Preview**.
2. For multi-page PDFs / decks, pick the slide thumbnail you want.
3. Confirm it in **Program** once it is live.
4. Use the Program previous / next arrows to move through slides during announcements.

For video, Program gives you play, pause, seek, and volume so countdowns and lyric videos stay under your control.

## Resize modes

In Media **Settings**, set **Media Resize Mode**:

| Mode | Best for |
| --- | --- |
| **Contain** | Show the whole image/slide without cropping |
| **Cover** | Fill the screen; edges may crop |
| **Stretch** | Force exact fit (can distort) |

Contain is usually safest for slides with text. Cover works well for full-bleed backgrounds.

## Use media as overlay backgrounds

Right-click an image in the library for actions like:

- **Pin** — keep it in the Pinned tab
- Set as **Bible** or **Songs** overlay background

That is an easy way to brand lyric and Scripture screens without rebuilding content every week.

## Video capture and picture-in-picture

Click **VIDEO CAPTURE** to send a configured camera to the display. Right-click for Picture-in-Picture show/hide. In Media Settings (or the video settings section) you can:

- Choose the capture device
- Set resolution (720p, 1080p, 4K presets, and more)
- Position PiP in any corner

Desktop / screen capture is available from the same toolbar when you need to show another app live.

## Housekeeping

- Rename or delete linked files from the library when sets change
- Keep announcement PDFs dated in the filename (`2026-07-announcements.pdf`) so overwrite prompts make sense
- Pin the two or three media items you know you will need mid-service

## Next steps

- Wire media into a full [first-service walkthrough](/blog/getting-started)
- Send the display to your stream with [NDI output](/blog/streaming-with-ndi)
- Keep [Preview vs Program](/blog/preview-vs-program) in mind when switching slides live
