import { TemplateCreator } from "../helpers";

const template = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## Table of Contents

- [Unreleased](#unreleased)

## Unreleased
`;

export default new TemplateCreator({
  name: "Changelog",
  templateFileName: "CHANGELOG.md",
  template,
  docsLink: "https://keepachangelog.com/",
  isConfig: false,
});
