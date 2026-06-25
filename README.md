# Reabilith - Landing Page

Landing page desenvolvida para a clínica de fisioterapia e studio de pilates **Reabilith**. O projeto foca em alta performance, acessibilidade e design responsivo (Mobile-First), servido através de um contêiner Nginx.

## Passos de Criação e Arquitetura do Projeto

1. **Definição de Requisitos e Design System**
   - Foram estabelecidos os tokens de cores (Creme, Carvão, Teal e Dourado) e a tipografia base utilizando as fontes do Google (Syne e DM Sans).
   - O layout foi estruturado priorizando telas mobile (390px) utilizando HTML5 e CSS3 vanilla, sem frameworks.

2. **Primeira Implementação (Arquivo Único)**
   - Inicialmente, a interface inteira foi desenvolvida num único arquivo `index.html`, concentrando CSS no `<head>` e interações no final do `<body>`.

3. **Configuração do Contêiner Docker**
   - Criamos o arquivo `docker-compose.yml` utilizando a imagem `nginx:alpine` para servir os arquivos estáticos de forma isolada.
   - A porta foi exposta em `localhost:8081`.

4. **Refatoração Modular (Arquitetura Atual)**
   - Abandonamos a abordagem de arquivo único para facilitar a escalabilidade.
   - O `index.html`, o diretório `styles/` e `js/` foram encapsulados dentro do diretório `public/`.
   - O diretório `public/` atua agora como o "Document Root" seguro do nosso servidor Nginx.
   - O Docker foi reconfigurado para montar apenas o diretório `./public` no Nginx, garantindo que arquivos de configuração (como o `docker-compose.yml`) nunca fiquem expostos.

5. **Controle de Versão**
   - Inicializamos o repositório Git.
   - Criamos o `.gitignore` para omitir diretórios sensíveis ou de rascunho (como a pasta `_documentacao/`).

## Como Rodar Localmente

Certifique-se de ter o Docker Daemon rodando na sua máquina e execute:

```bash
docker-compose up -d
```

Acesse no navegador: [http://localhost:8081](http://localhost:8081).
