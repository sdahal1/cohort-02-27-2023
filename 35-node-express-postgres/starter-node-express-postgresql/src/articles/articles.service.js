const dbConnection = require("../db/connection")

function getAllArticles() {
  return dbConnection("articles").select("*");
}

function createArticle(newArticle) {
    return dbConnection("articles")
      .insert(newArticle)
      .returning('*')
      .then(rows => {
        return rows[0]
    })
}
  
function readArticle(article_id) {
    // SELECT * FROM articles WHERE article_id = ${article_id}
    return dbConnection("articles").select("*").where({ article_id });
}

function destroyArticle(article_id) {
    return dbConnection("articles")
        .where({ article_id })
        .delete();
}

function updateArticle(article_id, updatedArticle) {
    return dbConnection("articles")
        .select("*")
        .where({ article_id })
        .update(updatedArticle, "*")
        .then((updatedRecords) => updatedRecords[0]);
}

module.exports = {
    getAllArticles,
    createArticle,
    readArticle,
    destroyArticle,
    updateArticle
};