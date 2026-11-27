// Funcionalidade 01: Calculadora de porcentagem.
// Objetivo: Calcula quanto representa um percentual de um valor.
// Exemplo de entrada: { valor: 200, percentual: 15 }
// Implemente conforme as regras e critérios do enunciado fornecido pelo professor.

const implemented = true;

// Desenvolva a regra de negócio e valide todos os dados de entrada.
function execute(input) {
  if (!input || !Number.isFinite(input.valor) || !Number.isFinite(input.percentual) || input.valor < 0 || input.percentual < 0 || input.percentual > 1000) throw new Error('Informe valor >= 0 e percentual entre 0 e 1000.');
  return { valor: input.valor, percentual: input.percentual, resultado: input.valor * input.percentual / 100 };
}

// Mantém o contrato de integração utilizado pela API central.
module.exports = {
  id: 1,
  name: "Calculadora de porcentagem",
  description: "Calcula quanto representa um percentual de um valor.",
  implemented,
  execute
};
