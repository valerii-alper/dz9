// Рисуем колоду карт, которая состоит из:

// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей


suit =['clubs','spades','diamonds','hearts'];
picture = ['jack','queen','king','t'];
cards = [];


for(i=2; i<=10; i++){
    for(j=0; j<suit.length; j++){
        cardInfo=`<div class="card__info">${i}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>`;

    cards.push(`<div class="card">
        ${cardInfo}
        ${cardInfo}
    </div>`);
    }

}

console.log(cards)

for(i=0; i<picture.length; i++){
    for(j=0; j<suit.length; j++){
        cardInfo=`<div class="card__info">
            ${picture[i][0].toUpperCase()}
            <img src="img/${suit[j]}.svg" alt="${suit[j]}">
        </div>`;

        centerImg = picture[i] !== 't' ? picture[i] : suit[j];

        cards.push(`<div class="card card--person">
            ${cardInfo}
            <img class="person" src="img/${centerImg}.svg" alt="${centerImg}">
            ${cardInfo}
        </div>`);
    }
}

document.write(`<div class=wrapper>${cards.join(``)}</div>`);







     

    
   
   







