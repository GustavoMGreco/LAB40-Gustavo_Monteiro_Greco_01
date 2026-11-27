# LAB40 – Laboratório de Funcionalidades Web

Projeto-base para avaliação prática de Integração e Entrega Contínua (CI/CD).

## Requisitos
- Node.js 20 ou superior.
- npm.

## Executar localmente
```bash
npm install
npm start
```
Acesse http://localhost:3000. Para desenvolvimento com reinicialização automática: `npm run dev`.

## Endpoints
- `GET /health`: verificação de disponibilidade.
- `GET /api/features`: lista as 40 funcionalidades e seus estados.
- `POST /api/features/:id`: executa uma funcionalidade, recebendo JSON no corpo.

Exemplo:
```bash
curl -X POST http://localhost:3000/api/features/1 -H "Content-Type: application/json" -d '{"valor":200,"percentual":15}'
```

## Estrutura
```text
lab40/
├── public/
├── src/
│   ├── app.js
│   ├── server.js
│   └── features/
├── package.json
└── package-lock.json
```

## Contrato de cada módulo
Cada arquivo `src/features/featureNN.js` exporta `id`, `name`, `description`, `implemented` e `execute(input)`.

1. Implemente `execute(input)`.
2. Valide os dados recebidos.
3. Retorne um objeto serializável em JSON.
4. Trate entradas inválidas lançando `Error` com mensagem clara.
5. Depois de implementar e validar, altere `implemented` para `true`.
6. Não altere o contrato dos outros módulos nem a API central sem autorização.

Enquanto `implemented` for `false`, a API retorna HTTP 501 para aquele módulo.

## Importante
Este repositório é entregue intencionalmente sem testes automatizados, análise estática, workflow de CI, build ou configuração de deploy. O estudante deverá criar e justificar esses elementos durante a avaliação.

O servidor escuta `process.env.PORT` e `0.0.0.0`, e a aplicação não persiste dados em disco.

## Feature 01 – Testes, Lint e Auditoria
- **Testes automatizados:** `npm test` (ou `node --test test/feature01.test.js`)
- **Smoke test:** `npm run test:smoke`
- **Lint:** `npm run lint`
- **Auditoria:** `npm audit --audit-level=high` (`found 0 vulnerabilities`)
- **Roteiro de testes manuais:**
  1. Execute `npm start` e acesse `http://localhost:3000/health` (esperado: `status: "ok"`).
  2. Acesse `http://localhost:3000/api/features` e confirme `id: 1` com `implemented: true`.
  3. Abra `http://localhost:3000`, selecione a Feature 01 e clique em **Executar requisição** com `{"valor":200,"percentual":15}` (esperado: `resultado: 30`).
  4. Teste pela API `POST /api/features/1` com `{"valor":200,"percentual":15}` (esperado: HTTP 200, `resultado: 30`).
  5. Teste entrada inválida `{"valor":-1,"percentual":15}` em `POST /api/features/1` (esperado: HTTP 400 com mensagem de erro).
