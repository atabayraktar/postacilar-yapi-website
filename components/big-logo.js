export default function BigLogo() {
    return (
        <>
            <div className="big-logo">
                <video src="/postacilar-hero-video.mp4" className="big-logo-bg" autoPlay muted loop playsInline />
                <div className="logo">
                    <img src="/logo.webp" alt="Postacılar Yapı logosu" fetchpriority="high" width="2588" height="464" />
                </div>
            </div>
        </>
    )
}
