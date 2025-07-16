import React, { useEffect, useState } from 'react';
import './Listing.css';
import { Bed, Bath, MapPin } from 'lucide-react';

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Bhoomi-csai/public-datasets/main/explore.json')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching properties:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="listing-page"><p>Loading listings...</p></div>;
  }

  return (
    <div className="listing-page">
      <h2>Explore Homes on Dwello</h2>
      <div className="listing-grid">
        {properties.map((property) => (
          <a
            key={property.id || Math.random()}
            className="listing-card"
            href={property.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={property.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={property.title || property.location || 'Property'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
              }}
            />
            <div className="info">
              <div className="top-row">
                <h3>{property.title || 'Beautiful Stay'}</h3>
                <p className="price">${property.price?.toLocaleString() || 'N/A'}</p>
              </div>
              <div className="location-link">
                <MapPin size={14} />
                <span>{property.location || 'Unknown Location'}</span>
              </div>
              <div className="details">
                <span><Bed size={14} /> {property.bedrooms ?? 'N/A'} Beds</span>
                <span><Bath size={14} /> {property.bathrooms ?? 'N/A'} Baths</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Listing;