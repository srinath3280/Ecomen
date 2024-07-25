import React, { useState } from 'react';
import './researchTraining.css';
import ResearchTrainingCarousel from './researchTrainingCarousel/researchTrainingCarousel';

const ResearchTraining = () => {

    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    return (
        <div>
            {/* Research and Training Centre */}
            <section className='researchTraining'>
                <div className='researchTraining-heading'>
                    <h1>Research and Training Centre</h1>
                </div>
                <div className='researchTraining-content'>
                    <div className='researchTraining-content-left'>
                        <img src='/images/trainingServices/researchTraining/Research-and-TC-Inside-1536x1229.png' alt='' />
                    </div>
                    <div className='researchTraining-content-right'>
                        <p>
                            ECOMEN Research and Training Centre aims to bring together Industry Experts, Policy Makers, Mining Executives etc. and create a forum for much-needed knowledge sharing in areas of Governance, Laws, Amendments, Policies and other related matters. These sessions provide key takeaways for participants that can be utilized to maximize productivity, remove bottlenecks in processes and increase efficiency of work. As part of this, the ECOMEN team also focuses on digitization and other innovative interventions for mines, quarries and associated sectors.
                        </p>
                    </div>
                </div>
            </section>
            <section className='researchTraining-videogroup'>
                <div className='researchTraining-videos'>
                    <div className='researchTraining-videos-left'>
                        <div className="researchTraining-video-placeholder">
                            {!isPlaying ? (
                                <div className="researchTraining-video-thumbnail" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/XHOmBV4js_E/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgSihZMA8=&rs=AOn4CLAKon4sxfNDIm_ZspVaOAFRkyqVhQ)' }}>
                                    <div className="researchTraining-play-button" onClick={handlePlay}>

                                    </div>
                                    <div className="researchTraining-video-title">Choose your video</div>
                                </div>
                            ) : (
                                <div className="researchTraining-video-player">
                                    <iframe
                                        src="https://www.youtube.com/embed/XHOmBV4js_E"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='researchTraining-videos-right'>
                        <div className="researchTraining-video-placeholder">
                            {!isPlaying ? (
                                <div className="researchTraining-video-thumbnail" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/XHOmBV4js_E/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgSihZMA8=&rs=AOn4CLAKon4sxfNDIm_ZspVaOAFRkyqVhQ)' }}>
                                    <div className="researchTraining-play-button" onClick={handlePlay}>

                                    </div>
                                    <div className="researchTraining-video-title">Choose your video</div>
                                </div>
                            ) : (
                                <div className="researchTraining-video-player">
                                    <iframe
                                        src="https://www.youtube.com/embed/XHOmBV4js_E"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className='researchTraining-carousel'>
                <div>
                    <ResearchTrainingCarousel></ResearchTrainingCarousel>
                </div>
            </section>
        </div>
    )
}

export default ResearchTraining
