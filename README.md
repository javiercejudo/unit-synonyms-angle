# unit-synonyms-angle

[![Build Status](https://travis-ci.org/javiercejudo/unit-synonyms-angle.svg)](https://travis-ci.org/javiercejudo/unit-synonyms-angle)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/unit-synonyms-angle/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/unit-synonyms-angle?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/unit-synonyms-angle/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/unit-synonyms-angle)

Angle units synonyms

## Install

    npm i unit-synonyms-angle

## Units

- [Radian](https://en.wikipedia.org/wiki/Radian)
- [Turn](https://en.wikipedia.org/wiki/Turn_(geometry))
- [Degree](https://en.wikipedia.org/wiki/Degree_(angle))
- [Gradian](https://en.wikipedia.org/wiki/Gradian)

## Usage

```js
var synonyms = require('unit-synonyms-angle').synonyms;

synonyms['°']; // => degree
synonyms['revolutions']; // => turn
synonyms['㎭']; // => radian
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
