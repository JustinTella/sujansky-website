function MapEmbed() {
  return (
    <div className="w-full h-full min-h-[300px] overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps?q=Ulrike%20Sujansky%2C%20MD%2C%20San%20Mateo%2C%20CA&z=12&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ulrike Sujansky, MD - Google Maps location"
      />
    </div>
  );
}

export default MapEmbed;
