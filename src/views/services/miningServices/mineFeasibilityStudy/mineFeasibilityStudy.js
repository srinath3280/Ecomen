import React from 'react';
import './mineFeasibilityStudy.css';

const MineFeasibility = () => {
    return (
        <div>
            <section className='mineFeasibilityStudy'>
                <div className='mineFeasibilityStudy-heading'>
                    <h1>Mine Feasibility Study</h1>
                </div>
                <div className='mineFeasibilityStudy-content'>
                    <div className='mineFeasibilityStudy-content-left'>
                        <img src='/images/services/miningServices/mine-feasibility-study.jpg' alt='' />
                    </div>
                    <div className='mineFeasibilityStudy-content-right'>
                        <p>
                            Feasibility studies are required for every mining project to justify continued investment in the subsequent phases. These studies reflect the increasing level of technical and economic knowledge gained at earlier stages. The first evaluation of the property occurs well before the scoping study and form the basis of a decision to commence exploration. This involves likely costs and revenues for conceptual targets, or sometimes examine the economics of discovering and developing a similar ore body to one that was mined in the past. The procedure sets minimum targets for grade and tonnage against which the progress of exploration can be measured. If the initial drill intercepts give some indication of the potential tonnage and grade, a scoping study is carried out to justify further exploration.
                        </p>
                        <p>
                            Exploration including preliminary metallurgical assessment, geotechnical investigations and so on will continue until sufficient data has been gathered to permit a pre-feasibility study to be carried out.
                        </p>
                    </div>
                </div>
            </section>

            <section className='mineFeasibilityStudy-text'>
                <div>
                    <p>
                        The results of the pre-feasibility study are used to justify expenditure needed to carry out the final feasibility study on a substantial project. The final feasibility study provides a basis for a commitment to proceed with project development, detailed design and construction which is seen by corporate decision makers.
                    </p>
                </div>
            </section>

            {/* STUDY */}
            <section className='mineFeasibilityStudy-study'>
                <div className='mineFeasibilityStudy-study-heading'>
                    <p>The feasibility study involves</p>
                </div>
                <div className='mineFeasibilityStudy-study-list'>
                    <ul>
                        <li>
                            Mine design based on a resource model
                        </li>
                        <li>
                            Cost estimates based on factored or comparative prices
                        </li>
                        <li>
                            Bench scale metallurgical tests and preliminary process design completed
                        </li>
                        <li>
                            Best alternative selected from a range of alternatives
                        </li>
                        <li>
                            Ore Reserve estimate
                        </li>
                        <li>
                            Preliminary studies completed on geotechnical, environmental, and infrastructure requirements
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='mineFeasibilityStudy-buttons'>
                <div>
                    <a href='/mining-services'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default MineFeasibility