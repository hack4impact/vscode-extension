<h1 align="center">
  <br>
    <a href="https://hack4impact.org/"><img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/rotating-icon.gif" alt="Hack4Impact Icon" width="100"></a>
  <br>
  <b><a href="https://hack4impact.org/">Hack4Impact</a>'s VS Code Recommendations</b>
</h1>
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=hack4impact.h4i-recommendations"><img src="https://img.shields.io/visual-studio-marketplace/v/hack4impact.h4i-recommendations?style=flat-square&label=Version&logo=visual-studio-code&logoColor=FFFFFF&labelColor=000000"alt="Version"></a>
<a href="https://marketplace.visualstudio.com/items?itemName=hack4impact.h4i-recommendations&ssr=false#review-details"><img src="https://img.shields.io/visual-studio-marketplace/r/hack4impact.h4i-recommendations?style=flat-square&label=Rating&logo=visual-studio-code&logoColor=FFFFFF&labelColor=000000" alt="Rating"></a>
<a href="https://github.com/hack4impact/vscode-extension/actions?query=workflow%3A%22Node+CI%22"><img src="https://img.shields.io/github/workflow/status/hack4impact/vscode-extension/Node%20CI?style=flat-square&label=Build&logo=github&logoColor=FFFFFF&labelColor=000000" alt="Build"/></a>
<a href="https://lgtm.com/projects/g/hack4impact/vscode-extension/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/github/hack4impact/vscode-extension?style=flat-square&label=Code%20Quality&logo=lgtm&logoColor=FFFFFF&labelColor=000000" alt="Code Quality"/></a>
</p>

<p align="center">
<a href="https://codecov.io/gh/hack4impact/vscode-extension/"><img src="https://img.shields.io/codecov/c/github/hack4impact/vscode-extension?style=flat-square&label=Coverage&logo=Codecov&logoColor=FFFFFF&labelColor=000000" alt="Coverage"/></a>
<a href="https://hack4impact.github.io/vscode-extension/"><img src="https://img.shields.io/website?url=https%3A%2F%2Fhack4impact.github.io%2Fvscode-extension%2F&style=flat-square&label=Coverage%20Website&logo=github&logoColor=FFFFFF&labelColor=000000" alt="Coverage Website"/></a>
</p>

Hack4Impact's VS Code Extension that provides recommended extensions and templates for quality project development.

