var util = require("./util-lint");

exports['test required module validation'] = function() {
  // we don't support non gi imports
  util.assertLint("imports.notgi", {
    messages : [{"message":"Unknown property 'notgi'",
                 "from":8,
                 "to":13,
                 "severity":"warning",
                 "file":"test1.js"}]
  });

  // Invalid import, should be unknown module but it'll be Unkonwn property
  util.assertLint("imports.gi.blah", {
    messages : [{"message":"Unknown property 'blah'",
                 "from":11,
                 "to":15,
                 "severity":"warning",
                 "file":"test1.js"}]
  });

  // known module
  util.assertLint("var gtk = imports.gi.Gtk", {
          messages : []
  });
    
}

if (module == require.main) require("test").run(exports);
