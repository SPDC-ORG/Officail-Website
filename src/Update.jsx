import React from 'react';

function Update() {
  const updates = [
    {
      id: 1,
      category: 'Job Posting',
      title: 'We are hiring a Software Engineer!',
      description: 'Join our team and contribute to innovative projects. Apply now!',
      date: 'December 15, 2023',
    },
    {
      id: 2,
      category: 'Product Update',
      title: 'New Version of Our App Released',
      description: 'Introducing exciting new features and enhancements. Update now!',
      date: 'December 10, 2023',
    },
    {
      id: 3,
      category: 'Company News',
      title: 'Expanding Our Operations',
      description: 'Announcing our plans to open new offices in multiple locations.',
      date: 'December 5, 2023',
    },
    // Add more updates as needed
  ];

  return (
    <div className="container mx-auto my-8 p-10">
      <h1 className="text-3xl text-gray-800 mb-6">Latest Updates</h1>
      <div className="grid gap-6">
        {updates.map((update) => (
          <div key={update.id} className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{update.category}</h2>
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{update.title}</h3>
            <p className="text-gray-600 mb-4">{update.description}</p>
            <p className="text-sm text-gray-500">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Update;
