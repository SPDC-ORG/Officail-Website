import React from 'react';

function Opportunities() {
  const jobOffers = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'We are looking for a skilled software engineer with expertise in React.js and Node.js. Contact us at +1-123-456-7890.',
      applyLink: 'https://example.com/apply-software-engineer',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      description: 'Join our creative team and contribute to designing stunning user experiences. Contact us at +1-123-456-7890.',
      applyLink: 'https://example.com/apply-ux-ui-designer',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      description: 'Seeking an experienced marketing manager to lead our marketing strategies. Contact us at +1-123-456-7890.',
      applyLink: 'https://example.com/apply-marketing-manager',
    },
    // Add more job offers as needed
  ];

  return (
    <div className="container mx-auto my-8 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Opportunities</h1>
      <div className="grid grid-cols-1 gap-6">
        {jobOffers.map((job) => (
          <div key={job.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-700 font-semibold">Phone: +1-123-456-7890</span>
                </div>
                <a href={job.applyLink} className="bg-blue-500 text-white py-1 px-4 rounded-md font-semibold hover:bg-blue-600">
                  Apply
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
