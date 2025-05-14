import React from 'react';

const PolicyPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-16 text-gray-700 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">Privacy Policy</h1>

      <section>
        <p>
          We value the trust you place in us and recognize the importance of secure transactions and
          information privacy. This Privacy Policy describes how Myntra Designs Private Limited and
          its affiliates (collectively "Myntra, we, our, us") collect, use, share, protect or otherwise
          process your personal data through Myntra website.
        </p>
        <p>
          While you may be able to browse certain sections of the Platform without registering with us,
          however, please note we do not offer any product/service under this Platform outside India
          and your personal data will primarily be stored and processed in India. By visiting this Platform,
          providing your information or availing any product/service offered on the Platform, you expressly
          agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the
          applicable service/product terms and conditions, and agree to be governed by the laws of India
          including but not limited to the laws applicable to data protection and privacy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-4">Collection</h2>
        <p>
          We collect your personal data when you use our Platform, services, or interact with us.
          This includes identity details like name, birth date, contact info, and sensitive data like payment
          details and biometric info when needed. We also gather behavioral data such as browsing
          history, preferences, and interactions on our platform to enhance user experience.
        </p>
        <p>
          This information helps us provide safer, more efficient services, conduct research, and customize
          your experience. You can browse the Platform anonymously, but to access full features,
          registration and personal data may be required. We track user behavior for analytics, and we
          may collect additional information if you participate in loyalty programs or post messages,
          images, or reviews.
        </p>
        <p>
          If you contact us or are contacted by others about your Platform activity, this data may also be
          recorded. We urge caution in sharing personal content in public areas of the Platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-4">Use</h2>
        <p>
          Your data is used to deliver requested services, manage orders, improve user experience,
          resolve disputes, detect fraud, and inform you about relevant offers. We may use your contact
          info to communicate offers and updates. With consent, we may access device features like
          SMS, contacts, camera, and location to enable advanced platform functionalities.
        </p>
        <p>
          We also analyze user activity for marketing research and to tailor content to your preferences.
          Occasionally, we may invite you to participate in surveys which could involve demographic,
          voice, or video data. These are voluntary and aim to improve our services and offerings.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;
