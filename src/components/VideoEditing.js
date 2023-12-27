import React from 'react'
import { Link } from 'react-router-dom';
import './GraphicDesign.css'
import TextSpan from './TextSpan';
import CetiriVidea2 from './CetiriVidea2'
function VideoEditing() {
  const youtube = "youtube".split("");
  const socialmedia = "social media".split("");
  const ecommerce = "E-commerce".split("");
  const animated = "2d & 3d".split("");
  const animated2 = "animated".split("");

  return (
    <div>
      {youtube.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
      <h3 className='pitanjegd'>Your Key to Online Success</h3>
      <p className='tekstgd'>In a world dominated by video content, YouTube has become one of the most 
powerful platforms for spreading messages, expressing creativity, and building 
a brand. Creating high-quality and engaging YouTube videos is crucial for 
success on this platform. At Wonta Studio, we understand the profound 
importance of quality video content and want to explain why our YouTube 
video creation services are indispensable.</p>
<h3 className='pitanjegd'>Why Good and Quality YouTube Videos Matter?</h3>
<p className='tekstgd'>Audience Attraction: Quality videos grab attention and keep the audience 
engaged for longer, increasing views and engagement.
Better Brand Identity: Good videos help define and strengthen your 
brand, making it recognizable and positively rated.
SEO Advantage: YouTube is the second-largest search engine in the 
world. Quality videos rank better on YouTube and Google searches, 
increasing your visibility.
Monetization: If your goal is to earn on the YouTube platform, quality 
content is key to attracting sponsorships and advertisers.</p>
<h3 className='pitanjegd'>Why Are We the Best for YouTube Video 
Creation?</h3>
<p className='tekstgd'>We work with you to create YouTube video content that highlights
your unique story, message, or products. Whether you want to educate, 
entertain, or promote, Wonta Studio will help you achieve your 
goals on the YouTube platform. Contact us to embark on a journey 
to success on this powerful network together.</p>
<div className='desno'>
{socialmedia.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Your Story, Our Creation</h3>
<p className='tekstgd'>Social media has become the epicenter of the digital world, and videos have 
become the primary conveyors of information and entertainment on these 
platforms. At Wonta Studio, we understand the profound importance of 
high-quality videos for capturing the audience's attention and building an 
online presence. We want to explain why our social media video creation 
services are indispensable.</p>
<h3 className='pitanjegd'>Why Good and Quality Social Media Videos 
Matter?</h3>
<p className='tekstgd'>Audience Engagement: Videos are the most effective way to capture 
and retain attention on social media. High-quality videos leave a deeper 
impression and increase audience engagement.
Message Dissemination: Videos allow you to convey your message or 
story quickly and efficiently. They are often shared and spread 
across social media platforms.
Branding: Quality videos help build and strengthen your brand, 
making it recognizable and positively rated.
Increased Conversions: Well-crafted videos can increase conversion
rates and turn viewers into customers or service users.</p>
<h3 className='pitanjegd'>Why Are We the Best for Creating 
Social Media Videos?</h3>
<p className='tekstgd'>Experience: Our team has extensive experience in creating various 
types of videos for different social media platforms.
Customized Approach: We talk to you to understand your goals, 
target audience, and desired message to create customized videos.
Creativity: Our agency prides itself on a creative approach and original 
ideas for video content.
Technical Equipment: We have the latest technical equipment and 
post-production software to create high-quality videos.</p>
<p className='tekstgd'>Your story is unique, and we are here to convey it in an efficient and 
engaging way. Whether you want to inform, entertain, or inspire, 
Wonta Studio will help you create videos that stand out on 
social media. Contact us to start creating stories that will leave 
a lasting impression on your audience.</p>
<CetiriVidea2/>
{ecommerce.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
<h3 className='pitanjegd'>Bringing Your Online Store to Life</h3>
<p className='tekstgd'>E-commerce has become a pivotal component of the modern retail landscape, 
and videos have become a valuable tool for attracting and retaining customers. 
At Wonta Studio, we understand the profound importance of high-quality
e-commerce videos for grabbing attention, increasing sales, and building trust 
with consumers. We want to explain why our e-commerce video creation 
services are crucial for your online business.</p>
<h3 className='pitanjegd'>Why High-Quality E-commerce Videos Matter?</h3>
<p className='tekstgd'>Visual Product Familiarity: Videos allow customers to better understand
a product, its features, and its use.
Build Trust: Quality videos provide added credibility to the product and 
brand, which increases customer trust.
Boost Conversions: Videos assist in converting views into purchases. 
Customers feel more confident and informed, leading to a higher 
conversion rate.
SEO Advantage: E-commerce videos enhance the SEO ranking of 
your store, increasing visibility on search engines.</p>
<h3 className='pitanjegd'>Why We Are the Right Choice for 
E-commerce Video Production?</h3>
<p className='tekstgd'>Experience: Our team has rich experience in creating e-commerce 
videos for various types of products and industries.
Customized Approach: We talk to you to deeply understand your 
products, goals, and target audience to create customized videos.
Creativity: Our agency is known for its creative approach and original
ideas for e-commerce video content.
Technical Equipment: We have the latest technical equipment and 
post-production software to create high-quality clips.</p>
<p className='tekstgd'>E-commerce videos are crucial for successful online businesses. 
Wonta Studio will help you create video content that highlights 
your products in the market, increases sales, and builds a loyal customer 
base. Contact us to bring your online store to life together.</p>
<div className='desno'>
{animated.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='animated'>
{animated2.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Transforming Your Stories into Visual Wonders</h3>
<p className='tekstgd'>The world of animation offers endless possibilities for conveying stories, ideas 
and concepts in a form that leaves a profound impression on the audience. 
At Wonta Studio, we understand the profound importance of high-quality 
2D and 3D animated video clips for informing, educating, entertaining, 
and branding. We want to explain why our services for creating these clips 
are invaluable and how we can turn your stories into visual marvels.</p>
<h3 className='pitanjegd'>Why High-Quality 2D and 3D Animated 
Video Clips Matter?</h3>
<p className='tekstgd'>Visual Appeal: Animated clips capture the audience's attention with their 
unique aesthetics and creative design.
Clarity and Comprehension: Animation can clearly convey complex 
concepts and ideas in a simple and enjoyable way, making it easier for 
the audience to understand.
Uniqueness: Animation allows you to stand out and differentiate 
yourself in the competitive market, creating recognizable and 
original content.
Global Relevance: Regardless of language and culture, animation 
has global appeal, which is especially useful for brands looking to 
reach a broader audience.</p>
<h3 className='pitanjegd'>Why We Are the Best for Creating 
2D and 3D Animated Video Clips?</h3>
<p className='tekstgd'>2D and 3D animated video clips are a means that allows you to tell 
your stories in the most captivating way. Wonta Studio will help 
you turn your stories into visual wonders that will leave a deep
impression on the audience. Contact us to transform your ideas into 
animated realities together.</p>
<div className='donjidugmici'>
      <Link to='/Contact' className='dvadugmetadonjalevo'>ORDER</Link>
      <Link to='/Contact' className='dvadugmetadonja'>COOPERATION</Link>
</div>
    </div>
  )
}

export default VideoEditing
