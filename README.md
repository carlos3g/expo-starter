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

- `Expo SDK 46`
- Typescript _&_ Eslint _&_ Prettier
- Husky _&_ Commitlint _&_ Lint staged
- Scalable architecture
- Relative paths with `babel-plugin-root-import`

## Table of contents

- [Usage](#-usage)
- [Architecture](#-architecture)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 💻 Usage

```bash
# To use this template, just run:
npx create-expo-app my-app --template expo-starter
```

## 📂 Architecture

> Feel free to change this as You need

```
my-app
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── [Global Component]
│   │   │   ├── index.ts => export component
│   │   │   │
│   │   │   └── styles.ts
│   │   │
│   │   └── index.ts => exports all components
│   │
│   ├── enums
│   │
│   ├── hooks
│   │
│   ├── interfaces => Typescript custom types/interfaces.
│   │
│   ├── models => Entities types/interfaces
│   │
│   ├── navigation => Navigators.
│   │   └── index.ts => export main navigator
│   │
│   ├── providers
│   │
│   ├── screens
│   │   ├── [Screen]
│   │   │   ├── [Local Component]
│   │   │   │   ├── index.ts => export component
│   │   │   │   │
│   │   │   │   └── styles.ts
│   │   │   │
│   │   │   ├── index.ts => export screen
│   │   │   │
│   │   │   └── styles.ts
│   │   │
│   │   └── index.ts => exports all screens
│   │
│   ├── services => Services files configs such as API's and firebase.
│   │
│   └── styles => Styles data such as colors, fonts...
│
├── .editorconfig
├── .eslintrc.js
├── .lintstagedrc.json
├── .prettirrc
├── app.config.json
├── App.tsx
├── babel.config.ts
├── commitlint.config.js
└── tscondig.json
```

## 🤝 How to contribute

- Is there any problem? Found a bug? Do you have any tips? Open an [issue](https://github.com/carlos3g/expo-starter/issues) describing it.

- Want to contribute code? First read [this contribution guide](https://github.com/firstcontributions/first-contributions)

- Don't forget to leave your star ⭐, it is also a way to contribute to the project

## 📝 License

This project is under the MIT license. See [LICENSE](LICENSE) for more details.

---

<div align="center">

Created by [Carlos Mesquita](https://github.com/carlos3g) 💜

</div>
