import React, { useState } from 'react';
import './groupVocational.css';
import GroupVocationalTrainingCarousel from './groupVocationalCarousel/groupVocationalCarousel';

const GroupVocationalTraining = () => {

    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    return (
        <div>
            {/* Group Vocational Training Centre */}
            <section className='groupVocational'>
                <div className='groupVocational-heading'>
                    <h1>Group Vocational Training Centre</h1>
                </div>
                <div className='groupVocational-content'>
                    <div className='groupVocational-content-left'>
                        <img src='/images/trainingServices/groupVocationalTraining/GVTC-Inside-Image-1536x1229.png' alt='' />
                    </div>
                    <div className='groupVocational-content-right'>
                        <p>
                            ECOMEN GVTC aims to skill, reskill and upskill resources in QUARRIES/MINES and associated sectors. The GVTC aims to reduce injuries, illnesses and fatalities amongst miners through our well-designed and expert-curated programmes on safety and several other much-needed topics.
                        </p>
                        <p>
                            Our range of courses include and are not limited to Operational Training for all roles such as Drilling/Excavator operators, Blasters, Explosive Handlers, Dumper/Tipper operators, Electricians, Supervisors etc. Health and Safety Training, Simulator Programmes, Digital Literacy, Soft Skills, Health and Wellness, Customized Programmes and Bridging Programmes.
                        </p>
                    </div>

                </div>
            </section>
            <section className='groupVocational-videogroup'>
                <div className='groupVocational-videos'>
                    <div className='groupVocational-videos-left'>
                        <div className="video-placeholder">
                            {!isPlaying ? (
                                <div className="video-thumbnail" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/XHOmBV4js_E/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgSihZMA8=&rs=AOn4CLAKon4sxfNDIm_ZspVaOAFRkyqVhQ)' }}>
                                    <div className="play-button" onClick={handlePlay}>

                                    </div>
                                    <div className="video-title">Choose your video</div>
                                </div>
                            ) : (
                                <div className="video-player">
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
                    <div className='groupVocational-videos-right'>
                        <div className="video-placeholder">
                            {!isPlaying ? (
                                <div className="video-thumbnail" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/XHOmBV4js_E/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgSihZMA8=&rs=AOn4CLAKon4sxfNDIm_ZspVaOAFRkyqVhQ)' }}>
                                    <div className="play-button" onClick={handlePlay}>

                                    </div>
                                    <div className="video-title">Choose your video</div>
                                </div>
                            ) : (
                                <div className="video-player">
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
            <section className='groupVocational-carousel'>
                <div>
                    <GroupVocationalTrainingCarousel></GroupVocationalTrainingCarousel>
                </div>
            </section>
        </div>
    )
}

export default GroupVocationalTraining
