import { useState, useEffect } from 'react';

export default function ZoomModal({ imageSrc, images, startIndex = 0, onClose, zoomRef, size = "" }) {
    const imgList = images && images.length > 0 ? images : (imageSrc ? [imageSrc] : []);
    const [idx, setIdx] = useState(startIndex);

    useEffect(() => { setIdx(startIndex); }, [startIndex]);

    const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + imgList.length) % imgList.length); };
    const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % imgList.length); };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + imgList.length) % imgList.length);
            if (e.key === 'ArrowRight') setIdx(i => (i + 1) % imgList.length);
            if (e.key === 'Escape' && onClose) onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [imgList.length, onClose]);

    if (!imgList.length) return null;

    return (
        <div className={`modal ${size}`} onClick={onClose}>
            <div ref={zoomRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
                {onClose && (
                    <button className="modal-close" onClick={onClose}>✕</button>
                )}
                <div className="modal-body">
                    {imgList.length > 1 && (
                        <button className="modal-nav modal-nav-prev" onClick={prev}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                        </button>
                    )}
                    <img src={imgList[idx]} alt="" />
                    {imgList.length > 1 && (
                        <button className="modal-nav modal-nav-next" onClick={next}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                        </button>
                    )}
                </div>
                {imgList.length > 1 && (
                    <div className="modal-counter">{idx + 1} / {imgList.length}</div>
                )}
            </div>
        </div>
    );
}
