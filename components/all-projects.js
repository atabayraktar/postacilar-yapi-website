import { useRouter } from 'next/router'
import Link from 'next/link'

export default function AllProjects() {

    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="desktop-components">
                    <div className="component-container-last-item">
                        <div className="about-us-title">
                            Projelerimiz
                        </div>
                        <div className="rowe">
                            <div className="img-container-main-project fadding-photo">
                                <img src="/1.jpg" />
                            </div>
                            <div className="img-container-projects-top">
                                <div className="fadding-photo">
                                    <Link href="/postacilar-nova">
                                        <img src="/nova/nova_slide_1.jpg" />
                                    </Link>
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <img onClick={() => router.push("/postacilar-prestige")} src="/prestige/prestige_slide_2.JPG" />
                                </div>
                            </div>
                        </div>
                        <div className="rowe">
                            <div className=" img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-yakamoz")} src="/yakamoz1.jpg" />
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-idil")} src="/idil1.jpg" />
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-nilufer")} src="/nilufer3.jpg" />
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-nilufer")} src="/nilufer3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-components">
                    <div className="component-container-last-item">
                        <div className="about-us-title">
                            Projelerimiz
                        </div>
                        <div className="img-container fadding-photo">
                            <img src="/1.jpg" />
                        </div>
                        <div className="row">
                            <div className="col-6 img-container-main-project fadding-photo">
                                <img onClick={() => router.push("/postacilar-nova")} src="/nova/nova_slide_1.jpg" />
                            </div>
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-prestige")} src="/prestige/prestige_slide_2.JPG" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-yakamoz")} src="/yakamoz1.jpg" />
                            </div>
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-idil")} src="/idil1.jpg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-nilufer")} src="/nilufer3.jpg" />
                            </div>
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-nilufer")} src="/nilufer3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}