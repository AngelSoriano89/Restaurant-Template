"use client";

export function Map() {
  const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || 
    "URL_MAPA_DE_TU_EMPRENDIMIENTO_AQUI";

  return (
    <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="${SITE_CONFIG.name} Location"
      />
    </div>
  );
}
