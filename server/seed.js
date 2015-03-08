var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("articles_data.db");

db.run("INSERT INTO articles (headline, content, author) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?)",
  'Hello', 'I said hi.', 'Me!',
  'Bonjour', 'Jai dit allo', 'Moi!',
  'Bongiorno', 'Io sono dire bongiorno', 'Mio!',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
