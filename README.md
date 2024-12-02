# XZZD Enhanced

An Enhanced UI for learning in ZJU.

## Feature

- Performance increase
- Darkmode support
- i18n supoort
- Easily get todos in side panel

## Usage

### Folders

- `src` - main source.
  - `contentScript` - scripts and components to be injected as `content_script`
  - `background` - scripts for background.
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `styles` - styles shared in popup and options page
  - `assets` - assets used in Vue components
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root.
  - `assets` - static assets (mainly for `manifest.json`).
  - `dist` - built files, also serve stub entry for Vite on development.
- `scripts` - development and bundling helper scripts.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`

## Credits

[vitesse-webext](https://github.com/antfu/vitesse-webext) - The template used for this project
