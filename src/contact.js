import image1 from './landscape-1.jpg';
import image2 from './coff.jpg';
import image3 from './festival.jpg';
import image4 from './fall.jpg';
import image5 from './lucy.jpg';

export function contact() {
    const contactSection=document.querySelector('.contact');
    contactSection.classList.add('cards');
    const contactHeader=document.createElement('h2');
    contactHeader.textContent='10 Reasons Why You Should Visit Ethiopia';
    contactSection.appendChild(contactHeader);
    //number 1
    const numOne=document.createElement('h4'); 
    numOne.textContent='The landscapes are incredibly scenic';
    contactSection.appendChild(numOne);
    const detailOne=document.createElement('p');
    detailOne.textContent='Arid plains, spectacular mountains, lush green areas, and vast lakes define Ethiopia’s scenic landscapes. The country boasts 70% of the mountains on the African continent. Whether you are in the Semien Mountains or the Danakil Depression, every corner of the country offers a view pleasant to the eyes.'
    contactSection.appendChild(detailOne);
    const img1=new Image();
    img1.src=image1;
    contactSection.appendChild(img1);
    //number 2
    const numTwo=document.createElement('h4'); 
    numTwo.textContent='It’s the birthplace of your morning coffee';
    contactSection.appendChild(numTwo);
    const detailTwo=document.createElement('p');
    detailTwo.textContent='Whatever reason inspired you to become a coffee lover, tasting Ethiopian coffee will deepen your bond with the beverage even more. Legend has it that the magical red cherry was first discovered in Ethiopia. The traditional Ethiopian coffee ceremony is beyond having a sip of coffee—it’s a social event where people have conversations and catch up. There’s something cheerful about the ceremony, with the pleasant aroma and scent of frankincense smoke.'
    contactSection.appendChild(detailTwo);
    const img2=new Image();
    img2.src=image2;
    contactSection.appendChild(img2);
    //number 3
    const numThree=document.createElement('h4'); 
    numThree.textContent='There are plenty of beautiful festivals you can enjoy';
    contactSection.appendChild(numThree);
    const detailThree=document.createElement('p');
    detailThree.textContent='What better way to get a glimpse of Ethiopian culture than to join its spectacular festivals? From the religious Timket and Meskel events to the Adwa celebration, Ethiopia has exuberant and colorful festivals that have stood the test of time.';
    contactSection.appendChild(detailThree);
    const img3=new Image();
    img3.src=image3;
    contactSection.appendChild(img3);
    //number 4
    const numFour=document.createElement('h4'); 
    numFour.textContent='Blue Nile Falls – breathtaking waterfall';
    contactSection.appendChild(numFour);
    const detailFour=document.createElement('p');
    detailFour.textContent='Plunging 150 feet, the Blue Nile Falls in North Ethiopia is one of the greatest falls you can see on the African continent. As it drops, the water creates a sort of smoke that creates a hazy environment. This is probably what gave rise to its local name, Tis Abay, translating to “the smoking Blue Nile.” The Blue Nile river is a major tributary of the great Nile river—the longest river in the world.';
    contactSection.appendChild(detailFour);
    const img4=new Image();
    img4.src=image4;
    contactSection.appendChild(img4);
    //number 5
    const numFive=document.createElement('h4'); 
    numFive.textContent='It’s the cradle of humankind';
    contactSection.appendChild(numFive);
    const detailFive=document.createElement('p');
    detailFive.textContent='Lucy, called Dinkenesh in Amharic, is the skeleton of an early human ancestor that was discovered in Ethiopia. A replica of the fossil that’s more than 3.2 million years old, is housed in the country’s National Museum for public visits. Selam, another fossil that was discovered in Dikika, Ethiopia in 2000 further asserted Ethiopia’s status as the origin of mankind. For discoveries related to this, the lower Awash and Omo valleys of the country are paleontological sites registered by UNESCO.';
    contactSection.appendChild(detailFive);
    const img5=new Image();
    img5.src=image5;
    contactSection.appendChild(img5);

    //footer 
    const footer= document.createElement('footer');
    footer.classList.add('cards');
    const footerText=document.createElement('p');
    footerText.textContent='\u00A92021 Author: Ababu Alemu';
    const link=document.createElement('a');
    link.href='https://github.com/ababuu';
    link.textContent=' Github';
    footerText.appendChild(link);
    footer.appendChild(footerText);
    contactSection.appendChild(footer);
    return contactSection;
}