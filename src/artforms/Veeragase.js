import {useState,useEffect} from 'react';
export default function Veeragase(argument) {
var temp;
        const [text,settext]=useState([]);
      useEffect(()=>{
    const content=document.getElementsByClassName("artform-content");

   temp=[];
    for(let item  of content)
        temp.push(item.textContent);
  
    settext(temp);
    
}


    ,[]
    );
    
      const changelanguage=async()=>
      {
       var  result=await   fetch(`https://api.mymemory.translated.net/get?q=${text[0]}&langpair=en|kn`)
     
       console.log(await result.json());

      }
      changelanguage();
	
	return (<>
        
		<div class="container">
    <div class="row mb-4 align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="lc-block text-center">
                <img class="img-fluid w-100" src="https://anahad.ngo/wp-content/uploads/2019/08/DSC03654.jpg" />
            </div>
        </div>
        <div class="col-lg-6 p-lg-6">
            <div class="lc-block mb-5">
                <div editable="rich">
                    <h2 class="display-6 fw-bold">VEERAGAASE</h2>
                    <p class="lead artform-content"><br/>Veeragase/Guggla is a dance form prevalent in the state of Karnataka, India. It is a vigorous dance based on Hindu mythology and involves very intense energy-sapping dance movements performed by Jangama. Veeragase is one of the dances demonstrated in the Dasara procession held in Mysore. This dance is performed during festivals and mainly in the Hindu months of Shravana and Karthika. It is performed at all important functions of Veerashaiva Lingayat household the veeragase artist's are called as puravanta in village side.
                    </p>
                </div>
            </div>
            <div class="lc-block">
                <div class="d-inline-flex">
                    <div>
                       
                    </div>
                    <div class="ms-3 align-self-center" editable="rich">
                        <p className="artform-content">Veerashaivism and Veeragaase/Guggla The basic tenets of Guggla are drawn from Veeragama (One of the 28 key Shaiva Agamas) and usually Veeragaase performers during their acts will convey some stories from the main six Shaiva puranas like Shiva/Linga/Skanda/Agni/Matsya/Kurma - Puranas, and some Kannada Veerashaiva puranas like Girija Kalyana/Prabhulingaleele/Basava purana/Chennabasaveshwara charite...etc. Most popularly conveyed story is of Daksha-yajna. The custom of bringing Devagange (Gange taruvud - ಗಂಗೆ ತರುವುದು/Devaru taruvudu - ದೇವರು ತರುವುದು) into homes from nearby water-sources (usually from wells) is a tradition in veerashaivaLingayat household for every important functions held (like Marriage, House-warming, Naming, Lingadhaarana ...etc.), some Vokkaligas in Karnataka also perform this custom - in this custom Veerabhadra is taken to please mother Ganga, Veeragaase is performed while bringing her home - in Veeraagama Ganga is considered to be the mother of Veerabhadra as he was sprouted out of Shiva's hairs and Ganga has taken residence on Shiva's head.</p>
                    </div>
                </div>
            </div>
            <div class="lc-block">
                <div class="d-inline-flex">
                    <div>
                        
                    </div>
                    <div class="ms-3 align-self-center" editable="rich">
                     
                    </div>
                </div>
            </div>
            <div class="lc-block">
                <div class="d-inline-flex">
                    <div>
                       
                    </div>
                    <div class="ms-3 align-self-center" editable="rich">
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-4 align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0 order-lg-1">
            <div class="lc-block text-center">
                <img class="img-fluid w-200" src="https://www.caleidoscope.in/wp-content/uploads/2021/03/Art-Forms-of-Karnataka-01.jpg"/>
            </div>
        </div>
        <div class="col-lg-6 p-lg-6">
            <div class="lc-block mb-5">
                <div editable="rich">
                   
                </div>
            </div>
            <div class="lc-block">
                <div class="d-inline-flex">
                    <div>
                        
                    </div>
                    <div class="ms-3 align-self-center" editable="rich">
                       
                      
                        <p class="intro">Performers Veeragase is to be performed only by the Jangama also called Maheshwaras - clan of Veerashaiva/Lingayat community. The performers of Veeragase are also called Lingadevaru.The dancers put on a white traditional headgear and a bright red coloured dress. They also adorn themselves with a necklace made of Rudraksha beads, a hip-belt called rudra muke, an ornament resembling a snake and worn around the neck called Nagabharana and anklets. The dancers smear vibhooti on their foreheads, ears, and eyebrows. They carry a wooden plaque of Lord Veerabhadra in their left hand and a sword in their right hand. Female artists do not traditionally perform this art, but females have started to be a part of stage performance of non-religious nature which merely as a folk dance .[citation needed] Performance The dance troop usually consists of two, four, or six members. A lead singer in the troupe narrates the story of Daksha yajna as the dance is being performed. A huge decorative pole called Nandikolu which has an orange flag at the top is held by one of the dancers. Traditional percussion instruments called sambal and dimmu lend music to the dance. Cymbals and shehnai and other instruments like karadi and chamala are also used. The dance also involves a ritualistic piercing of a needle across the mouth.</p>
                    </div>
                </div>
            </div>
          
            </div>
           
    </div>
</div>


		</>)
}