import React from 'react';
import Title from '../components/Title';

const DeliveryPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-16 text-gray-700 space-y-8 border-t">
      <div className="text-center mb-10">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Shipping & Delivery</h2>
        <p className="mb-4">
          At Forever, we strive to deliver your orders as quickly and efficiently as possible. Our standard delivery times and processes are outlined below.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Domestic Delivery</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard Delivery: 3-5 business days</li>
            <li>Express Delivery: 1-2 business days (additional charges apply)</li>
            <li>Same Day Delivery: Available in select cities for orders placed before 12 PM</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-medium mb-3">International Delivery</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard International: 7-14 business days</li>
            <li>Express International: 3-7 business days (additional charges apply)</li>
            <li>Please note that international orders may be subject to customs duties and taxes</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Shipping Costs</h2>
        <p className="mb-4">
          Our shipping costs are calculated based on the delivery location, weight of the package, and the shipping method selected.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Delivery Type</th>
                <th className="py-3 px-4 text-left">Cost</th>
                <th className="py-3 px-4 text-left">Free Shipping Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4">Standard Domestic</td>
                <td className="py-3 px-4">$5.99</td>
                <td className="py-3 px-4">Orders above $50</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Express Domestic</td>
                <td className="py-3 px-4">$12.99</td>
                <td className="py-3 px-4">Orders above $100</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Same Day</td>
                <td className="py-3 px-4">$15.99</td>
                <td className="py-3 px-4">Orders above $150</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Standard International</td>
                <td className="py-3 px-4">$19.99</td>
                <td className="py-3 px-4">Orders above $200</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Express International</td>
                <td className="py-3 px-4">$29.99</td>
                <td className="py-3 px-4">Orders above $300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
        <p className="mb-4">
          Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order's status through:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Your account on our website under "My Orders"</li>
          <li>The tracking link provided in your shipping confirmation email</li>
          <li>Our customer service center</li>
        </ul>
        <p>
          For any issues with tracking or if you need assistance, please contact our customer support team at support@forever.com or call +1 (800) 123-4567.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Delivery FAQ</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">What happens if I'm not home when my package arrives?</h3>
            <p className="text-gray-600">
              For standard deliveries, the courier will attempt to leave your package in a safe place or with a neighbor. If that's not possible, they will leave a note with instructions for rescheduling or pickup.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Can I change my delivery address after placing an order?</h3>
            <p className="text-gray-600">
              Address changes may be possible if the order hasn't been processed yet. Please contact customer service immediately if you need to change your delivery address.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Do you deliver on weekends?</h3>
            <p className="text-gray-600">
              Standard deliveries are typically made Monday through Friday. Weekend deliveries may be available in select areas for Express and Same Day shipping options.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">What if my package is damaged or missing items?</h3>
            <p className="text-gray-600">
              Please contact our customer service team within 48 hours of receiving your order. We'll need photos of any damaged packaging or products to process your claim.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-medium mb-3">Need More Help?</h3>
        <p className="mb-4">Our customer service team is available to assist you with any delivery questions or concerns.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:support@forever.com" className="inline-block bg-gray-800 text-white px-5 py-2 rounded text-center hover:bg-gray-700 transition">
            Email Support
          </a>
          <a href="tel:+18001234567" className="inline-block border border-gray-800 text-gray-800 px-5 py-2 rounded text-center hover:bg-gray-50 transition">
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;