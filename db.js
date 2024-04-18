import mysql from "mysql2/promise";

async function connect() {
  const connection = await mysql.createConnection(
    "mysql://root:kiraFE22022006@localhost:3306/teste"
  );
  global.connection = connection;
  return connection;
}

async function selectProdutos() {
  const conn = await connect();

  try {
    const [rows] = await conn.query("SELECT * FROM testeProd;");
    conn.end();
    return rows.map((row) => ({
      id_prod: row.id_prod,
      nome: row.nome,
      valor: row.valor,
    }));
  } catch (error) {
    conn.end();
    return "Error ao selecionar produtos";
  }
}

async function insertProduto(insert) {
  const conn = await connect();

  try {
    const partes = insert.split(", ");
    const sql = "INSERT INTO testeProd VALUES (?,?,?);";
    const values = [, partes[0], Number(partes[1])];
    await conn.query(sql, values);
    conn.end();
    return "Insert feito!";
  } catch (error) {
    conn.end();
    return "Error ao inserir produto";
  }
}

async function updateProduto(update) {
  const conn = await connect();

  try {
    const partes = update.split(", ");
    const sql = "UPDATE testeProd set nome = ?, valor = ? where id_prod = ?;";
    const values = [partes[1], Number(partes[2]), Number(partes[0])];
    await conn.query(sql, values);
    conn.end();
    return "Atualização feita!";
  } catch (error) {
    conn.end();
    return "Error ao atualizar produto";
  }
}

async function deleteProduto(id) {
  const conn = await connect();

  try {
    const sql = "DELETE from testeProd where id_prod = ?;";
    const values = [Number(id)];
    await conn.query(sql, values);
    conn.end();
    return "Deleção feita!";
  } catch (error) {
    conn.end();
    return "Error ao deletar produto";
  }
}

export { selectProdutos, insertProduto, updateProduto, deleteProduto };
