export default function ZoomModal({ zoomRef, imageSrc,verticalImage }) {
    return (
        <div className={`modal ${verticalImage?'modal-35':''}`}>
            <div className="modal-content">
                <div ref={zoomRef} className="modal-body">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </div>
    )
}