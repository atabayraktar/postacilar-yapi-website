import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { useState } from 'react'
export default function ProjectsCountUp() {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
                <div style={{ minHeight: 100 }}>
                    {isVisible ? <>
                        <div className="w-100" style={{ backgroundColor: "#212529", margin: "50px 0px 0px 0px" }}>
                            <div className="container count-up">
                                <div className="count-up-item">
                                    <img src="/count-up/etap.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={7} />
                                        <p className="count-up-number-title">PROJE</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/m2.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={67824} />
                                        <p className="count-up-number-title">METREKARE</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/daire.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={156} />
                                        <p className="count-up-number-title">DAİRE</p>
                                    </div>                            </div>
                                <div className="count-up-item">
                                    <img src="/count-up/kullanici.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={592} />
                                        <p className="count-up-number-title">KULLANICI</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </> :
                        <div className="w-100" style={{ backgroundColor: "#212529", margin: "50px 0px 0px 0px" }}>
                            <div className="container count-up">
                                <div className="count-up-item">
                                    <img src="/count-up/etap.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">Proje</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/m2.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">METREKARE</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/daire.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">DAİRE</p>
                                    </div>                            </div>
                                <div className="count-up-item">
                                    <img src="/count-up/kullanici.png" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">Kullanıcı</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    }
                </div>
            )
            }
        </VisibilitySensor >
    )
}