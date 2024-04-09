import mysql from "mysql2/promise";

async function connect() {
  const connection = await mysql.createConnection(
    "mysql://root:senac@localhost:3307/nodeJsMySql"
  );
  global.connection = connection;
  return connection;
}

async function selectProdutos() {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM produtos;");
  return rows;
}

async function insertProduto(insert) {
  const conn = await connect();
  const partes = insert.split(", ");
  const sql = "INSERT INTO produtos VALUES (?,?,?);";
  const values = [, partes[0], partes[1]];
  await conn.query(sql, values);
  return "Insert feito!";
}

export { selectProdutos, insertProduto};
