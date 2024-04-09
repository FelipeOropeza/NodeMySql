import { selectProdutos, insertProduto } from "./db.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "1 - Selecionar produtos \n2 - Cadastrar produto \n3 - Deletar produto \n\nSeleciona uma função: ",
  async (valor) => {
    switch (valor) {
      case "1":
        console.log(await selectProdutos());
        break;
      case "2":
        rl.question("Digite o nome e produto: ", async (insert) => {
          console.log(await insertProduto(insert));
        });
        break;
      case "3":
        break;
      default:
        console.log("Função não existe!!");
    }
  }
);
