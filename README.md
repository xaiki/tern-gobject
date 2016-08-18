# tern-gobject

[![Build Status](https://secure.travis-ci.org/xaiki/tern-gobject.png)](http://travis-ci.org/xaiki/tern-gobject)
[![NPM version](https://img.shields.io/npm/v/tern-node-extension.svg)](https://www.npmjs.org/package/tern-node-extension)

[tern-gobject](https://github.com/xaiki/tern-gobject) is a plugin which adds
support validation for GJS style gobject bindings to [Tern](http://ternjs.net/).

## Installation

tern-node-extension works with the NodeJS [Tern Server][tern-server], and within a browser.

The easiest way to install tern-node-extension is to use a recent version of
[npm][npm]. In the directory where you installed the [tern package][tern-npm],
simply run

```
$ npm install tern-gobject
```

## Configuration

`gobject` tern plugin extends tern to support validation.

### With Node.js

In order for Tern to load the tern-node-express plugin once it is installed, you must
include `gobject` in the `plugins` section of your [Tern configuration
file][tern-config] and `node`.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "plugins": {
    "gobject": {}
  }
}
```

## Structure

The basic structure of the project is given in the following way:

* `gobject.js` the tern plugin.
