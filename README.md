# Jogo de Heróis em JavaScript 🦸‍♂️

Este projeto é uma aplicação simples em **JavaScript** que simula heróis atacando com habilidades específicas de acordo com seu tipo. É um ótimo projeto para você treinar **classes, métodos, estruturas de decisão e loops**.
## ⚡ Funcionalidades

- Criação de heróis com propriedades:
  - Nome
  - Idade
  - Tipo (Guerreiro, Mago, Monge, Ninja)
- Cada tipo de herói possui um ataque característico:
  - **Mago:** magia
  - **Guerreiro:** espada
  - **Monge:** artes marciais
  - **Ninja:** shuriken
- Método `atacar()` que exibe no console o tipo e o ataque do herói.
- Possibilidade de evolução:
  - Adicionar vida e pontos de ataque
  - Criar loop de batalha entre heróis

## 🛠 Tecnologias

- JavaScript 
- Node.js para rodar no terminal
- Git e GitHub para versionamento

## Exemplo de Uso:
   const heroi1 = new Heroi("Gandalf", 2019, "Mago");
   const heroi2 = new Heroi("Conan", 35, "Guerreiro");
   
   heroi1.atacar(); // Saída: mago atacou usando magia
   heroi2.atacar(); // Saída: guerreiro atacou usando espada
