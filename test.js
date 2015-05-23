var fs = require("fs");
var path = require("path");

function dirTree(currPath, max) {
    if (max === 0)
        return;

    var stats = fs.statSync(currPath);

    if (stats.isDirectory()) {
        var contents = [];
        fs.readdirSync(currPath).forEach(function(f)
        {
            var c = dirTree(path.join(currPath, f), max - 1);
            if (typeof c === "string")
                contents.push(c);
            else if (typeof c === "object")
                contents[f] = c;
        });

        return contents;
    } else { return path.basename(currPath); }
}

console.log(require('util').inspect(dirTree(process.argv[2], process.argv[3] || 3), false, null));