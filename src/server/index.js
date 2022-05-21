const express = require('express');
const fs = require('fs');
const cors = require('cors');
var nodePandoc = require('node-pandoc');
const app = express();
const port = 3001;

// MIDDLEWARE

app.use(express.json());

app.use(cors({
    origin: '*'
}));

// PANDOC PROCESSOR

function conversionMagic(inType, inFile, outType, outFile) {
    const basePath = './src/server';
    const src = `${basePath}/${inFile}`;
    const args = `-f ${inType} -t ${outType} -o ${basePath}/${outFile}`;
    const callback = (err, result)=> {
        if (err) console.error(err)
        return result
    }
    nodePandoc(src, args, callback);
}

// WRITE DATA FROM POST REQ TO TEST.MD

app.post('/api/md', function (req, res) {
    fs.writeFileSync('./src/server/test.md', req.body.content, (err) => {
        (err) ? res.send('failed') : res.send('success');
    })
    conversionMagic('markdown', 'test.md', 'asciidoc', 'test.adoc');
    res.send(req.body.content);
})

// WRITE DATA FROM POST REQ TO TEST.ADOC

app.post('/api/adoc', function (req, res) {
    fs.writeFileSync('./src/server/test.adoc', req.body.content, (err) => {
        (err) ? res.send('failed') : res.send('success');
    })
    conversionMagic('asciidoc', 'test.adoc', 'markdown', 'test.md');
    res.send(req.body.content);
})

app.get('/file/md', function (req, res) {
    conversionMagic('asciidoc', 'test.adoc', 'markdown', 'test.md');
    var path = './src/server/test.md';
    var file = fs.readFileSync(path, 'utf8');
    res.send({content: file})
})

app.get('/file/adoc', function (req, res) {
    conversionMagic('markdown', 'test.md', 'asciidoc', 'test.adoc');
    var path = './src/server/test.adoc';
    var file = fs.readFileSync(path, 'utf8');
    res.send({content: file})
})

// LOGS MSG

app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
