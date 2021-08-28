import imageHome1 from './homeImage-1.jpg';
import imageHome2 from './homeImage-2.jpg';

export function home() {
    
    const homeSection=document.querySelector('.home');
    const h1=document.createElement('h1');
    const para=document.createElement('p');
    h1.textContent='Traditional Ethiopian Food: A Guide to the Best Ethiopian Dishes';
    para.textContent=`What I did here is a little different than most of the solutions I've seen so far, instead of making this site about a particular restaurant I made it be a,since I am Ethiopian, crash course on traditional Ethiopian food, here are some of the best Ethiopian dishes and where to eat in Ethiopia.
    In Ethiopia, it is easy to find rich, flavorful curries and a diverse selection of foods almost everywhere you go — whether in simple rural villages or restaurants in the big cities. Food in Ethiopia is exciting and different. There is never a dull moment when it comes to Ethiopian food. With strong, spicy flavors and rich stews, Ethiopian traditional food definitely ranks as one of the best cuisines in the world.`
    const homeImage1=new Image();
    homeImage1.src=imageHome1;
    const howToTitle=document.createElement('h2');
    howToTitle.textContent='A Guide to Traditional Ethiopian Food';
    const howToIntro=document.createElement('h3');
    howToIntro.textContent='How to Eat Ethiopian Food';
    const howTo=document.createElement('p');
    howTo.textContent='The first rule of thumb when eating in Ethiopia is to use your hands! Eating with your hands is a standard practice in Ethiopia, not just in locals’ home but also in diners and restaurants. Don’t be afraid to get your hands dirty and just dig in, the way locals do. Also, eating Ethiopian food is a social experience: everyone gathers around the table and digs into a communal platter that is shared with each other. Ethiopian cultural food is eaten with friends and family. Another Ethiopian eating custom includes feeding one another food with our hands, as an act of friendship and love. When eating with friends or family, tear off a strip of injera, wrap it around some meat or curry, and then put it into your friend’s mouth. This is called gursha — the larger the gursha, the stronger the friendship or bond.'
    const homeImage2=new Image();
    homeImage2.src=imageHome2;
    homeSection.classList.add('cards');
    homeSection.appendChild(h1);
    homeSection.appendChild(para);
    homeSection.appendChild(homeImage1);
    homeSection.appendChild(howToTitle);
    homeSection.appendChild(howToIntro);
    homeSection.appendChild(howTo);
    homeSection.appendChild(homeImage2);
    const footer= document.createElement('footer');
    footer.classList.add('cards');
    const footerText=document.createElement('p');
    footerText.textContent='\u00A92021 Author: Ababu Alemu';
    const link=document.createElement('a');
    link.href='https://github.com/ababuu';
    link.textContent=' Github';
    footerText.appendChild(link);
    footer.appendChild(footerText);
    homeSection.appendChild(footer);
    return homeSection;
}