If you use JetBrains instead, install the [JetBrains plugin](https://github.com/hack4impact/jetbrains-plugin).

## Contents <!-- omit in toc -->

- [Installation](#installation)
- [Included Extensions](#included-extensions)
- [Commands](#commands)
  - [Create Template Files](#create-template-files)
  - [Create ESLint Configuration Template](#create-eslint-configuration-template)
  - [Create Prettier Configuration Template](#create-prettier-configuration-template)
  - [Create MarkdownLint Configuration Template](#create-markdownlint-configuration-template)
  - [Create EditorConfig Configuration Template](#create-editorconfig-configuration-template)
  - [Create GitIgnore Template](#create-gitignore-template)
  - [Create Changelog Template](#create-changelog-template)
  - [Create License Template](#create-license-template)
  - [Create CodeOwners Template](#create-codeowners-template)
- [Configuration](#configuration)
  - [Keybindings](#keybindings)
- [Language Support](#language-support)
- [Contributors](#contributors)

## Installation

1. Open [Hack4Impact's Recommendations - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=hack4impact.h4i-recommendations)
2. Click "Install"

**OR**

1. Open [Visual Studio Code](https://code.visualstudio.com/)
2. Open the Extensions View -> (`Shift+Cmd+P` or `F1` and type "Extensions: Install Extensions") or (`Shift+Cmd+X`)
3. Type "Hack4Impact's Recommendations"
4. Click "Install"

**OR**

1. Open a command-line prompt
2. Run `code --install-extension hack4impact.h4i-recommendations`

## Included Extensions

| Name             | Icon                                                                                                                                                   | Links                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| **ESLint**       | <img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/pack-icons/eslint.png" alt="ESLint Icon" width="100">             | [ESLint - Marketplace]<br>[ESLint - Repository]             |
| **Prettier**     | <img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/pack-icons/prettier.png" alt="Prettier Icon" width="100">         | [Prettier - Marketplace]<br>[Prettier - Repository]         |
| **MarkdownLint** | <img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/pack-icons/markdownlint.png" alt="MarkdownLint Icon" width="100"> | [MarkdownLint - Marketplace]<br>[MarkdownLint - Repository] |
| **EditorConfig** | <img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/pack-icons/editorconfig.png" alt="EditorConfig Icon" width="100"> | [EditorConfig - Marketplace]<br>[EditorConfig - Repository] |

## Commands

### Create Template Files

#### Command Id

`hack4impact.templates.create`

#### Description

- Opens a [Quick Pick] to choose the templates that should be created
- Shows a [File Picker] Dialog to pick the folder where the templates should be created
- Creates the templates with Hack4Impact's recommended configuration

#### Demo

<details>
<summary>Create Template Files Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-template-files.gif" alt="Create Template Files Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h t`

- **Windows/Linux**: `ctrl+h t`

---

### Create ESLint Configuration Template

#### Command Id

`hack4impact.templates.create.ESLintConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.eslintrc.json` file should be created
- Creates a `.eslintrc.json` file with Hack4Impact's recommended configuration

#### Demo

<details>
<summary>Create ESLint Configuration Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-eslint-config-template.gif" alt="Create ESLint Configuration Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h e`

- **Windows/Linux**: `ctrl+h e`

---

### Create Prettier Configuration Template

#### Command Id

`hack4impact.templates.create.PrettierConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.prettierrc.json` file should be created
- Creates a `.prettierrc.json` file with Hack4Impact's recommended configuration

#### Demo

<details>
<summary>Create Prettier Configuration Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-prettier-config-template.gif" alt="Create Prettier Configuration Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h p`

- **Windows/Linux**: `ctrl+h p`

---

### Create MarkdownLint Configuration Template

#### Command Id

`hack4impact.templates.create.MarkdownLintConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.markdownlint.json` file should be created
- Creates a `.markdownlint.json` file with Hack4Impact's recommended configuration

#### Demo

<details>
<summary>Create MarkdownLint Configuration Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-markdownlint-config-template.gif" alt="Create MarkdownLint Configuration Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h m`

- **Windows/Linux**: `ctrl+h m`

---

### Create EditorConfig Configuration Template

#### Command Id

`hack4impact.templates.create.EditorConfigConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.editorconfig` file should be created
- Creates a `.editorconfig` file with Hack4Impact's recommended configuration

#### Demo

<details>
<summary>Create EditorConfig Configuration Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-editorconfig-config-template.gif" alt="Create EditorConfig Configuration Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h d`

- **Windows/Linux**: `ctrl+h d`

---

### Create GitIgnore Template

#### Command Id

`hack4impact.templates.create.GitIgnore`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.gitignore` file should be created
- Creates a boilerplate `.gitignore` file

#### Demo

<details>
<summary>Create GitIgnore Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-gitignore-template.gif" alt="Create GitIgnore Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h g`

- **Windows/Linux**: `ctrl+h g`

---

### Create Changelog Template

#### Command Id

`hack4impact.templates.create.Changelog`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `CHANGELOG.md` file should be created
- Creates a boilerplate `CHANGELOG.md` file

#### Demo

<details>
<summary>Create Changelog Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-changelog-template.gif" alt="Create Changelog Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h c`

- **Windows/Linux**: `ctrl+h c`

---

### Create License Template

#### Command Id

`hack4impact.templates.create.License`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `LICENSE.md` file should be created
- Creates a boilerplate `LICENSE.md` file

#### Demo

<details>
<summary>Create License Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-license-template.gif" alt="Create License Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h l`

- **Windows/Linux**: `ctrl+h l`

---

### Create CodeOwners Template

#### Command Id

`hack4impact.templates.create.CodeOwners`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `CODEOWNERS` file should be created
- Creates a boilerplate `CODEOWNERS` file

#### Demo

<details>
<summary>Create CodeOwners Template Demo</summary>

<img src="https://raw.githubusercontent.com/hack4impact/vscode-extension/main/static/demos/create-codeowners-template.gif" alt="Create CodeOwners Template Demo">

</details>

#### Keybinding

- **Mac**: `cmd+h o`

- **Windows/Linux**: `ctrl+h o`

## Configuration

### Keybindings

#### Disable All

- **Description**: Controls whether all keybindings are disabled
- **Key**: `hack4impact.recommendations.keybindings.disableAll`
- **Type**: `boolean`
- **Default**: `false`

## Language Support

This extension provides language support and syntax highlighting for the following:

| Language/File | Docs                                                                                                           | Sample                                                                                                   | Source                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `CODEOWNERS`  | [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) | [Sample `CODEOWNERS` file](https://github.com/python/cpython/blob/master/.github/CODEOWNERS)             | [Jason Nutter's Repo](https://github.com/jasonnutter/vscode-codeowners) |
| `robots.txt`  | [Google Search Central](https://developers.google.com/search/docs/advanced/robots/intro)                       | [Sample `robots.txt` file](https://github.com/gitlabhq/gitlabhq/blob/master/public/robots.txt)           | [Nixinova's Repo](https://github.com/Nixinova/tmLanguage)               |
| `_redirects`  | [Netlify Docs](https://docs.netlify.com/routing/redirects/)                                                    | [Sample `_redirects` file](https://github.com/netlify/netlify-cms/blob/master/website/static/_redirects) | [Nixinova's Repo](https://github.com/Nixinova/tmLanguage)               |

## Contributors

Project Contributors ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/YashTotale"><img src="https://avatars.githubusercontent.com/u/30784592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yash Totale</b></sub></a><br /><a href="https://github.com/hack4impact/vscode-extension/commits?author=YashTotale" title="Code">💻</a> <a href="#ideas-YashTotale" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/hack4impact/vscode-extension/commits?author=YashTotale" title="Documentation">📖</a></td>
    <td align="center"><a href="https://bholmes.dev/"><img src="https://avatars.githubusercontent.com/u/31811199?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Holmes</b></sub></a><br /><a href="#mentoring-Holben888" title="Mentoring">🧑‍🏫</a> <a href="#ideas-Holben888" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-Holben888" title="Project Management">📆</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/eric-newcomer/"><img src="https://avatars.githubusercontent.com/u/20120289?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Newcomer</b></sub></a><br /><a href="#mentoring-eric-newcomer" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-eric-newcomer" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- Start Reference Links -->

[prettier - marketplace]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[prettier - repository]: https://github.com/prettier/prettier-vscode
[eslint - marketplace]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[eslint - repository]: https://github.com/Microsoft/vscode-eslint
[markdownlint - marketplace]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[markdownlint - repository]: https://github.com/DavidAnson/vscode-markdownlint
[editorconfig - marketplace]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[editorconfig - repository]: https://github.com/editorconfig/editorconfig-vscode
[quick pick]: https://code.visualstudio.com/api/extension-capabilities/common-capabilities#quick-pick
[file picker]: https://code.visualstudio.com/api/extension-capabilities/common-capabilities#file-picker
