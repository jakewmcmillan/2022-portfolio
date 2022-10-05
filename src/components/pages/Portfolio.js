import React from 'react';

import moodyGamer from '../assets/moody-gamer.png';
import theBlackBook from '../assets/the-black-book.png';
import yugen from '../assets/yugen.png';

export default function Portfolio() {
    return (
        <div class="portfolio">
            <div class="m-5">
                <h1>Portfolio:</h1>
                    <section class="box1">
                        <h3 className="text-center">Moody Gamer</h3>
                        <a href="https://jakewmcmillan.github.io/moody-gamer/"><img className="img-fluid" src={moodyGamer} alt="Moody Gamer Homepage"/></a>
                    </section>
                    <section class="box2">
                        <h3 className="text-center">TheBlackBook</h3>
                        <a href="https://floating-refuge-15851.herokuapp.com/"><img className="img-fluid" src={theBlackBook} alt="TheBlackBook Homepage"/></a>
                    </section>
                    <section class="box3">
                        <h3 className="text-center">Yūgen</h3>
                        <a href="https://peaceful-everglades-19601.herokuapp.com/login"><img className="img-fluid" src={yugen} alt="Yūgen Homepage"/></a>
                    </section>
            </div>
        </div>
    );
}