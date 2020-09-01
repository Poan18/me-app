import React from 'react'
import qtpie from '../assets/images/qtpieQuote.jpg';

export default function Navigation() {
    return (
        <div className="home">
            <h1>Om mig</h1>

            <p>Mitt namn är Pontus Andersson, när jag föddes var det storm och vind som härjade runtomkring Karlskrona. Vägarna var blockerade av stora träd som stoppade trafiken från att rulla som vanligt. Detta resulterade till att jag tillkom som en ren överranskning till alla släktingar som hade inte möjlighet till att ta emot ett samtal. Jag brukar höra att när jag föddes, uppstod ett så kallat "Ronja rövadotter väder".</p><br />

            <p>Jag föddes i Karlskrona och växte upp vid ett litet område norr om Rödeby vid namn Bergtorp(f.d Rumpetorp). Under grundskolan gick jag på Strömsbergs skola som nu är en friskola, efter en stor strid om att behålla skolan efter att Karlskronas kommun hade beslutat att de skulle lägga ner den. Skolan stödjer dock bara upp tills årskurs 6. Mellan årskurs 6-9 gick jag vid Rödebyskolan. Vid Gymnasiet gick jag Teknik med inriktning Media- och informationsteknik på Ehrenvärdska gymnasiet. Efter det började jag studera Webbprogrammering vid Blekinges Tekniska Högskola hösten år 2018.</p><br />

            <img src={qtpie} alt="If you don't know what the fuck you are doing, how are your enemies supposed to know what the fuck you are doing?" />
        </div>
    )
}
