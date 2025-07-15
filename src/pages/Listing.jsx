import React from 'react';
import './Listing.css';

const Listing = () => {
  const properties = [
    {
      id: 1,
      location: '789 Pine St, Chicago',
      price: 720000,
      bedrooms: 5,
      bathrooms: 4,
      imageUrl: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg',
    },
    {
      id: 2,
      location: '12 Bay Area, San Francisco',
      price: 980000,
      bedrooms: 4,
      bathrooms: 3,
      imageUrl: 'https://rlp.jumplisting.com/photos/23/87/46/86/23874686_0_med.jpg',
    },
    {
      id: 3,
      location: '63 Sunset Blvd, Miami',
      price: 610000,
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: 'https://thumbs.dreamstime.com/b/old-fixer-upper-house-25068168.jpg',
    },
    {
      id: 4,
      location: '451 Maple Ave, Denver',
      price: 540000,
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: 'https://assets.prevu.com/blogs/images/tips-for-buying-a-fixer-upper-in-dallas/7e076807240380c6e675026af6ea3784?ixlib=rb-4.0.3&w=450&lossless=true&auto=format%20compress&fit=fill&fill=solid&s=3bdf5606cd7f03b2c93c5840e8c9105e',
    },
    {
      id: 5,
      location: '88 Hollywood St, Los Angeles',
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      imageUrl: 'https://ssl.cdn-redfin.com/photo/90/islphoto/997/genIslnoResize.20892997_2.jpg',
    },
    {
        id: 6,
        location: '23 Palm Street, Orlando',
        price: 430000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://source.unsplash.com/featured/?home,orlando',
      },
      {
        id: 7,
        location: '66 Lakeview Dr, Austin',
        price: 780000,
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: 'https://source.unsplash.com/featured/?house,austin',
      },
      {
        id: 8,
        location: '15 Broadway, Boston',
        price: 670000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://source.unsplash.com/featured/?apartment,boston',
      },
      {
        id: 9,
        location: '500 Garden St, Atlanta',
        price: 510000,
        bedrooms: 2,
        bathrooms: 2,
        imageUrl: 'https://source.unsplash.com/featured/?condo,atlanta',
      },
      {
        id: 10,
        location: '9 Ocean View, San Diego',
        price: 890000,
        bedrooms: 5,
        bathrooms: 4,
        imageUrl: 'https://source.unsplash.com/featured/?villa,sandiego',
      },
      {
        id: 11,
        location: '71 Green Park, Portland',
        price: 420000,
        bedrooms: 2,
        bathrooms: 1,
        imageUrl: 'https://source.unsplash.com/featured/?home,portland',
      },
      {
        id: 12,
        location: '33 Sunset Ave, Las Vegas',
        price: 760000,
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: 'https://source.unsplash.com/featured/?luxuryhouse,vegas',
      },
      {
        id: 13,
        location: '1 Meadow Lane, Minneapolis',
        price: 490000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://source.unsplash.com/featured/?house,minneapolis',
      },
      {
        id: 14,
        location: '202 Forest Dr, Salt Lake City',
        price: 530000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://source.unsplash.com/featured/?home,saltlake',
      },
      {
        id: 15,
        location: '84 Ridge Road, Philadelphia',
        price: 610000,
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: 'https://source.unsplash.com/featured/?townhouse,philly',
      }      
  ];

  return (
    <div className="listing-page">
      <h2>Explore More Listings</h2>
      <div className="listing-grid">
        {properties.map(property => (
          <div className="listing-card" key={property.id}>
            <img src={property.imageUrl} alt={property.location} />
            <h3>{property.location}</h3>
            <p>${property.price.toLocaleString()}</p>
            <p>{property.bedrooms} Bed • {property.bathrooms} Bath</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
