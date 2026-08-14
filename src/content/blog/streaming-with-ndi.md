---
draft: false
title: "Streaming with NDI Output"
snippet: "Send Worship Manager’s display into OBS, vMix, and other NDI-ready tools for your live stream"
image: {
    src: "/opengraph.png",
    alt: "Worship Manager"
}
publishDate: "2026-07-25 12:00"
category: "Features"
author: "Worship Manager"
tags: [features, ndi, streaming, obs]
---

If your church streams, you probably already live in OBS, vMix, or a similar switcher. Worship Manager can send its output over **NDI** so lyrics, Scripture, and media show up as a network video source — no HDMI loop or window capture required.

## What NDI gives you

NDI (Network Device Interface) shares video across your LAN. With Worship Manager’s NDI output active, your streaming PC can add that source next to cameras and lower thirds.

Typical setup:

1. Booth PC runs Worship Manager (Present + NDI)
2. Stream PC runs OBS / vMix on the same network
3. Add the Worship Manager NDI source to your program mix

## Start NDI from Settings

1. Open **Settings** in Worship Manager.
2. Find the **NDI Output** section.
3. Check status — you should see whether output is Active, Inactive, or Unavailable.
4. Click **Start**.
5. Optionally enable **Transparent NDI capture window** if you want alpha-friendly capture for compositing.

Use **Stop** when the stream ends, and **Refresh** if status looks stale.

The status panel also shows useful diagnostics: SDK version, sender/source name, resolution, frame rate, connections, and any last error. That is the first place to look if OBS cannot see the feed.

## Add the source in OBS

Exact menus vary by OBS version and NDI plugin, but the flow is:

1. Install an NDI runtime / OBS NDI plugin if you do not already have one.
2. In OBS, add a **NDI Source**.
3. Select the Worship Manager sender from the source list.
4. Size it in your scene (often full-frame for slides, or a smaller overlay layer).

vMix and other NDI-aware tools follow the same idea: add an NDI input and pick the Worship Manager source.

## Present + NDI together

You can run the local **PRESENT** display for the sanctuary projectors and NDI for the stream at the same time. Operators still work from Preview / Program as usual — NDI mirrors the display content your stream needs.

If NDI fails to start (for example the NDI runtime is missing), Worship Manager surfaces a warning instead of crashing. Install/fix NDI support on that machine, then Start again from Settings.

## Network tips

- Keep Worship Manager and the streaming PC on the same subnet
- Prefer wired Ethernet for both machines when you can
- Corporate or “guest” Wi‑Fi that blocks device discovery will prevent NDI from appearing
- Note the sender / source name from the Settings panel when hunting in OBS

## When NDI is the right tool

| Use NDI when… | Prefer a local display when… |
| --- | --- |
| You mix Worship Manager into a stream program | You only drive sanctuary projectors |
| You want clean frames without capturing a window | You need the simplest possible Sunday setup |
| Multiple destinations need the same output | One machine / one screen is enough |

## Next steps

- Make sure the control workflow is solid with [Preview vs Program](/blog/preview-vs-program)
- Build the on-screen content via [songs](/blog/building-your-song-library), [scripture](/blog/presenting-scripture), and [media](/blog/importing-media)
- Keep [keyboard shortcuts](/blog/keyboard-shortcuts-cheat-sheet) ready so stream and sanctuary stay in sync when the service moves fast

NDI turns Worship Manager from “the projector app” into a proper source in your production graph — same lyrics the room sees, ready for the stream.
