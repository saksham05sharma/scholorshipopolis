var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saksham@0505",
  database: "scholarship"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM main", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });