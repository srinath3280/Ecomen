import React from 'react';
import './reclamationAfforestation.css';

const ReclamationAfforestation = () => {
    return (
        <div>
            <section className='reclamationAfforestation'>
                <div className='reclamationAfforestation-heading'>
                    <h1>Reclamation & Afforestation</h1>
                </div>
                <div className='reclamationAfforestation-content'>
                    <div className='reclamationAfforestation-content-left'>
                        <img src='/images/services/forestServices/Reforestation.jpg' alt='' />
                    </div>
                    <div className='reclamationAfforestation-content-right'>
                        <p>
                            The Indian government has announced an ambitious plan to produce 1 billion tons of coal production by 2023-24. In order to meet this target, massive expansion of opencast mines is envisaged. About 80% of India’s coal reserves lie in the central Indian landscape and much of it is under forests. Destruction of forests is inevitable for open-cast mining. Along with deforestation, direct and indirect mining activities change the landscape surrounding the mine.
                        </p>
                        <p>
                            Direct activities include removal of the topsoil, followed by excavation of overburden and then coal extraction. <br />
                            Indirect activities include the tree felling for constructing roads, houses and other infrastructure, thus increasing the anthropogenic impact on the surrounding landscape.
                            <br />
                            In an era of rapidly advancing climate change, reducing deforestation and undertaking critical reforestation efforts has become a key goal of governments.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='reclamationAfforestation-study'>
                <div className='reclamationAfforestation-study-heading'>
                    <p>
                        A two-step process for land reclamation
                    </p>
                </div>
                <div className='reclamationAfforestation-study-list'>
                    <ul>
                        <li>
                            <strong>Physical reclamation</strong> involves bringing the excavated land back to its original state, by backfilling the overburden (OB) material in the de-coaled voids.
                        </li>
                        <li>
                            <strong>Biological Reclamation</strong> when we revive the filled-up land by afforestation.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='reclamationAfforestation-buttons'>
                <div>
                    <a href='/forest-services'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default ReclamationAfforestation