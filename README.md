# team4-desafio2-plant-peace

## Descrição do Desafio

Você precisará recriar as páginas mencionadas acima, um site para uma loja de plantas fictícia, mantendo-se fiel ao seu design original usando React.

Adicione os colaboradores ao seu repositório no GitHub:

- isabella.terssariol@compasso.com.br
- davi.lerne@compasso.com.br
- ruan.amaral@compasso.com.br
- lucas.gauto@compasso.com.br
- maithe.ferrao@compasso.com.br
- gabriel.bezerra@compasso.com.br
- edmarmiller@hotmail.com

Data de entrega: 16/09 – 17h30 – segunda-feira.

Cada apresentação durará no máximo 5 minutos.

### Descrição Header e Footer:

- Header
    - A Header deve estar em todas as páginas, contendo o ícone e todos os links como no figma (Home/Register/Products/About us);
    - O botão ‘Home’ deve encaminhar para a página inicial Home;
    - O botão ‘Register’ encaminha para a página de formulário de plantas;
    - O botão ‘Products’ não encaminha para nenhuma página, exceto se optarem por fazer a página opcional (descrição em Requisitos opcionais);
    - O botão ‘About us’ encaminha para a página sobre os desenvolvedores (descrição em Requisitos obrigatórios);
    - O ícone de perfil deve ser importado do Clerke.
- Footer
    - O Footer deve estar em todas as página, com o design fiel ao Figma.

### Os requisitos **OBRIGATÓRIOS** são:

- Utilize TypeScript para tipagem;
- Utilize [Clerk](https://clerk.com/docs/quickstarts/react), uma biblioteca para lidar com a autenticação do usuário. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- O ícone do perfil do usuário no componente de Header precisa ser importado do Clerk;
- [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- Crie controles deslizantes para exibição das plantas nas sessões da Home, em formato de Carrossel. Recomendação de biblioteca: [Splide](https://splidejs.com/). [Splide for React docs.](https://splidejs.com/integration/react-splide/) **Sinta-se à vontade para usar a biblioteca de sua preferência;**
- Persista as informações necessária no banco (abaixo contém um exemplo de como deve ficar a estrutura do JSON para as plantas);
- Criar, no mínimo, um método POST e um método GET para preencher o “database” e ler as informações;
- Ao preencher o formulário de registro, as plantas devem ser renderizadas em tempo real nas duas sessões de plantas da página inicial;
- Caso uma planta tenha desconto, ela será renderizada na seção “Plants in Sale”. Você precisa usar a porcentagem do banco de dados para calcular o desconto e exibir o preço final;
- Os campos de formulário devem ser todos validados;
- Ao clicar no cartão de uma planta, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- Você precisa criar uma página “About Us” que contenha informações sobre os desenvolvedores. Use sua imaginação para criar esta página, basta usar a mesma paleta de cores;
- A aplicação deve estar responsiva;
- Crie um repositório privado para o grupo em seu Github e adicione os instrutores como colaboradores do projeto e demais integrantes;
    
    Siga o padrão:
    
    nome do repositório: squard-desafio2-nome-da-loja
    
    dentro do repositório teremos os dois projetos, back e front.
    
    nome-da-loja-api
    
    nome-da-loja-web
    
- Adicione um README ao seu projeto;
- Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado.

### Os requisitos **OPCIONAIS** são:

- Aplicar efeitos de Hover;
- Criar uma página (’Products’, que está na Header) para renderizar todas as plantas que estão em seu database;
- Criar uma página de erro criativa, porém, coerente com figma;
- Criar um input de imagem no "formulário de plantas”;
- Salvar o caminho da imagem no banco e a imagem na pasta assets;
- Sugerir possíveis implementações. Somente após cumprir os itens obrigatórios.
