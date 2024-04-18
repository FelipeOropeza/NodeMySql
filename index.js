import { selectProdutos, insertProduto, updateProduto, deleteProduto } from "./db.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "1 - Selecionar produtos \n2 - Cadastrar produto \n3 - Atualizar produto \n4 - Deletar produto \n\nSeleciona uma função: ",
  async (valor) => {
    switch (valor) {
      case "1":
        console.log("Selecionando produtos...");
        const produtos = await selectProdutos();
        console.log(produtos);
        rl.close();
        break;
      case "2":
        rl.question("Digite o nome e o valor do produto: ", async (insert) => {
          console.log(await insertProduto(insert));
          rl.close();
        });
        break;
      case "3":
        console.log(await selectProdutos());
        rl.question(
          "Digite o id e as informaçoes a serem atualizadas: ",
          async (update) => {
            console.log(await updateProduto(update));
            rl.close();
          }
        );
        break;
      case "4":
        console.log(await selectProdutos());
        rl.question(
          "Digite o id do produto: ",
          async (id) => {
            console.log(await deleteProduto(id));
            rl.close();
          }
        );
        break;
      default:
        console.log("Função não existe!!");
        rl.close();
    }
  }
);
