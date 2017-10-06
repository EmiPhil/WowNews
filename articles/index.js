var articleCreators = require('./articleCreators')
var assign = Object.assign

// This function will return x identical articles
function createXArticles (x) {
  return function creator (type, args) {
    // the array to return
    var articles = []
    // the fn to call - default createNewProposal
    var fn = articleCreators[type || 'createNewProposal']
    // assign args to defaults
    args = assign({
      meta: {},
      data: {}
    }, args)
    // create the articles
    for (var i = 0; i < x; i += 1) {
      articles = articles.concat(fn(args))
    }
    return articles
  }
}

// This function expects type and args to be functions
function createXCustomArticles (x) {
  return function creator (typeFn, argsFn) {
    // the array to return
    var articles = []
    // the fn to call - default createNewProposal
    var type = typeFn(x)
    var fn = articleCreators[type || 'createNewProposal']
    // assign args to defaults
    var args = assign({
      meta: {},
      data: {}
    }, argsFn(x))
    // create the articles
    for (var i = 0; i < x; i += 1) {
      articles = articles.concat(fn(args))
    }
    return articles
  }
}

module.exports = {
  createXArticles: createXArticles,
  createXCustomArticles: createXCustomArticles
}
