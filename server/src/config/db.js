import mysql from 'mysql';

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'innovatebham',
    database: 'dbfinal'
});

function executeQuery(sql, args = []) {
    return getConnection()
        .then((connection) => {
            return new Promise((resolve, reject) => {
                connection.query(sql, args, (err, result) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });
}

function callProcedure(procedureName, args = []) {
    console.log("--args--", args[0]);
    console.log("--length--", args.length < 2);
    console.log("--number--", !isNaN(args[0]));
    console.log("--condition--", (args.length < 2 && !isNaN(args[0])));
    // let placeholders = (args.length < 2 && !isNaN(args[0])) ? args[0] : generatePlaceholders(args);
    let placeholders = generatePlaceholders(args);
    let callString = `CALL ${procedureName}(${placeholders});`; // CALL GetChirps();, or CALL InsertChirp(?,?,?);
    return executeQuery(callString, args);
}

function rows(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            return resultsets[0];
        });
}

function row(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            console.log("--result set--", resultsets);
            console.log("--affected--", resultsets.affectedRows);
            // return (resultsets[0][0] == undefined && resultsets.affectedRows >= 1) ? "ok" : resultsets[0][0];
            return resultsets[0][0];
        });
}

function empty(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then(() => {
            return;
        });
}

function generatePlaceholders(args = []) {
    console.log("--placeholder--", args);
    let placeholders = '';
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            if (i === args.length - 1) { // if we are on the last argument in the array
                placeholders += '?';
            } else {
                placeholders += '?,';
            }
        }
    }
    return placeholders;
}

function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
}

export { row, rows, empty, executeQuery, generatePlaceholders };