# aulaProgramacaoWeb
# Plataforma ONG — Entrega 1 (HTML5 semântico)

## O que está incluso
- index.html — Página inicial institucional com informações de contato.
- projetos.html — Páginas dos projetos e instruções de como ajudar.
- cadastro.html — Formulário de cadastro com validação nativa + máscaras (CPF, telefone, CEP).
- css/styles.css — Estilos responsivos (mobile-first).
- js/script.js — Máscaras e validação adicional.
- assets/images/ — Pasta para imagens (substitua pelos arquivos otimizados).

## Requisitos atendidos (especificação da disciplina)
- ≥ 3 páginas HTML semânticas (index, projetos, cadastro).
- Hierarquia de títulos correta (h1, h2, h3).
- Formulário com tipos HTML5, validação nativa (required, type="email", pattern).
- Agrupamento lógico com fieldset e legend.
- Máscaras de input para CPF, telefone e CEP (implementadas em js/script.js).
- Responsividade (mobile-first) e atributos de acessibilidade básicos (aria-*, alt, role).
- Lazy loading para imagens (loading="lazy").

## Como usar / publicar
1. Crie um repositório público no GitHub chamado ong-platform (ou outro nome).
2. Faça git clone localmente, crie a estrutura de pastas e adicione os arquivos.
3. Commit e push para o repositório público.
4. (Opcional) Ative GitHub Pages em Settings > Pages apontando para main branch — o site ficará disponível em https://<seu-usuario>.github.io/<repo>.

## Validação W3C
- Recomenda-se validar cada arquivo HTML no [W3C Validator](https://validator.w3.org/) antes da entrega.
- Ajustes comuns: remover atributos inválidos, garantir encoding UTF-8.

## Observações para evolução
- Integrar backend para persistência de cadastro.
- Implementar autenticação para área de administradores.
- Implementar relatórios, painel e sistema real de doações.
