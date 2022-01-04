<div align="center">
  <h1>
    expo-starter
  </h1>
  <blockquote>
    A expo basic template
  </blockquote>
  <div id="badges">
    <img src="https://img.shields.io/github/repo-size/carlos3g/expo-starter?color=4000FF" alt="repo-size" />
    <img src="https://img.shields.io/github/issues-raw/carlos3g/expo-starter?color=4000FF" alt="issues" />
    <img src="https://img.shields.io/badge/license-MIT-4000FF" alt="license" />
  </div>
</div>

This is a basic expo template. It includes:

- `Expo SDK 44`
- Typescript configuration
- Project file structure already made
- Absolute paths with `babel-plugin-root-import`
- Prettier

## Table of contents

- [Usage](#-usage)
- [File Structure](#-file-structure)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 💻 Usage

```bash
# To use this template, just run:
expo init my-app --template=expo-starter
```

## 📂 File Structure

> This file structure includes the existing files and recommended files

```
expo-starter
├── src => Project's files
│   ├── assets => Static assets. Includes splash screen, favicon and app-icon
│   │
│   ├── components => Re-usable UI components
│   │
│   ├── hooks => Custom hook components
│   │
│   ├── navigation => Navigators
│   │
│   ├── providers => Custom providers that use Context API
│   │
│   ├── screens => Screens
│   │
│   ├── services => Services files configs such as API's and firebase
│   │
│   ├── styles => Styles data such as colors, fonts...
│   │
│   └── types.ts => Typescript custom types and interfaces
│
├── .prettirrc => Prettier config file
├── app.json => Expo config file
├── App.tsx => Entry Point. Wrap all providers here
├── babel.config.ts => Babel config file
└── tscondig.json => TypeScript config file
```

## 🤝 How to contribute

Every kind of contribution is welcome, I admire it!

Is there any problem? Found a bug? Do you have any tips? Open an [issue](https://github.com/carlos3g/expo-starter/issues) describing it.

Want to contribute code? First read [this contribution guide](https://github.com/firstcontributions/first-contributions)

Don't forget to leave your ⭐, it is also a way to contribute to the project;)

## 📝 License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.

---

<div align="center">

Created by [Carlos Mesquita](https://github.com/carlos3g) 💜

</div>
