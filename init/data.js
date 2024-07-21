const samplelistings = [
    {
      title: "Cozy Mountain Cabin",
      description: "A charming cabin located in the heart of the mountains.",
      image: "https://unsplash.com/photos/apartment-modern",
      price: 120,
      location: "Aspen, CO",
      country: "USA"
    },
    {
      title: "Modern City Apartment",
      description: "A stylish apartment in the city center.",
      image: "https://unsplash.com/photos/apartment-modern",
      price: 200,
      location: "New York, NY",
      country: "USA"
    },
    {
      title: "Beachfront Villa",
      description: "A luxurious villa with a stunning ocean view.",
      image: "https://unsplash.com/photos/rustic-house",
      price: 450,
      location: "Sydney",
      country: "Australia"
    },
    {
      title: "Rustic Country House",
      description: "A quaint house in the countryside, perfect for a peaceful retreat.",
      image: "https://unsplash.com/photos/rustic-house",
      price: 180,
      location: "Nashville, TN",
      country: "USA"
    },
    {
      title: "Chic Loft",
      description: "An open-plan loft with modern amenities.",
      image: "https://unsplash.com/photos/historic-home",
      price: 300,
      location: "San Francisco, CA",
      country: "USA"
    },
    {
      title: "Historic Home",
      description: "A beautifully preserved historic home with antique furnishings.",
      image: "https://unsplash.com/photos/historic-home",
      price: 250,
      location: "Savannah, GA",
      country: "USA"
    },
    {
      title: "Suburban House",
      description: "A spacious house in a quiet suburban neighborhood.",
      image: "https://unsplash.com/photos/downtown-condo",
      price: 220,
      location: "Austin, TX",
      country: "USA"
    },
    {
      title: "Downtown Condo",
      description: "A modern condo located in the heart of downtown.",
      image: "https://unsplash.com/photos/downtown-condo",
      price: 275,
      location: "Toronto",
      country: "Canada"
    },
    {
      title: "Luxury Penthouse",
      description: "An exquisite penthouse with panoramic city views.",
      image: "https://unsplash.com/photos/countryside-cottage",
      price: 500,
      location: "Miami, FL",
      country: "USA"
    },
    {
      title: "Countryside Cottage",
      description: "A cozy cottage surrounded by lush greenery.",
      image: "https://unsplash.com/photos/countryside-cottage",
      price: 150,
      location: "Burlington, VT",
      country: "USA"
    },
    {
      title: "Eco-Friendly Home",
      description: "A sustainable home with eco-friendly features.",
      image: "https://unsplash.com/photos/urban-studio",
      price: 280,
      location: "Portland, OR",
      country: "USA"
    },
    {
      title: "Urban Studio",
      description: "A compact studio apartment with all the essentials.",
      image: "https://unsplash.com/photos/urban-studio",
      price: 190,
      location: "Seattle, WA",
      country: "USA"
    },
    {
      title: "Lakeside Cabin",
      description: "A tranquil cabin with a picturesque lake view.",
      image: "https://unsplash.com/photos/vintage-bungalow",
      price: 170,
      location: "Lake Tahoe, CA",
      country: "USA"
    },
    {
      title: "Vintage Bungalow",
      description: "A charming bungalow with vintage decor.",
      image: "https://unsplash.com/photos/vintage-bungalow",
      price: 160,
      location: "Charleston, SC",
      country: "USA"
    },
    {
      title: "Seaside Cottage",
      description: "A quaint cottage by the sea, perfect for a relaxing getaway.",
      image: "https://unsplash.com/photos/mountain-retreat",
      price: 210,
      location: "Cape Cod, MA",
      country: "USA"
    },
    {
      title: "Mountain Retreat",
      description: "A serene retreat nestled in the mountains.",
      image: "https://unsplash.com/photos/mountain-retreat",
      price: 230,
      location: "Boulder, CO",
      country: "USA"
    },
    {
      title: "Urban Loft",
      description: "A sleek loft with industrial design elements.",
      image: "https://unsplash.com/photos/coastal-villa",
      price: 260,
      location: "Melbourne",
      country: "Australia"
    },
    {
      title: "Coastal Villa",
      description: "A spacious villa with breathtaking ocean views.",
      image: "https://unsplash.com/photos/coastal-villa",
      price: 470,
      location: "Santa Monica, CA",
      country: "USA"
    },
    {
      title: "Farmhouse",
      description: "A traditional farmhouse with modern comforts.",
      image: "https://unsplash.com/photos/beach-house",
      price: 190,
      location: "Lancaster, PA",
      country: "USA"
    },
    {
      title: "Beach House",
      description: "A stunning house right on the beach.",
      image: "https://unsplash.com/photos/beach-house",
      price: 420,
      location: "Myrtle Beach, SC",
      country: "USA"
    },
    {
      title: "City Center Apartment",
      description: "A convenient apartment located in the city center.",
      image: "https://unsplash.com/photos/lakefront-house",
      price: 240,
      location: "Boston, MA",
      country: "USA"
    },
    {
      title: "Lakefront House",
      description: "A beautiful house with a view of the lake.",
      image: "https://unsplash.com/photos/lakefront-house",
      price: 300,
      location: "Madison, WI",
      country: "USA"
    },
    {
      title: "Luxury Condo",
      description: "A high-end condo with top-notch amenities.",
      image: "https://unsplash.com/photos/mountain-chalet",
      price: 310,
      location: "Dallas, TX",
      country: "USA"
    },
    {
      title: "Mountain Chalet",
      description: "A cozy chalet with stunning mountain views.",
      image: "https://unsplash.com/photos/mountain-chalet",
      price: 210,
      location: "Park City, UT",
      country: "USA"
    },
    {
      title: "Desert Oasis",
      description: "A beautiful home in a serene desert setting.",
      image: "https://unsplash.com/photos/riverfront-cabin",
      price: 220,
      location: "Palm Springs, CA",
      country: "USA"
    },
    {
      title: "Riverfront Cabin",
      description: "A rustic cabin with a view of the river.",
      image: "https://unsplash.com/photos/riverfront-cabin",
      price: 180,
      location: "Spokane, WA",
      country: "USA"
    },
    {
      title: "Contemporary Home",
      description: "A modern home with sleek architecture.",
      image: "https://unsplash.com/photos/tropical-bungalow",
      price: 290,
      location: "Minneapolis, MN",
      country: "USA"
    },
    {
      title: "Tropical Bungalow",
      description: "A charming bungalow in a tropical setting.",
      image: "https://unsplash.com/photos/tropical-bungalow",
      price: 250,
      location: "Key West, FL",
      country: "USA"
    },
    {
      title: "Hilltop Villa",
      description: "A luxurious villa with panoramic hill views.",
      image: "https://unsplash.com/photos/urban-duplex",
      price: 400,
      location: "Los Angeles, CA",
      country: "USA"
    },
    {
      title: "Urban Duplex",
      description: "A modern duplex in an urban setting.",
      image: "https://unsplash.com/photos/urban-duplex",
      price: 310,
      location: "San Diego, CA",
      country: "USA"
    }
];

module.exports = { data : samplelistings };
  