import Entrada from './services/entrada';
import { Subsidiary } from './model/Subsidiary';
import { RegisterClient } from './controller/RegisterClient';
import { ListClients } from './controller/ListClients';

console.log(`Central de ações: Grupo World Beauty ---------------------------`);
let subsidiary = new Subsidiary('Filial Teste');
let execucao = true;

while (execucao) {
  console.log(`
  Opções:

  - Clientes
  [01] Cadastrar cliente 
  [02] Atualizar cadastro de cliente
  [03] Excluir cliente
  [04] Listar todos os clientes
  [05] Listar clientes de acordo com algum filtro

  - Produtos
  [06] Cadastrar produto
  [07] Atualizar cadastro de produto
  [08] Excluir produto
  [09] Listar produtos de acordo com algum filtro

  - Serviços
  [10] Cadastrar serviço
  [11] Atualizar cadastro de serviço
  [12] Excluir serviço
  [13] Listar serviços de acordo com algum filtro

  [0] Sair
  `);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    case 1:
      let registerClient = new RegisterClient();
      registerClient.register(subsidiary);
      break;
    case 3:
      let listClients = new ListClients();
      listClients.list(subsidiary);
      break;
    case 5:
      console.log(`
      10 clientes que + consumiram em quantidade, não em valor.
      por gênero
      10 clientes que - consumiram
      5 clientes que + consumiram em valor, não em quantidade
      `);
      break;
    case 9:
      console.log(`
      produtos mais consumidos
      produtos + consumidos por gênero
      `);
      break;
    case 13:
      console.log(`
      serviços mais consumidos
      serviços + consumidos por gênero
      `);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
