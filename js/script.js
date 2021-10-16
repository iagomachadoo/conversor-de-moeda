function converter() {
    let moedaASerConvertida = document.getElementById('moeda-convertida');
    let moedaDeReferencia = document.getElementById('moeda-referencia');
    let valorASerConvertido = Number(document.getElementById('valor-a-converter').value);
    let valorASerConvertidoDolar = valorASerConvertido.toLocaleString('en-us', {style: 'currency', currency: 'USD'});
    let valorASerConvertidoEuro = valorASerConvertido.toLocaleString('en', {style: 'currency', currency: 'EUR'});
    let valorASerConvertidoReal = valorASerConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let divResultado = document.getElementById('resultado');
    let divMostrarValor = document.getElementById('mostrar-valor');
    if (moedaASerConvertida.value == 'Bitcoin' && moedaDeReferencia.value == 'Dólar Americano') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 54179.20) * valorASerConvertido

        let valorConvrtidoFormatadoDolar = valorConvertido.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
        //bitcoin
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivEsquerda.appendChild(itemImgBitcoin)

        let itemValorMoedaEsquerda = document.createElement('p')
        
        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertido}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //dólar
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivDireita.appendChild(itemSimboloDolar)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoDolar}`

        divMostrarValor.appendChild(itemValorMoedaDireita)

    }else if (moedaASerConvertida.value == 'Bitcoin' && moedaDeReferencia.value == 'Euro') {
        
        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 46873.25) * valorASerConvertido

        let valorConvrtidoFormatadoEuro = valorConvertido.toLocaleString('en', {style: 'currency', currency: 'EUR'})
        //bitcoin
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivEsquerda.appendChild(itemImgBitcoin)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertido}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //euro
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivDireita.appendChild(itemImgEuro)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoEuro}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
        
    }else if (moedaASerConvertida.value == 'Bitcoin' && moedaDeReferencia.value == 'Real') {
        
        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 301785.51) * valorASerConvertido

        let valorConvrtidoFormatadoReal = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //bitcoin
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivEsquerda.appendChild(itemImgBitcoin)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertido}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //real
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivDireita.appendChild(itemSimboloReal)

        let itemValorMoedaDireita = document.createElement('p')
        
        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')
        
        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoReal}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
    
    //dólar
    }else if (moedaASerConvertida.value == 'Dólar Americano' && moedaDeReferencia.value == 'Bitcoin') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.000018) * valorASerConvertido
        //dólar
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivEsquerda.appendChild(itemSimboloDolar)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoDolar}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //bitcoin
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivDireita.appendChild(itemImgBitcoin)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        if(valorASerConvertido < 100){
            itemValorMoedaDireita.textContent = `${valorConvertido}`
        }else if(valorASerConvertido >= 100 && valorASerConvertido < 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(5)}`
        }else if(valorASerConvertido >= 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(6)}`
        }
       
        divMostrarValor.appendChild(itemValorMoedaDireita)
        
    }else if (moedaASerConvertida.value == 'Dólar Americano' && moedaDeReferencia.value == 'Euro') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.87) * valorASerConvertido

        let valorConvrtidoFormatadoEuro = valorConvertido.toLocaleString('en', {style: 'currency', currency: 'EUR'})
        //dólar
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivEsquerda.appendChild(itemSimboloDolar)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoDolar}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //euro
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivDireita.appendChild(itemImgEuro)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoEuro}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
        
    }else if (moedaASerConvertida.value == 'Dólar Americano' && moedaDeReferencia.value == 'Real') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 5.52) * valorASerConvertido

        let valorConvrtidoFormatadoReal = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //dólar
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivEsquerda.appendChild(itemSimboloDolar)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoDolar}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //real
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivDireita.appendChild(itemSimboloReal)

        let itemValorMoedaDireita = document.createElement('p')
        
        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')
        
        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoReal}`

        divMostrarValor.appendChild(itemValorMoedaDireita)

    //euro
    }else if (moedaASerConvertida.value == 'Euro' && moedaDeReferencia.value == 'Bitcoin') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.000024) * valorASerConvertido
        console.log(valorASerConvertido);
        console.log(valorConvertido);
        //euro
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivEsquerda.appendChild(itemImgEuro)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoEuro}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //bitcoin
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivDireita.appendChild(itemImgBitcoin)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        if(valorASerConvertido < 100){
            itemValorMoedaDireita.textContent = `${valorConvertido}`
        }else if(valorASerConvertido >= 100 && valorASerConvertido < 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(5)}`
        }else if(valorASerConvertido >= 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(6)}`
        }

        divMostrarValor.appendChild(itemValorMoedaDireita)
    
    }else if (moedaASerConvertida.value == 'Euro' && moedaDeReferencia.value == 'Dólar Americano') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 1.16) * valorASerConvertido

        let valorConvrtidoFormatadoDolar = valorConvertido.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
        //euro
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivEsquerda.appendChild(itemImgEuro)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoEuro}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //dólar
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivDireita.appendChild(itemSimboloDolar)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoDolar}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
    
    }else if (moedaASerConvertida.value == 'Euro' && moedaDeReferencia.value == 'Real') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 6.38) * valorASerConvertido

        let valorConvrtidoFormatadoReal = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //euro
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivEsquerda.appendChild(itemImgEuro)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoEuro}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //real
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivDireita.appendChild(itemSimboloReal)

        let itemValorMoedaDireita = document.createElement('p')
        
        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')
        
        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoReal}`

        divMostrarValor.appendChild(itemValorMoedaDireita)

    //real
    }else if (moedaASerConvertida.value == 'Real' && moedaDeReferencia.value == 'Bitcoin') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.0000033) * valorASerConvertido
        //real
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivEsquerda.appendChild(itemSimboloReal)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.setAttribute('id', 'valor-da-moeda-real')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoReal}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //bitcoin
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgBitcoin = document.createElement('img')

        itemImgBitcoin.setAttribute('src','img/currency-bitcoin.svg')

        itemDivDireita.appendChild(itemImgBitcoin)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        if(valorASerConvertido < 100){
            itemValorMoedaDireita.textContent = `${valorConvertido}`
        }else if(valorASerConvertido >= 100 && valorASerConvertido < 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(5)}`
        }else if(valorASerConvertido >= 1000){
            itemValorMoedaDireita.textContent = `${valorConvertido.toFixed(6)}`
        }

        divMostrarValor.appendChild(itemValorMoedaDireita)
    
    }else if (moedaASerConvertida.value == 'Real' && moedaDeReferencia.value == 'Dólar Americano') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.18) * valorASerConvertido

        let valorConvrtidoFormatadoDolar = valorConvertido.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
        //real
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivEsquerda.appendChild(itemSimboloReal)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.setAttribute('id', 'valor-da-moeda-real')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoReal}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //dólar
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemSimboloDolar = document.createElement('p')

        itemSimboloDolar.setAttribute('id', 'simbolo-dolar')

        itemSimboloDolar.textContent = '$'

        itemDivDireita.appendChild(itemSimboloDolar)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoDolar}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
    
    }else if (moedaASerConvertida.value == 'Real' && moedaDeReferencia.value == 'Euro') {

        divResultado.innerHTML = ''
        divMostrarValor.innerHTML = ''

        let valorConvertido = (1 * 0.16) * valorASerConvertido

        let valorConvrtidoFormatadoEuro = valorConvertido.toLocaleString('en', {style: 'currency', currency: 'EUR'})
        //real
        let itemDivEsquerda = document.createElement('div')

        itemDivEsquerda.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivEsquerda)

        let itemSimboloReal = document.createElement('p')

        itemSimboloReal.setAttribute('id', 'real')

        itemSimboloReal.textContent = 'R$'

        itemDivEsquerda.appendChild(itemSimboloReal)

        let itemValorMoedaEsquerda = document.createElement('p')

        itemValorMoedaEsquerda.setAttribute('class', 'valor-da-moeda')

        itemValorMoedaEsquerda.setAttribute('id', 'valor-da-moeda-real')

        itemValorMoedaEsquerda.textContent = `${valorASerConvertidoReal}`

        divMostrarValor.appendChild(itemValorMoedaEsquerda)
        //símbolo de igualdade
        let simboloDeIgual = document.createElement('p')
        simboloDeIgual.setAttribute('id', 'simbolo-de-igual')
        simboloDeIgual.textContent = `=`
        divResultado.appendChild(simboloDeIgual)
        //euro
        let itemDivDireita = document.createElement('div')

        itemDivDireita.setAttribute('class', 'moeda')

        divResultado.appendChild(itemDivDireita)

        let itemImgEuro = document.createElement('img')

        itemImgEuro.setAttribute('src','img/currency-euro.svg')

        itemImgEuro.setAttribute('id', 'euro')

        itemDivDireita.appendChild(itemImgEuro)

        let itemValorMoedaDireita = document.createElement('p')

        itemValorMoedaDireita.setAttribute('class', 'valor-da-moeda valor-da-moeda-lado-direito')

        itemValorMoedaDireita.textContent = `${valorConvrtidoFormatadoEuro}`

        divMostrarValor.appendChild(itemValorMoedaDireita)
    }
}