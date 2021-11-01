import { Input } from './utils/Input';
import { ListClients } from './controller/ListClients';
import { RegisterClient } from './controller/RegisterClient';
import { Subsidiary } from './model/Subsidiary';

console.log(`Central de ações: Grupo World Beauty ---------------------------`);
const subsidiary = new Subsidiary('Filial Teste');
let execution = true;

while (execution) {
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

  const input = new Input();
  let option = input.receiveNumber(`Por favor, escolha uma opção: `);

  switch (option) {
    case 0:
      // Sair
      execution = false;
      console.log(`Até mais! :)`);
      break;
    case 1:
      // Cadastrar cliente
      const registerClient = new RegisterClient();
      registerClient.register(subsidiary);
      break;
    case 2:
      // Atualizar cadastro de cliente
      const updateClient = new UpdateClient();
      updateClient.update(clientCpf, subsidiary);
      break;
    case 3:
      // Excluir cliente
      const deleteClient = new DeleteClient();
      deleteClient.delete(clientCpf, subsidiary);
      break;
    case 4:
      // Listar todos os clientes
      const listClients = new ListClients();
      listClients.list(subsidiary);
      break;
    case 5:
      // Listar clientes de acordo com algum filtro
      console.log(`
      Que filtro gostaria de aplicar?

      [1] 10 clientes que mais consumiram em quantidade, não em valor
      [2] Classificação por gênero
      [3] 10 clientes que menos consumiram produtos ou serviços
      [4] 5 clientes que mais consumiram em valor, não em quantidade
      `);
      option = input.receiveNumber(`Por favor, escolha uma opção: `);

      const selectClients = new SelectClients();

      switch (option) {
        case 1:
          // 10 clientes que mais consumiram em quantidade, não em valor
          selectClients.selectClientsByMoreConsumedInQuantity(subsidiary);
          break;
        case 2:
          // Classificação por gênero
          selectClients.selectClientsByGender(subsidiary);
          break;
        case 3:
          // 10 clientes que menos consumiram produtos ou serviços
          selectClients.selectClientsByLessConsumption(subsidiary);
          break;
        case 4:
          // 5 clientes que mais consumiram em valor, não em quantidade
          selectClients.selectClientsByMoreConsumedInValue(subsidiary);
          break;
        default:
          console.log(`Operação não entendida :(`);
      }
      break;
    case 6:
      // Cadastrar produto
      const registerProduct = new RegisterProduct();
      registerProduct.register(subsidiary);
      break;
    case 7:
      // Atualizar cadastro de produto
      const updateProduct = new UpdateProduct();
      updateProduct.update(productId, subsidiary);
      break;
    case 8:
      // Excluir produto
      const deleteProduct = new DeleteProduct();
      deleteProduct.delete(productId, subsidiary);
      break;
    case 9:
      // Listar produtos de acordo com algum filtro
      console.log(`
      Que filtro gostaria de aplicar?

      [1] Produtos mais consumidos
      [2] Produtos mais consumidos por gênero
      `);
      option = input.receiveNumber(`Por favor, escolha uma opção: `);

      const selectProducts = new SelectProducts();

      switch (option) {
        case 1:
          // Produtos mais consumidos
          selectProducts.selectProductsMoreConsumed(subsidiary);
          break;
        case 2:
          // Produtos mais consumidos por gênero
          selectProducts.selectProductsMoreConsumedByGender(subsidiary);
          break;
        default:
          console.log(`Operação não entendida :(`);
      }
      break;
    case 10:
      // Cadastrar serviço
      const registerService = new RegisterService();
      registerService.register(subsidiary);
      break;
    case 11:
      // Atualizar cadastro de serviço
      const updateService = new UpdateService();
      updateService.update(serviceId, subsidiary);
      break;
    case 12:
      // Excluir serviço
      const deleteService = new DeleteService();
      deleteService.delete(serviceId, subsidiary);
      break;
    case 13:
      // Listar serviços de acordo com algum filtro
      console.log(`
      Que filtro gostaria de aplicar?

      [1] Serviços mais consumidos
      [2] Serviços mais consumidos por gênero
      `);
      option = input.receiveNumber(`Por favor, escolha uma opção: `);

      const selectServices = new SelectServices();

      switch (option) {
        case 1:
          // Serviços mais consumidos
          selectServices.selectServicesMoreConsumed(subsidiary);
          break;
        case 2:
          // Serviços mais consumidos por gênero
          selectServices.selectServicesMoreConsumedByGender(subsidiary);
          break;
        default:
          console.log(`Operação não entendida :(`);
      }
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
