var phases = require('./phases')
var assign = Object.assign

function createNewArticle (phaseId) {
  // default phase to 1
  var phase = phases[phaseId || 1]
  // return the article creator
  return function create (meta, data) {
    // assign meta to defaults
    meta = assign({
      articleId: '',
      creatorId: '',
      phaseId: phaseId,
      phase: phase
    }, meta)
    // assign article data to defaults
    data = assign({
      title: 'Title',
      content: '...'
    }, data)
    // assign meta and data to a new object
    var article = assign({}, {
      meta: meta
    }, data)
    return article
  }
}

// Creation helpers
var createNewProposal = createNewArticle(1)
var createNewDraft = createNewArticle(2)
var createNewPreRelease = createNewArticle(3)
var createNewPublished = createNewArticle(4)

module.exports = {
  createNewArticle: createNewArticle,
  createNewProposal: createNewProposal,
  createNewDraft: createNewDraft,
  createNewPreRelease: createNewPreRelease,
  createNewPublished: createNewPublished
}
