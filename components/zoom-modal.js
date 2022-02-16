export default function ZoomModal({ zoomRef, imageSrc,size="" }) {
    return (
        <div className={`modal ${size}`}>
            <div className="modal-content">
                <div ref={zoomRef} className="modal-body">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </div>
    )
}