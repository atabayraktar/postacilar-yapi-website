import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { useApp } from '../context/AppContext';

export default function ProjectsCountUp() {
    const { t } = useApp();
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
                <div style={{ minHeight: 100 }}>
                    {isVisible ? <>
                        <div className="w-100">
                            <div className="container count-up">
                                <div className="count-up-item">
                                    <img src="/count-up/etap.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={8} />
                                        <p className="count-up-number-title">{t('counter.projects')}</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/m2.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={75256} />
                                        <p className="count-up-number-title">{t('counter.sqm')}</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/daire.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={200} />
                                        <p className="count-up-number-title">{t('counter.apartments')}</p>
                                    </div>                            </div>
                                <div className="count-up-item">
                                    <img src="/count-up/kullanici.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={718} />
                                        <p className="count-up-number-title">{t('counter.users')}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </> :
                        <div className="w-100">
                            <div className="container count-up">
                                <div className="count-up-item">
                                    <img src="/count-up/etap.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">{t('counter.projects')}</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/m2.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">{t('counter.sqm')}</p>
                                    </div>
                                </div>
                                <div className="count-up-item">
                                    <img src="/count-up/daire.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">{t('counter.apartments')}</p>
                                    </div>                            </div>
                                <div className="count-up-item">
                                    <img src="/count-up/kullanici.webp" width="64" height="64" alt="" />
                                    <div className="count-up-number">
                                        <CountUp className="count-up-number-value" start={0} delay={0.5} duration={5} end={0} />
                                        <p className="count-up-number-title">{t('counter.users')}</p>
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