# 👤 Vincent Emonet personal website

[![Deploy to GitHub Pages](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml)

Deployed at **https://vemonet.github.io**

Built with [11ty](https://www.11ty.dev/)

## 🔧 Development

Start in development:

```bash
npx @11ty/eleventy --serve
```

Build for deployment in `dist/`:

```sh
npx @11ty/eleventy
```

## Create posts

Create markdown posts in `posts/` folder, use frontmatter for metadata:

```markdown
---
layout: layout.html
title: Example Post
excerpt: This is an example post.
date: 2024-01-15
tags: posts
---
```

