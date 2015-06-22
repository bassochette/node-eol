# Node EOL
## Find out the eol char used in a string.

----------------------------------
### Install 

> npm install node-eol

### Use 

> var eol = require('node-eol')
> var eolChar = eol("some \r String \r")

-----------------------------------
### Example : load a TSV file
	
> 	var async = require('async'),
>        eol = require('node-eol'),
>        readStream = fs.createReadStream(config.questionTsvPath, {})
>
>      var data = '',
>        separatorChar = '\t'
>     readStream.on('data', function (chunk) {
>         data += chunk.toString()
>     })
>
>     readStream.on('end', function () {
>        var eolChar = eol(data)
>        async.map(data.split(eolChar), function (line, next) {
>            next(null, line.split(separatorChar))
>        }, function (err, result) {
>            doSomethings(result)
>        })
>     })