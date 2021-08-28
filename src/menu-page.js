import tejImage from './tej.jpg';
import tellaImage from './tellaImage.png';
import kinetoImage from './kineto.jpg';
import arekeImage from './areke.jpg'
import coffeeImage from './coffee.jpg'
import injeraImage from './injera.jpg'
import doroImage from './doro.jpg'
import tibsImage from './tibs.jpg'
import firfirImage from './firfir.jpg'
import shiroImage from './shiro.jpg'
import kitfoImage from './kitfo.jpg'
import beyaynetImage from './beyaynet.jpg'

export function menu() {
    
    const menuSection=document.querySelector('.menu');
    //menuSection.classList.add('cards');
    //for the drinks, I used local names for the drinks, so don't get confused
    const drinksContainer=document.createElement('div');
    drinksContainer.classList.add('drinks-container','cards');
    const tej=document.createElement('article');
    const tella=document.createElement('article');
    const kineto=document.createElement('article');
    const areke=document.createElement('article');
    const coffee=document.createElement('article');

    //for the titles
    const drinksTitleContainer=document.createElement('div');
    drinksTitleContainer.classList.add('drinks-title-container','cards');
    const drinksTitle=document.createElement('h2');
    drinksTitle.textContent='Drinks';
    drinksTitleContainer.appendChild(drinksTitle);

    const foodTitleContainer=document.createElement('div');
    foodTitleContainer.classList.add('food-title-container','cards');
    const foodTitle=document.createElement('h2');
    foodTitle.classList.add('food-title');
    foodTitle.textContent='Main Dishes';
    foodTitleContainer.appendChild(foodTitle);
    

    //for the tej
    const tejImg= new Image();
    tejImg.src=tejImage;
    tej.appendChild(tejImg);
    const tejDetail=document.createElement('div');
    tejDetail.classList.add('tej-detail');
    const tejName=document.createElement('h4');
    const tejDes=document.createElement('p');
    tejName.textContent='Tej (Tedj)';
    tejDes.textContent='Tej is a honey wine, like mead, that is brewed and consumed in Ethiopia and Eritrea. It has an alcohol content generally ranging from 7 to 11%.';
    tejDetail.appendChild(tejName);
    tejDetail.appendChild(tejDes);
    tej.appendChild(tejDetail);

    //for the tella
    const tellaImg= new Image();
    tellaImg.src=tellaImage;
    tella.appendChild(tellaImg);
    const tellaDetail=document.createElement('div');
    tellaDetail.classList.add('tella-detail');
    const tellaName=document.createElement('h4');
    const tellaDes=document.createElement('p');
    tellaName.textContent='Tella (Talla)';
    tellaDes.textContent='Tella is a traditional beer from Ethiopia. It is brewed from various grains, typically teff and sorghum. Depending on region, barley, wheat, or maize may be used; spices can also be added.';
    tellaDetail.appendChild(tellaName);
    tellaDetail.appendChild(tellaDes);
    tella.appendChild(tellaDetail);

    //for the kineto
    const kinetoImg= new Image();
    kinetoImg.src=kinetoImage;
    kineto.appendChild(kinetoImg);
    const kinetoDetail=document.createElement('div');
    kinetoDetail.classList.add('kineto-detail');
    const kinetoName=document.createElement('h4');
    const kinetoDes=document.createElement('p');
    kinetoName.textContent='Kineto';
    kinetoDes.textContent='Keribo ( Keneto) is a non-alcoholic cultural beverage of Ethiopia. This drink is well known among non-alcohol drink users  such as Islamic religion  and protestant religion followers. This beverage is made from roasted barley, sugar and water and like Tella and Tej it is served in special occasions.';
    kinetoDetail.appendChild(kinetoName);
    kinetoDetail.appendChild(kinetoDes);
    kineto.appendChild(kinetoDetail);

    //for the areke
    const arekeImg= new Image();
    arekeImg.src=arekeImage;
    areke.appendChild(arekeImg);
    const arekeDetail=document.createElement('div');
    arekeDetail.classList.add('areke-detail');
    const arekeName=document.createElement('h4');
    const arekeDes=document.createElement('p');
    arekeName.textContent='Areke';
    arekeDes.textContent='Areke is a colorless distilled alcoholic beverage from fermentation products prepared in the same way as tella. There are different types of Areke in Ethiopia. Gibto and Kosso are among them.';
    arekeDetail.appendChild(arekeName);
    arekeDetail.appendChild(arekeDes);
    areke.appendChild(arekeDetail);

    //for the coffee
    const coffeeImg= new Image();
    coffeeImg.src=coffeeImage;
    coffee.appendChild(coffeeImg);
    const coffeeDetail=document.createElement('div');
    coffeeDetail.classList.add('coffee-detail');
    const coffeeName=document.createElement('h4');
    const coffeeDes=document.createElement('p');
    coffeeName.textContent='Coffee (Buna)';
    coffeeDes.textContent='Coffee from Ethiopia is known for its bright fruited and floral flavors. These coffees typically have a higher acidity, light to medium body and complex flavor notes. The beans are either washed or naturally processed. These beans are characterized by their flavor clarity, showcasing bright, complex notes.';
    coffeeDetail.appendChild(coffeeName);
    coffeeDetail.appendChild(coffeeDes);
    coffee.appendChild(coffeeDetail);


    //for the food, I used local names for the drinks, so don't get confused
    const foodContainer=document.createElement('div');
    foodContainer.classList.add('food-container','cards');
    const injera=document.createElement('article');
    const doro=document.createElement('article');
    const tibs=document.createElement('article');
    const firfir=document.createElement('article');
    const shiro=document.createElement('article');
    const kitfo=document.createElement('article');
    const beyaynet=document.createElement('article');

    //for the injera
    const injeraImg= new Image();
    injeraImg.src=injeraImage;
    injera.appendChild(injeraImg);
    const injeraDetail=document.createElement('div');
    injeraDetail.classList.add('injera-detail');
    const injeraName=document.createElement('h4');
    const injeraDes=document.createElement('p');
    injeraName.textContent='Injera';
    injeraDes.textContent='Injera is a sour fermented flatbread with a slightly spongy texture, traditionally made of teff flour. In Ethiopian cuisine injera is the staple; also eaten in other countries in the Horn of Africa, injera is central to the dining process, like bread or rice elsewhere.';
    injeraDetail.appendChild(injeraName);
    injeraDetail.appendChild(injeraDes);
    injera.appendChild(injeraDetail);
    injera.classList.add('card', 'injera');
    foodContainer.appendChild(injera);

     //for the doro wat
    const doroImg= new Image();
    doroImg.src=doroImage;
    doro.appendChild(doroImg);
    const doroDetail=document.createElement('div');
    doroDetail.classList.add('doro-detail');
    const doroName=document.createElement('h4');
    const doroDes=document.createElement('p');
    doroName.textContent='Doro Wat';
    doroDes.textContent='Wat is a spicy, heavy and flavorful Ethiopian curry. Doro wat or chicken curry is known as the national dish of Ethiopia, and it is found on every Ethiopian food menu. Doro wat is also the star of the show during Ethiopian festivals. Families get together on Genna or  and break their 40-day fast by feasting on a massive dish of doro wat akin to the turkey in the western world.';
    doroDetail.appendChild(doroName);
    doroDetail.appendChild(doroDes);
    doro.appendChild(doroDetail);
    doro.classList.add('card', 'doro');
    foodContainer.appendChild(doro);
    
    
    //for the tibs
    const tibsImg= new Image();
    tibsImg.src=tibsImage;
    tibs.appendChild(tibsImg);
    const tibsDetail=document.createElement('div');
    tibsDetail.classList.add('tibs-detail');
    const tibsName=document.createElement('h4');
    const tibsDes=document.createElement('p');
    tibsName.textContent='Tibs';
    tibsDes.textContent='This popular Ethiopian dish is a sizzling dish of sautéed meat and vegetables. It is usually served on a hot plate, and fried with some onions and oil. Tibs is meant to be one component of a larger Ethiopian meal, served with braised cabbage, carrots and potatoes.';
    tibsDetail.appendChild(tibsName);
    tibsDetail.appendChild(tibsDes);
    tibs.appendChild(tibsDetail);
    tibs.classList.add('card', 'tibs');
    foodContainer.appendChild(tibs);

    //for the firfir
    const firfirImg= new Image();
    firfirImg.src=firfirImage;
    firfir.appendChild(firfirImg);
    const firfirDetail=document.createElement('div');
    firfirDetail.classList.add('firfir-detail');
    const firfirName=document.createElement('h4');
    const firfirDes=document.createElement('p');
    firfirName.textContent='FirFir';
    firfirDes.textContent='Typically served for breakfast, Firfir is a spicy, tangy dish that gives you plenty of energy you need for the day. It is generally made with shredded injera, spiced clarified butter (called niter kibbeh in Amharic), and spicy berbere powder. Unlike most Ethiopian dishes, firfir is usually eaten with a spoon.';
    firfirDetail.appendChild(firfirName);
    firfirDetail.appendChild(firfirDes);
    firfir.appendChild(firfirDetail);
    firfir.classList.add('card', 'firfir');
    foodContainer.appendChild(firfir);

    //for the shiro
    const shiroImg= new Image();
    shiroImg.src=shiroImage;
    shiro.appendChild(shiroImg);
    const shiroDetail=document.createElement('div');
    shiroDetail.classList.add('firfir-detail');
    const shiroName=document.createElement('h4');
    const shiroDes=document.createElement('p');
    shiroName.textContent='Shiro';
    shiroDes.textContent='Shiro is one of the best Ethiopian dishes for vegetarians and vegans. It is also one of my favorite Ethiopian foods, because of how flavorful and spicy it is. It is also commonly eaten during Lent, Ramadan and other fasting seasons.';
    shiroDetail.appendChild(shiroName);
    shiroDetail.appendChild(shiroDes);
    shiro.appendChild(shiroDetail);
    shiro.classList.add('card', 'shiro');
    foodContainer.appendChild(shiro);

    //for the kitfo
    const kitfoImg= new Image();
    kitfoImg.src=kitfoImage;
    kitfo.appendChild(kitfoImg);
    const kitfoDetail=document.createElement('div');
    kitfoDetail.classList.add('kitfo-detail');
    const kitfoName=document.createElement('h4');
    const kitfoDes=document.createElement('p');
    kitfoName.textContent='Kitfo';
    kitfoDes.textContent='Kitfo is made of minced raw beef marinated in mitmita (a chili powder-based spice blend) and niter kibbeh (a clarified butter infused with herbs and spices). The name ‘kitfo’ comes from the Ethio-Semitic root k-t-f, meaning “to chop finely”.';
    kitfoDetail.appendChild(kitfoName);
    kitfoDetail.appendChild(kitfoDes);
    kitfo.appendChild(kitfoDetail);
    kitfo.classList.add('card', 'kitfo');
    foodContainer.appendChild(kitfo);

    //for the beyaynet
    const beyaynetImg= new Image();
    beyaynetImg.src=beyaynetImage;
    beyaynet.appendChild(beyaynetImg);
    const beyaynetDetail=document.createElement('div');
    beyaynetDetail.classList.add('beyaynet-detail');
    const beyaynetName=document.createElement('h4');
    const beyaynetDes=document.createElement('p');
    beyaynetName.textContent='Beyaynet';
    beyaynetDes.textContent='Traditional Ethiopian food is perfect for so many diets is that there’s always a “fasting” (or animal-free) option. Most Ethiopian Orthodox Christians traditionally eat vegan on Wednesdays and Fridays, as well as other special days. During this time, fasting food or beyaynet (a collection of meat-free dishes) are available in every restaurant.Some dishes regularly found on Bayenetus include gomen  (collard green with spices), aterkik alitcha (yellow pea stew) and atkilt wat (cabbage, carrots, potatoes in sauce).';
    beyaynetDetail.appendChild(beyaynetName);
    beyaynetDetail.appendChild(beyaynetDes);
    beyaynet.appendChild(beyaynetDetail);
    beyaynet.classList.add('card', 'beyaynet');
    foodContainer.appendChild(beyaynet);
    
    
    tej.classList.add('card','tej');
    tella.classList.add('card','tella');
    kineto.classList.add('card','kineto');
    areke.classList.add('card','areke');
    coffee.classList.add('card','coffee');
    
    drinksContainer.appendChild(tej);
    drinksContainer.appendChild(tella);
    drinksContainer.appendChild(kineto);
    drinksContainer.appendChild(areke);
    drinksContainer.appendChild(coffee);
    menuSection.appendChild(drinksTitleContainer);
    menuSection.appendChild(drinksContainer);
    menuSection.appendChild(foodTitleContainer);
    menuSection.appendChild(foodContainer);
    const footer= document.createElement('footer');
    footer.classList.add('cards');
    const footerText=document.createElement('p');
    footerText.textContent='\u00A92021 Author: Ababu Alemu';
    const link=document.createElement('a');
    link.href='https://github.com/ababuu';
    link.textContent=' Github';
    footerText.appendChild(link);
    footer.appendChild(footerText);
    menuSection.appendChild(footer);
    return menuSection;
}