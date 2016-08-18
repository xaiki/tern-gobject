(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
    "use strict";

    var fs = require ('fs');
    var process = require ('process');

    var dirs = ['/usr/share/gir-1.0/']
    dirs.concat(process.env['GI_TYPELIB_PATH'])

    var classes = dirs.map(function (arg) {
        var girs = fs.readdirSync(arg);
        return girs.map(function (g) {
            return g.split('-')[0];
        })
    }).reduce(function (p, c) {
        return p.concat(c);
    }, [])

    var installedGI = {}
    classes.forEach(function (c) {
        installedGI[c] = {}
    })

    var defs = {
        "!name": "gobject",
        imports: {
            gi: installedGI
        }
    }

    tern.registerPlugin("gobject", function(server, options) {
        server.addDefs(defs)
    });
});

