const cardSection = document.getElementById('leis-cards')

function cards(objeto){
    return `
    <div class="leis-cards__div-render">
        <h5 class="leis-card__div-titulo">${objeto.artigo}</h5>
        <p class="leis-card__div-lei">${objeto.lei}</p>    
        ${objeto.pena ? `<p class="leis-card__div-pena"><strong>Pena: </strong>${objeto.pena}</p>` : `<span></span>`} 
        ${objeto.paragrafo ? `<p class="leis-card__div-paragrafo">${objeto.paragrafo}</p>` : `<span></span>`}
        ${objeto.inciso ? `<p class="leis-card__div-inciso"><strong>Inciso: </strong> ${objeto.inciso}</p>`: `<span></span>`}
    </div>`
}

async function books() {
    try{
        const response = await fetch('../dados/dados.json')
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        for (let i=0; i<=json.length; i++){
            cardSection.innerHTML += cards(json[i])
        }
    }catch(e){
      
    }
}

books()