// export class Endereco {
//   logradouro: string;
//   numero: string;
//   complemento: string;
//   bairro: string;
//   cep: string;
//   cidade: string;
//   estado: string;
// }

// export class Pessoa {
//   codigo: number;
//   nome: string;
//   endereco = new Endereco();
//   ativo = true;
// }

// export class Categoria {
//   codigo: number;
// }

// export class Lancamento {
//   codigo: number;
//   tipo = 'RECEITA';
//   descricao: string;
//   dataVencimento: Date;
//   dataPagamento: Date;
//   valor: number;
//   observacao: string;
//   pessoa = new Pessoa();
//   categoria = new Categoria();
// }

export interface IUser {
  fullname: string;
  email?: string;
  password: string;
  confirm_password: string;
  phone: string;
  document?: string;
  password_strenght: number;
}

export interface ILoginProps {
  email: string;
  password: string;
}
