import React from 'react';

function Product() {
  const products = [
    {
      id: 1,
      name: 'Our Awesome App',
      icon: 'fab fa-google-play', // Font Awesome class for Google Play
      thumbnail: 'Images/target-app-install-ad.webp', // Replace with your thumbnail URL
      downloadLink: 'https://example.com/app-download-link',
    },
    {
        id: 1,
        name: 'Our Awesome App',
        icon: 'fab fa-google-play', // Font Awesome class for Google Play
        thumbnail: 'Images/STR_Header-image-for-In-App-Advertising-Blog-Post_V1.1.webp', // Replace with your thumbnail URL
        downloadLink: 'https://example.com/app-download-link',
      },
    {
      id: 2,
      name: 'Our Fantastic Software',
      icon: 'fab fa-windows', // Font Awesome class for Windows
      thumbnail: 'Images/theoptimizer.webp', // Replace with your thumbnail URL
      downloadLink: 'https://example.com/software-download-link',
    },
    {
        id: 2,
        name: 'Our Fantastic Software',
        icon: 'fab fa-windows', // Font Awesome class for Windows
        thumbnail: 'Images/63ce9060fc37df522700ae07_stackadapt.png', // Replace with your thumbnail URL
        downloadLink: 'https://example.com/software-download-link',
      },
      {
        id: 2,
        name: 'Our Fantastic Software',
        icon: 'fab fa-windows', // Font Awesome class for Windows
        thumbnail: 'Images/programmatic-advertising.jpg', // Replace with your thumbnail URL
        downloadLink: 'https://example.com/software-download-link',
      },
      {
        id: 2,
        name: 'Our Fantastic Software',
        icon: 'fab fa-windows', // Font Awesome class for Windows
        thumbnail: 'Images/theoptimizer (1).webp', // Replace with your thumbnail URL
        downloadLink: 'https://example.com/software-download-link',
      },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto my-8 p-10">
      <h1 className="text-3xl text-gray-800 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex justify-center items-center bg-gray-800 h-20">
              <i className={product.icon + " text-3xl text-gray-400 mr-2"}></i>
              <h2 className="text-lg font-semibold text-gray-400">{product.name}</h2>
            </div>
            <div className="p-4">
              <img src={product.thumbnail} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <a href={product.downloadLink} className="block bg-green-500 text-white text-center font-semibold py-2 rounded-md transition duration-300 hover:bg-green-600">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
