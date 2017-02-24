var express = require('express')
var dirtree = require('directory-tree');
var path = require('path');
var pug = require('pug');

var app = express()

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render( 'index', { title: 'Rolls Royce', message: 'Rolls Royce Index'});
})

var tree = dirtree('./documentation/', ['.pdf'], function(item, PATH) {
  console.log(item);
});

// console.log(tree.children)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
