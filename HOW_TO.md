# How To:  Guide 

This guide is used to make all content structure the same and organized.

## Docs structures

All docs files are located in `docs` folders


JavaScript: `docs/javascript`
TypeScript: `docs/typescript`
Node.js: `docs/node`
React.js: `docs/react`

All files is organized per category and concepts like all Array related topics is under `Array/` folder, all Object is under `Object/` folter.

## Filename

File name must be short, concise and explicity.

Ex: for doc of Array map, reduce, sort, filter etc... should like this : 

`docs/javascript/Array/Map.md`

`docs/javascript/Array/Sort.md`

`docs/javascript/Array/Map.md`

`docs/javascript/Array/Filter.md`

Filemane must by CamelCase.

## Frontmatter

Frontmatter must have the following prop:

```
---
tag: javascript | typescript | react | node
slug: "/javascript/Array/Reduce"
date: "2022-11-24"
updated: "2023-02-26"
title: "Array.prototype.reduce()" // title should be explicit and short
category: "Array" // categories ex : Array, Object,.... Check existing category
categoryOrder: // only for introduction of topics/concepts
order: 1003  // order check existing order
contributor: [
  {
    name: "Author name",
    link: "Author link"
  }
]
---
```

^Note that all frontmatter will be discussed before Merge so don't worry about it.


## Content rules


1. Content cannot have H1 tag
2. Content:
  - At least one H2
  - At least one H3
  - Must have a description/overview
  - Examples
  - Use cases
  - And more
  - Notes

Check content for the same category or topics to learn more

3. If you includes external ressources of any forms, make sur to includes Author reference, website, name etc....



### Please help us to make this guide more easy to understand
