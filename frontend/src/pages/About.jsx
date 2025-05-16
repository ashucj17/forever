import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLatterbox from '../components/Newsletter'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="cloths image" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Forever was founded with the goal of transforming online shopping and a love for innovation. Our adventure started with a straightforward concept: to offer a platform that enables consumers to quickly find, examine, and buy a variety of goods from the convenience of their homes.</p>
      <p>We've put a lot of effort into creating a wide range of superior products that suit every taste and preference since our founding. From electronics and household necessities to fashion and cosmetics, we provide a wide range of products that are supplied from reliable manufacturers and vendors.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>At Forever, our goal is to give consumers confidence, convenience, and choice. From browsing and ordering to delivery and beyond, we're committed to giving customers a flawless shopping experience that goes above and beyond.</p>
      </div>

    </div>
    <div
    className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Every product is carefully chosen and examined to make sure it satisfies our exacting standards for quality.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>It has never been simpler to shop thanks to our easy-to-use layout and simple ordering procedure.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Your pleasure is our first priority, and our team of committed specialists is here to help you along the journey.</p>
      </div>
    </div>
    <NewsLatterbox/>
    </div>
  )
}

export default About