---
draft: false
title: "Getting Started with Worship Manager: Your First Service"
snippet: "Install Worship Manager, open a display, and run a simple Sunday flow with songs, scripture, and media"
image: {
    src: "/opengraph.png",
    alt: "Worship Manager"
}
publishDate: "2026-06-06 12:00"
category: "Tutorials"
author: "Worship Manager"
tags: [tutorial, getting-started, setup]
---

Worship Manager is church presentation software built for the people running the screens on Sunday. This guide walks you through install, first launch, and a simple service flow so you can go live with confidence.

## Install Worship Manager

1. Go to the [Download](/download) page and pick your OS (Windows or Linux).
2. Run the installer and open the app.

### Extra software you may need

Worship Manager uses a few helpers for documents and images:

- **Ghostscript** and **GraphicsMagick** — for PDFs and image processing
- **LibreOffice** — for converting PowerPoint presentations

On Debian-based Linux you can install them with:

```bash
sudo apt-get update
sudo apt-get install ghostscript graphicsmagick libreoffice
```

On Windows, install each from its official site, and for GraphicsMagick make sure **Update executable search path** is ticked during setup.

## First launch

When Worship Manager opens, you can sign in or choose **Continue as Guest**. Guest mode is enough for local songs, media, Bible, and the display window — useful if you just want to try things before creating an account.

You will see three main areas:

- **Preview** (left) — what you are preparing
- **Program** (right) — what is currently on the output, with **PRESENT** / **STOP** and **CLEAR DISPLAY**
- **Selectors** (bottom) — tabs for Pinned, Songs, Bible, Media, and History

## Open the display on your projector

1. Connect your second screen or projector and make sure your OS treats it as an extended display.
2. Click **PRESENT**. Worship Manager opens a display window on the external screen when one is available.
3. Use **STOP** when you want to close that window, or **CLEAR DISPLAY** to wipe what is currently showing without closing Present.

Tip: practice once before the service so you know which monitor the display lands on.

## Run a simple first service

Here is a short flow you can rehearse in a few minutes.

### 1. Welcome slide

1. Open the **Media** tab.
2. Click **Import Media** (or drag a file in) and add a welcome image or PDF.
3. Click the file so it appears in Preview, then take it to the display (click the preview / select it so Program updates).

### 2. Worship song

1. Press `Ctrl + S` (or open the **Songs** tab).
2. Search for a song, or click **ADD SONG** and paste lyrics split into verses/sections.
3. Click a lyric block to send it to the overlay on the display.
4. Toggle **Blank Display** if you want lyrics without a background image.

### 3. Scripture

1. Press `Ctrl + B` (or open the **Bible** tab).
2. Pick a translation, book, chapter, and verse.
3. Click the verse to put it on the display.
4. Use the arrow controls (or hotkeys while in Bible) to move to the next verse during the reading.

### 4. Clear between moments

When you need a clean screen between songs and the message, click **CLEAR DISPLAY** (or use the clear keybind). That removes both the background media and overlay text.

## Before Sunday checklist

- External display detected and **PRESENT** opens on the right screen
- Songs for the set are in the library (or pinned)
- Scripture passages bookmarked via **Pinned** if you will jump between them
- Welcome / announcement media imported
- Fade transitions enabled in Settings if you want smoother switches
- A quick dry run of Present → song → verse → clear

## Next steps

Once you are comfortable with the basics:

- Learn how [Preview vs Program](/blog/preview-vs-program) works so you never put the wrong slide live by accident
- Build out your [song library](/blog/building-your-song-library)
- Set up [keyboard shortcuts](/blog/keyboard-shortcuts-cheat-sheet) that match how you operate

You do not need every feature on day one. Get Present working, put one song and one verse on screen, and grow from there.
