		async function gera_grid(contexto, dim_x, dim_y) 
		{
			contexto.fillStyle = "black";
			contexto.fillRect(0,0, dim_y*10, dim_x*10);
			contexto.beginPath();
			for(let i = 0; i <= dim_y; i++)
			{
				ponto = (0 +10)*i;
				contexto.moveTo(0, ponto);
				contexto.lineTo(dim_y*10,ponto);
			}
			for(let i = 0; i <= dim_x; i++)
			{
				ponto = (0 +10)*i;
				contexto.moveTo(ponto, 0);
				contexto.lineTo(ponto,dim_x*10);
			}
			contexto.lineWidth = 1;
			contexto.strokeStyle = "green";
			await contexto.stroke();
			return
		}


		function array_aleatorio(tam_arry, dim_x, dim_y)
		{
			const numeros_aleatorios = new Array(tam_arry).fill(0).map((numero) => 
			{
				return numero = Math.floor(Math.random() * dim_x*dim_y);
			})
			return numeros_aleatorios
		}


		function primeira_geracao(tam_arry, array_aleatorio)
		{
			const matriz_inicial = new Array(tam_arry).fill(0);
			for(let i = 0; i < array_aleatorio.length; i++)
			{
				matriz_inicial[array_aleatorio[i]] = 1;
			}
			return matriz_inicial
		}


		function calcula_y_x(indice, dimensao)
		{	var linha = 0;
			while(indice > dimensao-1)
			{
				indice -= dimensao;
				linha +=1;
			}
			return [indice, linha]
		}

		function modifica_celula(contexto, y_esquerdo_superior, x_esquerdo_superior)
		{
			contexto.fillStyle = "red";
			contexto.fillRect(y_esquerdo_superior,x_esquerdo_superior, 10, 10);
			return
		}


		async function geracao_grid(contexto, matriz_inicial, dimensao)
		{
			for(let i=0; i<matriz_inicial.length; i++)
			{
				if(matriz_inicial[i] == 1)
				{
					posicao = calcula_y_x(i, dimensao);
					modifica_celula(contexto, posicao[0]*10, posicao[1]*10);
				}
			}
		}
		function viva_ou_morta(qtd_vizinhos, estado_celula)
		{
			if(estado_celula)
			{
				if(qtd_vizinhos < 2 || qtd_vizinhos >3)
				{
					//A celula estava viva e morreu.
					return 'M';
					
				}
				else
				{
					//A celula continua viva.
					return 1;
				}
			}
			else
			{
				if (qtd_vizinhos ===3)
				{
					//A celula estava morta e viveu.
					return 'V';
					
				}
				else
				{
					//A celula continua morta.
					return 0;
				}
			}
		}

		function vizinhos_irrestritos(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if(matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha-1]===1 || matriz_anterior[posicao-tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha+1]===1 || matriz_anterior[posicao-tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha-1]===1 || matriz_anterior[posicao+tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha+1]===1 || matriz_anterior[posicao+tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}
		function vizinhos_topo_esquerdo(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha+1]===1 || matriz_anterior[posicao+tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		function vizinhos_topo_direito(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha-1]===1 || matriz_anterior[posicao+tam_linha-1]==='M' )
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		function vizinhos_inferior_esquerdo(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha+1]===1 || matriz_anterior[posicao-tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		function vizinhos_inferior_direito(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha-1]===1 || matriz_anterior[posicao-tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}


		function vizinhos_baixo(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha-1]===1 || matriz_anterior[posicao+tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha+1]===1 || matriz_anterior[posicao+tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}


		function vizinhos_cima(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha-1]===1 || matriz_anterior[posicao-tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha+1]===1 || matriz_anterior[posicao-tam_linha+1]==='M' )
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		function vizinhos_esquerda(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao-1]===1 || matriz_anterior[posicao-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha-1]===1 || matriz_anterior[posicao-tam_linha-1]==='M' )
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha-1]===1 || matriz_anterior[posicao+tam_linha-1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		function vizinhos_direita(matriz_anterior, posicao, tam_linha)
		{
			let qtd_vizinhos=0;
			if (matriz_anterior[posicao+1]===1 || matriz_anterior[posicao+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha+1]===1 || matriz_anterior[posicao-tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao-tam_linha]===1 || matriz_anterior[posicao-tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha+1]===1 || matriz_anterior[posicao+tam_linha+1]==='M')
			{
				qtd_vizinhos++;
			}
			if (matriz_anterior[posicao+tam_linha]===1 || matriz_anterior[posicao+tam_linha]==='M')
			{
				qtd_vizinhos++;
			}
			return qtd_vizinhos;
		}

		async function proxima_geracao(matriz_anterior, tam_linha, tam_coluna)
		{
			let vizinhos = 0;
			let matriz_length = matriz_anterior.length;
			//let matriz_length = 11;
			for(let i=0; i<matriz_length; i++)
			{	
				let qtd_vizinhos = 0;
				let pos_x_valida = Math.floor(i/tam_linha);
				let pos_y_valida = Math.floor(i%tam_coluna);
				if(i===0)
				{
					//console.log('Chegou 1');
					qtd_vizinhos=vizinhos_topo_esquerdo(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(i===tam_linha-1)
				{
					qtd_vizinhos=vizinhos_topo_direito(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(i===matriz_length-tam_linha)
				{
					qtd_vizinhos=vizinhos_inferior_esquerdo(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(i === matriz_length)
				{
					qtd_vizinhos=vizinhos_inferior_direito(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(pos_x_valida === 0)
				{
					//console.log('pos ' +i);
					//console.log('posicaoa anterior '+matriz_anterior[i]);
					qtd_vizinhos=vizinhos_baixo(matriz_anterior, i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
					//console.log('posicaoa pos '+matriz_anterior[i]);
					//console.log('qtd '+qtd_vizinhos);
				}
				else if(pos_x_valida ===tam_linha-1)
				{
					qtd_vizinhos=vizinhos_cima(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(pos_y_valida === 0)
				{
					qtd_vizinhos=vizinhos_direita(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else if(pos_y_valida ===tam_coluna-1)
				{
					//console.log('Chegou 3');
					qtd_vizinhos=vizinhos_esquerda(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
				else
				{
					qtd_vizinhos=vizinhos_irrestritos(matriz_anterior,i, tam_linha);
					matriz_anterior[i] = viva_ou_morta(qtd_vizinhos, matriz_anterior[i]);
				}
			}
			nova_matriz = matriz_anterior.map((numero) => 
			{
				if(numero==='V')
					{
						return numero=1;
					}
				else if(numero==='M')
					{
						return numero=0;
					}
				else{
					return numero = numero;
				}
			})
			console.log(nova_matriz);
			return nova_matriz
		}

		function teste(i)
		{
			return new Promise((resolve) =>
			{
				resolve(i*i);
			});
		}


		function teste1(nome = 'Michel', sobrenome)
		{
			return new Promise((resolve) =>
			{
				resolve(nome+' '+sobrenome);
			});
		}


		function teste1_1(sobrenome) {
			return teste1(sobrenome=sobrenome)

		}

		function timer(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		async function orquestrador(contexto, matriz_inicial, dim, rodadas)
		{
			while(rodadas)
			{
				await timer(2000);
				gera_grid(contexto, dim, dim);
				proxima_matriz = await proxima_geracao(matriz_inicial, dim,dim);
				await timer(2000);
				geracao_grid(contexto,proxima_matriz,dim);
				rodadas--;
				console.log(rodadas);
			}
		}

		window.onload =function(){

			var map = document.getElementById('map');
			var contexto = map.getContext("2d");
			let dim = 10;
			gera_grid(contexto, dim, dim);
			random = array_aleatorio(20,dim,dim);
			//matriz_inicial = primeira_geracao(dim*dim,random);
			matriz_inicial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
							  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			  				  0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			geracao_grid(contexto,matriz_inicial,dim);
			let rodadas = 1;
			orquestrador(contexto,matriz_inicial,dim,rodadas);


}