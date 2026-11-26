# Rift Runner v27
(c) 2026 Ranzorr (Riffath Zuhaimy). All rights reserved.

## Netlify
Connect this repo (netlify.toml already sets build `node tools/vendor.js`, publish `www`), or drag the `www` folder.

## APK / AAB (no PC needed)
GitHub > Actions > "Build Android APK + AAB" > Run workflow > download `RiftRunner-Android`.
- debug APK installs straight on your phone.
- Play Store AAB must be signed: add repo secrets ANDROID_KEYSTORE_BASE64, ANDROID_KEYSTORE_PASSWORD, ANDROID_KEY_ALIAS, ANDROID_KEY_PASSWORD, then run again.
- App id com.ranzorr.riftrunner (edit capacitor.config.json). Icon + splash come from assets/ (your artwork).
- Play listing images: store/.

## Web portals
Actions > "Build portal ZIP" gives a self-contained zip (bundles three.min.js r128). Thumbnails: store/thumbnails.
