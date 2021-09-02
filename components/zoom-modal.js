import { useEffect } from "react"

export default function ZoomModal({ zoomRef, imageSrc }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="modal-close">X</span>
                <div ref={zoomRef} className="modal-body">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </div>
    )
}