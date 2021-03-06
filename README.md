# O jogo da vida
Este projeto visa ser meu primeiro contato com a linguagem de programaçao Javascript.

# Regras
Conway escolheu suas regras cuidadosamente, após um longo período de experimentos, para satisfazer três critérios:

Não deve haver nenhuma imagem inicial para a qual haja uma prova imediata ou trivial de que a população pode crescer sem limite.
Deve haver imagens iniciais que aparentemente cresçam sem limite.
Deve haver imagens iniciais simples que cresçam e mudem por um período de tempo considerável antes de chegar a um fim das possíveis formas:
Sumindo completamente (por superpopulação ou por ficarem muito distantes)
Estacionando em uma configuração estável que se mantem imutável para sempre, ou entrando em uma fase de oscilação na qual são repetidos ciclos infinitos de período dois ou mais.
Em outras palavras, as regras deviam tornar o comportamento das populações ao mesmo tempo interessante e imprevisível.

As regras são simples e elegantes:

Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.
É importante entender que todos os nascimentos e mortes ocorrem simultaneamente. Juntos eles constituem uma geração ou, como podemos chamá-los, um "instante" na história da vida completa da configuração inicial.

# Referência
https://pt.wikipedia.org/wiki/Jogo_da_vida
