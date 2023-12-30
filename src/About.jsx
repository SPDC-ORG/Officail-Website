import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our World</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-800 mb-6">
              Here at OurCompany, we're passionate about creating innovative solutions and providing top-notch services to our customers.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Our journey started with a vision to revolutionize the industry and cater to the evolving needs of our clients.
              We believe in making a difference and striving for excellence in everything we do.
            </p>
            <p className="text-lg text-gray-800">
              Sustainability is at the core of our values. We're dedicated to reducing our environmental impact and contributing to a better world.
              Our commitment to sustainability drives us to constantly seek eco-friendly practices and solutions.
            </p>
          </div>
          <div>
            <img src="Images/Second Logo (1) (1).png" alt="About Us" className="rounded-lg w-44" />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our mission is to empower individuals and businesses by providing innovative and sustainable solutions that enhance their lives and contribute positively to society.
            We are committed to delivering exceptional products and services while fostering a culture of creativity and growth.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-800 mb-6">
            <li>Excellence: Striving for the highest quality in everything we do.</li>
            <li>Innovation: Constantly seeking new and better ways to create impact.</li>
            <li>Sustainability: Committed to environmental responsibility and ethical practices.</li>
            <li>Customer Satisfaction: Ensuring our customers' needs are met and exceeded.</li>
          </ul>
          <p className="text-lg text-gray-800">
            Join us in our journey towards a brighter and sustainable future!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
