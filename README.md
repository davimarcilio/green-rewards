# Green Rewards
Transforme Ações em Impacto com Green Rewards

Você já imaginou um mundo onde suas boas ações não apenas fazem a diferença, mas também trazem recompensas tangíveis? Apresentamos Green Rewards, a plataforma inovadora que transforma o engajamento social em benefícios reais!

Como Funciona:

O Player: Você realiza boas ações e participa de missões promovidas por ONGs e instituições de caridade. Cada ação conta e cada missão concluída é uma oportunidade para ganhar pontos.

A Instituição: ONGs e organizações de caridade criam missões que permitem aos players usar seus pontos doados para promover suas causas. Ao contribuir com pontos, você está ajudando a gerar impacto positivo e a engajar a comunidade.

O Patrocinador: Marcas e empresas oferecem uma gama de prêmios em suas lojas, que podem ser trocados pelos pontos ganhos. Eles são incentivados a participar, pois sua marca é associada a ações positivas e à responsabilidade social.
O Processo:

Ganhe Pontos: Complete missões e boas ações para acumular pontos.
Troque Pontos: Visite a loja do patrocinador para trocar seus pontos por descontos, gift cards ou brindes exclusivos.
Doe e Faça o Bem: Contribua com pontos para instituições e veja como sua participação faz a diferença em projetos reais.

Por que Green Rewards?

Impacto Social: Cada ação sua promove causas nobres e ajuda a gerar mudanças significativas.
Recompensas Reais: Troque seus pontos por prêmios desejados, fazendo com que suas boas ações tenham um retorno concreto.
Engajamento e Transparência: Uma plataforma que conecta players, instituições e patrocinadores de forma eficaz, garantindo que todos ganhem.

Transforme suas boas ações em recompensas e ajude a criar um mundo melhor. Junte-se a nós no Green Rewards e descubra como suas atitudes podem gerar um impacto positivo e trazer benefícios reais!

# Funcionamento

A nossa aplicação é uma plataforma que premia boas ações dos usuários com pontos, que podem ser trocados por brindes como descontos ou gift cards. A aplicação envolve três elementos principais:

    Player (Usuário): Realiza boas ações e participa de missões propostas por instituições de caridade. Ao completar essas missões, o player ganha pontos.

    Instituição: ONGs e organizações de caridade criam missões que permitem aos players usar seus pontos doados para apoiar suas causas. Essas instituições ajudam a gerar impacto social positivo.

    Patrocinador: Marcas e empresas oferecem prêmios na forma de descontos, gift cards ou brindes na sua loja. Os pontos acumulados pelos players podem ser trocados por esses prêmios.


    Participação: Os players completam missões para ganhar pontos.
    Troca de Pontos: Os pontos podem ser trocados por prêmios na loja dos patrocinadores.

    Doação e Impacto: Os patrocinadores podem usar os pontos para fazer doações a instituições. As instituições, por sua vez, criam novas missões com esses pontos para engajar ainda mais os players.

Assim, a aplicação cria um ciclo virtuoso de boas ações, recompensas e apoio a causas sociais, beneficiando todos os envolvidos.

# Requisitos

Requisitos Funcionais
1. Requisitos para o Player (Usuário)
    - 1.1 O sistema deve permitir que o usuário se cadastre como Player, fornecendo: Nome de usuário (nome fantasia),
Email,
CPF,
Senha (confirmação obrigatória)
    - 1.2 O sistema deve permitir que o usuário faça login usando: Email ou CPF e Senha
    - 1.3 O sistema deve permitir que o Player visualize uma lista de missões disponíveis.

    - 1.4 O sistema deve permitir que o Player se inscreva e participe de missões.

    - 1.5 O sistema deve registrar a conclusão das missões e atribuir pontos ao Player.

    - 1.6 O sistema deve permitir que o Player visualize seu saldo atual de pontos acumulados.

    - 1.7 O sistema deve exibir o histórico de missões completadas e os pontos ganhos.

    - 1.8 O sistema deve permitir que o Player troque seus pontos por prêmios disponíveis na loja dos patrocinadores.

2. Requisitos para a Instituição
    - 2.1 O sistema deve permitir que a Instituição se cadastre, fornecendo: Nome (razão social),
Data de nascimento/fundação,
CPF/CNPJ e
Telefone

    - 2.2 O sistema deve permitir que a Instituição crie novas missões, definindo: Título,
Descrição e
Quantidade de pontos que os Players podem ganhar

    - 2.3 O sistema deve permitir que a Instituição visualize os pontos doados pelos patrocinadores.

3. Requisitos para o Patrocinador
    - 3.1 O sistema deve permitir que o Patrocinador se cadastre, fornecendo: Nome da empresa (razão social),
CNPJ e
Telefone

    - 3.2 O sistema deve permitir que o Patrocinador ofereça prêmios na forma de: Descontos,
Gift cards e
Brindes

    - 3.3 O sistema deve permitir que o Patrocinador doe pontos para as Instituições.

4. Requisitos Comuns
    - 4.1 O sistema deve permitir a entrada de dados de endereço, incluindo: CEP,
Estado,
Cidade,
Bairro,
Número e
Observação

    - 4.2 O sistema deve criar um ciclo onde: Os patrocinadores adquirem pontos com base nos prêmios anunciados.
As Instituições usam os pontos doados para criar novas missões.


# [Figma](https://www.figma.com/design/7T7AchPSlYal0KM49G644V/Hackathon-2024?node-id=0-1&t=LqqQ7BCJBAxKdXZJ-1)

# [Excalidraw](https://excalidraw.com/#room=07d64c337c9fde46abb9,dUM2Cn-ctT51YrIBQ92RsA)
![alt text](./docs/excalidrarw.png)

# Estacionamento de ideias
 - Quando não tiver pontos disponíveis, fazer rankup onde ganha patente por fazer boas ações e sobe de nível
 - Re-doar os pontos para a instituição novamente, caso não queira utiliza-los
 - Receber medalhas por suas missões

# TODO 
- [ ] Edição de informações de corporation
- [ ] Melhoria na edição de informações dos players
- [ ] Cadastro de missões
- [ ] Puxar missions/awards da API
- [ ] Tela de cadastro de missions/awards
- [ ] Tela de ajudar instituições
- [ ] Crud de cadastro de prêmio(Front)
- [ ] Crud de missões(Front)
- [ ] Função de iniciar missão
- [ ] Confirmação para concluir missão
- [ ] Upload de avatar
- [ ] Melhorias na UI
- [ ] Responsividade
- [ ] SEO

# Teste localmente
Com docker instalado, faça o clone do repo e utilize o comando 
```
docker compose up -d
```

Acesse localhost:3000

# Solução vencedora do [hackathon](https://github.com/Fernanda-Kipper/hackathon-2024) 2024!