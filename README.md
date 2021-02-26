<h1 align="center">
  <br>
    <a href="https://hack4impact.org/"><img src="static/rotating-icon.gif" alt="Hack4Impact Icon" width="100"></a>
  <br>
  <b><a href="https://hack4impact.org/">Hack4Impact</a>'s VS Code Recommendations</b>
</h1>
<p align="center">Hack4Impact's VS Code Extension that provides recommended extensions and templates for quality project development</p>

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

| Name             | Icon                                                                               | Links                                                       |
| ---------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **ESLint**       | <img src="static/pack-icons/eslint.png" alt="ESLint Icon" width="100">             | [ESLint - Marketplace]<br>[ESLint - Repository]             |
| **Prettier**     | <img src="static/pack-icons/prettier.png" alt="Prettier Icon" width="100">         | [Prettier - Marketplace]<br>[Prettier - Repository]         |
| **MarkdownLint** | <img src="static/pack-icons/markdownlint.png" alt="MarkdownLint Icon" width="100"> | [MarkdownLint - Marketplace]<br>[MarkdownLint - Repository] |
| **EditorConfig** | <img src="static/pack-icons/editorconfig.png" alt="EditorConfig Icon" width="100"> | [EditorConfig - Marketplace]<br>[EditorConfig - Repository] |

## Commands

### Create Template Files

#### Command Id

`hack4impact.template.create`

#### Description

- Opens a [Quick Pick] to choose the templates that should be created
- Shows a [File Picker] Dialog to pick the folder where the templates should be created
- Creates the templates with Hack4Impact's recommended configuration

---

### Create ESLint Configuration Template

#### Command Id

`hack4impact.template.create.ESLintConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.eslintrc.json` file should be created
- Creates a `.eslintrc.json` file with Hack4Impact's recommended configuration

---

### Create Prettier Configuration Template

#### Command Id

`hack4impact.template.create.PrettierConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.prettierrc.json` file should be created
- Creates a `.prettierrc.json` file with Hack4Impact's recommended configuration

---

### Create MarkdownLint Configuration Template

#### Command Id

`hack4impact.template.create.MarkdownLintConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.markdownlint.json` file should be created
- Creates a `.markdownlint.json` file with Hack4Impact's recommended configuration

---

### Create EditorConfig Configuration Template

#### Command Id

`hack4impact.template.create.EditorConfigConfig`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.editorconfig` file should be created
- Creates a `.editorconfig` file with Hack4Impact's recommended configuration

---

### Create GitIgnore Template

#### Command Id

`hack4impact.template.create.GitIgnore`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `.gitignore` file should be created
- Creates a boilerplate `.gitignore` file

---

### Create Changelog Template

#### Command Id

`hack4impact.template.create.Changelog`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `CHANGELOG.md` file should be created
- Creates a boilerplate `CHANGELOG.md` file

---

### Create License Template

#### Command Id

`hack4impact.template.create.License`

#### Description

- Shows a [File Picker] Dialog to pick the folder where a `LICENSE.md` file should be created
- Creates a boilerplate `LICENSE.md` file

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
