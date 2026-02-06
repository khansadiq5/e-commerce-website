import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam similique a maiores fuga quo et voluptas aliquid quas, aspernatur magni eos nihil, atque cumque qui, temporibus minus sed placeat.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam distinctio cum voluptatibus nesciunt nobis esse, dolorum officia assumenda rem dolor quisquam maxime veniam fuga laudantium non debitis facere ea nemo!</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sint quasi ullam assumenda? Est, laudantium eaque et explicabo asperiores maxime natus ratione! Nihil consequatur minima maiores magni exercitationem, ea beatae!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque labore deserunt temporibus, sapiente unde provident? Similique nihil veniam magni soluta esse nesciunt eius, illum quis architecto voluptates suscipit ratione.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque labore deserunt temporibus, sapiente unde provident? Similique nihil veniam magni soluta esse nesciunt eius, illum quis architecto voluptates suscipit ratione.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque labore deserunt temporibus, sapiente unde provident? Similique nihil veniam magni soluta esse nesciunt eius, illum quis architecto voluptates suscipit ratione.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
