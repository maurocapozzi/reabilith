# Reabilith - Landing Page

Landing page desenvolvida para a clínica de fisioterapia e studio de pilates **Reabilith**. O projeto foca em alta performance, acessibilidade, design responsivo (Mobile-First) e otimização máxima de SEO e Performance (Lighthouse).

## 🚀 Arquitetura e Tecnologias

- **HTML5 Semântico**: Estruturação clara para SEO e acessibilidade.
- **CSS3 Vanilla**: Estilização própria sem uso de frameworks pesados para garantir flexibilidade absoluta, leveza e aderência fiel ao design premium exigido.
- **JavaScript Vanilla**: Lógica simples e direta para os componentes interativos (Animação de scroll, FAQ Acordeão).
- **Design System Modular**: Tokens de cores (`--creme`, `--carvao`, `--teal`, `--dourado`), tipografias (Syne e DM Sans) e espaçamentos concentrados no arquivo `variables.css`.
- **Deploy Automático Preparado**: Configurações de cache e diretórios criadas nativamente para `Netlify` (`netlify.toml`), `Vercel` (`vercel.json`) e ambiente nativo com `Nginx` (`nginx.conf`).

## 🛠 Passos de Criação e Evolução do Projeto

1. **Estruturação Mobile-First e Design System**
   - Foram estabelecidas as paletas de cores e tipografias oficiais da marca no escopo `:root`.
   - Layout fluido construído essencialmente usando CSS Flexbox e Grid, perfeitamente adaptado desde o iPhone SE (320px) até monitores Ultrawide.

2. **Desenvolvimento das Seções (Componentes)**
   - **Hero Section**: Fundo em vídeo dinâmico, título chamativo e CTAs primários e secundários (whatsapp).
   - **Diferenciais**: Cards minimalistas destacando a credibilidade da clínica.
   - **Studio de Pilates**: Layout invertido focado em claro (`#FFFFFF`), com pílulas informativas arredondadas e CTAs padronizados na cor primária Teal.
   - **FAQ & Depoimentos**: Componente expansível (Acordeão) programado do zero em JS para manter a performance intocada.
   - **Footer & CTA Final**: Cards "Call to Action" duplos no rodapé, segmentando usuários entre Pilates (`--teal`) e Fisioterapia (`--dourado`), garantindo padronização visual completa.

3. **Otimização Extrema (Métricas Lighthouse)**
   - **LCP (Largest Contentful Paint)**: Resolução de gargalos através da injeção de `<link rel="preload">` e atributos `fetchpriority="high"` diretamente nas imagens de topo e no vídeo de background.
   - **Eliminação de Network Chains**: Substituição de chamadas bloqueantes ao `fonts.googleapis.com`. O código CSS da API do Google Fonts foi extraído, processado e alocado fisicamente no projeto (`google-fonts.css`) junto com preloads cirúrgicos dos arquivos `.woff2`, cortando drasticamente o "Critical Path Latency".
   - **Gestão Eficiente de Cache**: Emissão de headers de "1 ano" (31536000s) para assets estáticos configurada transversalmente (Apache, Nginx, Vercel, Netlify). Versões de pacotes CDN como Tabler Icons foram congeladas (ex: `@2.47.0`) para habilitar Immutable Cache nos servidores JSdelivr.

4. **Refatoração de Diretórios**
   - O diretório `public/` foi instituído como a "Root" de front-end (HTML, CSS, JS, Assets).
   - Arquivos sensíveis e configurações (Docker, configurações de hospedagem) foram isolados na raiz do projeto, impossibilitando acessos indevidos pelo browser.

## 💻 Como Rodar e Testar

### Localmente com Docker (Ambiente de Produção Simulado)
Certifique-se de ter o Docker rodando na sua máquina e execute:

```bash
docker-compose up -d
```
Acesse no navegador: [http://localhost:8081](http://localhost:8081). O servidor rodará em Nginx otimizado.

### Deploy Automático via Netlify (CI/CD)
O projeto está "Plug & Play" para a Netlify.
1. Envie o repositório para o GitHub.
2. No painel da Netlify, clique em **Add new site > Import an existing project**.
3. Selecione este repositório. O arquivo `netlify.toml` presente na raiz assumirá todas as configurações automaticamente (Diretório de build e Cabeçalhos Avançados de Cache).
4. Clique em **Deploy site** e em 15 segundos ele estará no ar com certificado SSL/HTTPS.
