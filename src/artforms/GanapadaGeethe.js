
import Assistant from '../components/Assistant'
export default function  GanapadaGeethe(argument) {
	return (<>

  <Assistant/>
 <div className="container" id="history-content">
        <div className="row mb-4 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="lc-block text-center">
                    <img className="img-fluid w-100" src="data:image/jpeg;base64,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" srcSet="" sizes="" width="" height=""/>
                </div>
            </div>
            <div className="col-lg-6 p-lg-6">
                <div className="lc-block mb-5">
                    <div editable="rich">

                        <h2 className="display-6 fw-bold">JAANAPADA GEETHE</h2>

                        <p className="lead"><br/>Jaanapada is a word made by two words Jana - People or tribe Pada - a kind of short verse joined as a sandhi- a grammatical term. The folk culture and colloquial tongue of Kannadiga and probably Telugu people were known by this name from time the languages came into existence.
                            
                        </p>
                    </div>
                </div>
                
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            <p>The art of composing verses was natural when people were deeply involved in their works commonly related to agriculture, pottery, harvest, flouring grains.

                                There were also compositions on rituals which were laid on common man when caste system was on peak to oppose the atrocities and understand the traditions.
                                
                                Normally the Jangama or wandering monks or the Dasa or wandering devotee who used to hold a tamboori - an instrument to add muse the verses, used to travel places spreading the knowledge they had acquired and used to receive alms from people known as Bhavathi Bhiksha Dehi which does not find a right word in contemporary English.
                                
                                Apart from these the folk dance arts added colour to expressions rather than words and were popular at mass gatherings.</p>
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-4 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
                <div className="lc-block text-center">
                    <img className="img-fluid w-200" src="https://gostops.com/blog/wp-content/uploads/2017/07/folk-music-1.jpg" srcSet="" sizes="" width="" height=""/>

                </div>
            </div>
            <div className="col-lg-6 p-lg-6">
                <div className="lc-block mb-5">
                    <div editable="rich">

                        
                    </div>
                </div>
                
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                           <p className="intro">Janapada Tradition has generally described as the expressions of the illiterate. it represents the uninhibited response of the uneducated and unsophisticated sections of the Karnataka to life experiences in a variety of forms. Janapada tradition represents Kannadiga desire to communicate his/her experiences of joy and sorrow and share it with others. This motivation as such is the same as that of proper Kannada Literature. Karnataka Janapada tradition finds expression not in the form of writing but in the form of the spoken word or song(Janapada Geethe) which is transmitted and perpetuated by oral tradition. Another distinguishing characteristic Karnataka Janapada tradition is that whatever the themes or the experience, it expression is simple, direct and vivid, unembellished by artifice or ornament, and if occasionally figures of speech make their appearances, they appear as sparkle and freshness of live speech that directly but picturesquely express whatever is felt or thought. Janapada Literature reflects the life of kannadigas as it is lived from day to day.

                            </p>

                      <p className="intro"> Karnataka Janapada Folk Tradition even though includes every aspect of Kannadiga life can be broadly classified into three main heads.</p>
                            
                      <p>  1. Folk Literature</p>
                        
                      <p>   2. Janapadageethe, songs expressive of the common joys and sorrows of the common people. All can be subdivided according to subject matters of the occasion or purpose the different forms intended to serve.</p>
                        
                        <p> 3. Folk Theater, Poetry intended to celebrate the greatness of chosen deities and ballads dramatizing the heroism or sacrifice of chosen heroes, historical or legendary</p>
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                            
                        </div>

                       
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



		</>)
}