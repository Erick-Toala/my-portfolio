
import { useState, useEffect } from "react";

export default function PhotoGallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const total = images.length;

  // Abrir lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const showNext = () => setCurrentIndex((currentIndex + 1) % total);
  const showPrev = () =>
    setCurrentIndex((currentIndex - 1 + total) % total);

  // Cerrar con Escape o flechas
  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, currentIndex]);

  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      {/* --- Galería principal --- */}
      {total === 1 && (
        <img
          src={images[0]}
          alt="gallery"
          className="w-full h-96 object-cover hover:opacity-70 cursor-pointer"
          onClick={() => openLightbox(0)}
        />
      )}

      {total === 2 && (
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`gallery-${idx}`}
              className="w-full h-96 object-cover hover:opacity-70 cursor-pointer"
              onClick={() => openLightbox(idx)}
            />
          ))}
        </div>
      )}

      {total >= 3 && (
        <div className="grid grid-cols-2 gap-1">
          <img
            src={images[0]}
            alt="gallery-main"
            className="w-full h-[388px] object-cover hover:opacity-70 cursor-pointer"
            onClick={() => openLightbox(0)}
          />
          <div className="grid grid-rows-2 gap-1">
            <img
              src={images[1]}
              alt="gallery-1"
              className="w-full h-48 object-cover hover:opacity-70 cursor-pointer"
              onClick={() => openLightbox(1)}
            />
            <div className="relative">
              <img
                src={images[2]}
                alt="gallery-2"
                className="w-full h-48 object-cover hover:opacity-70 cursor-pointer"
                onClick={() => openLightbox(2)}
              />
              {total > 3 && (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold hover:cursor-pointer"
                  onClick={() => openLightbox(2)}
                >
                  +{total - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- Modal Lightbox --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-6 text-white text-4xl font-bold hover:cursor-pointer z-[60]"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <img
            src={images[currentIndex]}
            alt="lightbox"
            className="max-h-[70%] max-w-[90%] rounded-lg shadow-lg mb-4"
          />

          <div className="flex w-full justify-between px-8 md:px-16 md:absolute md:inset-y-0 md:items-center md:justify-between md:w-full md:mb-0 pointer-events-none">
            <button
              className="pointer-events-auto text-white text-3xl md:text-5xl font-bold md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 hover:cursor-pointer"
              onClick={showPrev}
            >
              &lt;
            </button>

            <button
              className="pointer-events-auto text-white text-3xl md:text-5xl font-bold md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 hover:cursor-pointer"
              onClick={showNext}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
