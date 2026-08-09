<div align="center">

<img src="public/logo.png" width="120" alt="odysseusdev" />

# ithaca

![projects](https://img.shields.io/badge/projects-4-c6a0f6?style=for-the-badge&labelColor=363a4f)
![license](https://img.shields.io/badge/license-all_rights_reserved-6e738d?style=for-the-badge&labelColor=363a4f)

**_it's a rugged land, but it's my home.._**

[what is this?](#-what-is-this) | [adding a project](#-adding-a-project) | [contributing](#-contributing) | [license](#-license)

[odysseusdev.io](https://odysseusdev.io)

</div>

## 🏠 what is this

this is my home on the web. named after odysseus's home of ithaca, the island he spent ten years trying to get back to. took me a fair bit longer to build this home if i'm honest. it's where i collate what i've built.

## 📁 adding a project

project cards are driven entirely by `src/data/projects.ts`. to add one, append an object to the `projects` array:

```ts
{
  name: 'project name',
  tags: ['tag one', 'tag two'],
  description: 'a short description of what this project does.',
  urls: {
    live: 'https://example.com/',
    source: 'https://github.com/odysseusdev/project-name',
  },
  image: '/projects/project-name.png',
}
```

- `name` must be unique across the array.
- `tags` drives the search filter.
- `urls.live` and `urls.source` are both optional. omit either, or pass `urls: {}` if neither exists yet.
- `image` is optional. if set, it must be a path under `/projects/` pointing at a file in `public/projects/`. if omitted, the card renders a placeholder in its place.

no build step or import required beyond editing this one file.

## 🏹 contributing

the homeric version: see [CONTRIBUTING.md](CONTRIBUTING.md).

the non-homeric version: public repo. not open to contributions.

## ⚖️ license

see [LICENSE](LICENSE).

all rights reserved. public repository. not open source.
