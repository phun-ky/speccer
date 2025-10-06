---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'SPECCER'
  text: 'A tool to annotate or highlight elements'
  tagline:
    "Speccer is a zero dependency JavaScript package to highlight elements on
    web pages and in documentation. It's easy to use and highly customizable,
    making it the perfect tool for developers, designers, and content creators
    alike."
  image:
    light: './logo-speccer-colored-light.svg'
    dark: './logo-speccer-colored-dark.svg'
    alt: 'Hero Image Description'
  actions:
    - theme: brand
      text: Get started
      link: /guide/introduction/
    - theme: alt
      text: View on GitHub
      link: https://github.com/phun-ky/speccer
    - theme: alt
      text: View demo
      link: https://codepen.io/phun-ky/full/OJejexN

features:
  - title: Element Spacing
    details: Easily display padding and margin for any element in your projects.
    icon:
      dark: ./icons/spacing.svg
      light: ./icons/spacing-light.svg
      width: '52px'
      height: 'auto'
  - title: Element Dimensions
    details:
      Measure and highlight the width and height of elements with various
      placement options.
    icon:
      dark: ./icons/dimensions.svg
      light: ./icons/dimensions-light.svg
      width: '52px'
      height: 'auto'
  - title: Highlight Anatomy
    details:
      Pin elements to the outline of an element to showcase its structure.
    icon:
      dark: ./icons/inspect.svg
      light: ./icons/inspect-light.svg

      width: '52px'
      height: 'auto'
  - title: Highlight Typography
    details: Shows the typography of a given element.
    icon:
      dark: ./icons/typography.svg
      light: ./icons/typography-light.svg
      width: '52px'
      height: 'auto'
  - title: Highlight Elements
    details: Mark elements to reference them.
    icon:
      dark: ./icons/highlight.svg
      light: ./icons/highlight-light.svg
      width: '52px'
      height: 'auto'
  - title: Accessibility notation
    details: Annotate accessibility elements.
    icon:
      dark: ./icons/a11y.svg
      light: ./icons/a11y-light.svg
      width: '52px'
      height: 'auto'
---

<script setup>
import UsedBy from './.vitepress/theme/components/UsedBy.vue'
</script>

## Used By

<UsedBy/>

## Other features

- Zero dependencies
- Open source
- Easy to use
- Highly customizable
- Supports a variety of highlight types, including pins, markers, text and more
- Can be used on web pages and in documentation

## Benefits

- Improve the clarity and readability of your web pages and documentation
- Make it easier for users to understand how to use your products and services
- Create more engaging and interactive tutorials and demos

## Get Started

Ready to enhance your documentation and web projects? Follow these simple steps
to get started with SPECCER:

- Install SPECCER via npm: `npm i @phun-ky/speccer`
- Choose [your preferred integration method](/guide/introduction/), whether it's
  Typescript, ESM, Script, or React.
- [Customize the styling](/guide/tutorials/customization) to match your
  project's design.
