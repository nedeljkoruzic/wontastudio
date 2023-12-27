import React from 'react'
import { Link } from 'react-router-dom';
import './GraphicDesign.css'
import TextSpan from './TextSpan';
import grupa9 from '../slike/Group 9.webp'

function WebDevelopment() {
  const coding = "coding".split("");
  const wbst = "website".split("");
  const ecom = "e-commerce".split("");
  const android = "android".split("");
  const ios = "and ios app".split("");
  const wordpress = "wordpress".split("");
  return (
    <div>
      {coding.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
      <div className='animated2'>
      {wbst.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
      <h3 className='pitanjegd'>The Foundation of Your Digital Presence</h3>
      <p className='tekstgd'>Website development through coding is the creative and technical process of 
creating web pages through programming and coding. It's a crucial component
of any successful digital presence as it provides the means for your message, 
products, and services to be accessible to a global audience 24/7. 
At Wonta Studio, we see website coding as an art, not just a technical
task, and we want to explain why it's so important and why we're the best 
choice for your project.</p>
<h3 className='pitanjegd'>What Is Website Development through Coding?</h3>
<p className='tekstgd'>Website development through coding involves writing HTML, CSS, 
JavaScript, and other programming code to create a functional and 
aesthetically appealing website. This includes designing the layout of
pages, interactive elements, optimizing for mobile devices, and all 
other technical aspects that make the site usable and attractive.</p>
<h3 className='pitanjegd'>Why Is Website Development through Coding 
Important?</h3>
<p className='tekstgd'>Professional Look and Functionality: Properly coded websites provide
a professional look and functionality. It's the first thing visitors notice 
and a key to gaining trust.
Adaptability and Scalability: Well-coded websites can easily adapt to
your needs and grow with your business. This allows you to remain 
competitive and relevant in the market.
SEO Optimization: Coding plays a crucial role in SEO optimization. 
High-quality code can improve search engine rankings and attract 
more organic traffic.</p>
<h3 className='pitanjegd'>Why Are We the Best for Website Development 
through Coding?</h3>
<p className='tekstgd'>Expertise: Our team of programmers and designers has years of
experience in creating high-quality websites. We understand the 
latest technologies and trends.
Customized Approach: We approach each project individually. 
We talk to you to understand your needs and goals and create a 
website that reflects them.
Quality and Security: Quality code and security are our priorities. 
We ensure your site is reliable and protected from potential threats.
Creativity: Our agency is known for creativity. Your website will 
be unique and reflect your unique vision.</p>
<p className='tekstgd'>Website development through coding is the key to success on the internet. 
Wonta Studio will help you create a website that is not only functional 
but also aesthetically appealing, customized to your needs, and optimized for
high online visibility. Contact us to create a digital presence that will set you 
apart and bring success.</p>
<div className='desno'>
{ecom.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Coding for E-commerce</h3>
<p className='tekstgd'>Every e-commerce store represents a digital marketplace that never sleeps, 
and proper coding of your e-commerce website is crucial for its success and
competitive edge. At Wonta Studio, we understand the profound 
importance of quality coding for e-commerce and want to explain why it 
matters and why we are the right choice for your project.</p>
<h3 className='pitanjegd'>Why Is Coding for E-commerce Important?</h3>
<p className='tekstgd'>Functionality: Properly coded websites are a fundamental prerequisite for
functionality. Your customers expect fast page loading, easy navigation, 
and secure shopping.
User Experience (UX): Good code enables an excellent user experience. 
Intuitive interfaces and fast pages make shopping more enjoyable 
and increase the conversion rate.
SEO Optimization: Properly coded websites lay the foundation for 
SEO optimization. This means better search engine rankings, 
more organic traffic, and greater online visibility.
Scalability: E-commerce businesses often grow and evolve. 
Good code allows for scalability, enabling you to easily add new 
products and features as your company expands.</p>
<h3 className='pitanjegd'>Why Are We the Best for E-commerce 
Website Coding?</h3>
<p className='tekstgd'>Coding an e-commerce website is the foundation of your digital 
presence and something that should not be overlooked. 
Wonta Studio enables you to build a website that is reliable, 
functional, and SEO-optimized, so you can succeed in online sales 
and stay ahead of the competition. Contact us to create an 
e-commerce site that will launch you to the top.</p>
<img className='grupaslike' alt='trigrupeslike' src={grupa9}></img>
<div>
{android.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='animated2'>
{ios.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Creating Mobile Solutions Empowering Your Vision</h3>
<p className='tekstgd'>Android and iOS applications are an integral part of our lives today. They provide 
users with access to information, services, and entertainment at their fingertips. 
However, for an application to be successful and useful, it is crucial that it is 
properly coded and designed. At Wonta Studio, we understand the profound 
importance of quality mobile app development and want to explain why it 
matters and why we are the right choice for your app.</p>
<h3 className='pitanjegd'>Why Is It Important for Coding to Be Good for 
Applications?</h3>
<p className='tekstgd'>Performance: Good code ensures that the application runs quickly and
efficiently, improving the user experience.
Stability: High-quality code reduces errors and app crashes, making it 
reliable and functional.
Security: Applications often handle sensitive data. Good coding 
ensures that this data is kept secure.
Adaptability: Mobile devices and operating systems are constantly 
being updated. Good code allows for easy adaptation to new 
requirements.</p>
<h3 className='pitanjegd'>Why Are We the Best for Developing Android and iOS 
Applications?</h3>
<p className='tekstgd'>Developing Android and iOS applications requires careful analysis, 
creativity, and technical expertise. Wonta Studio will help you create
a mobile application that is not only functional but also aesthetically 
appealing, tailored to your needs and goals. Contact us to 
collaboratively develop a mobile solution that empowers your vision.</p>
<div className='desno'>
{wordpress.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Affordable Development for Online Success</h3>
<p className='tekstgd'>WordPress is a platform that dominates the world of web development due to its
flexibility, affordability, and powerful tools it offers for creating various types of 
websites. At Wonta Studio, we understand the profound importance of proper 
WordPress website development and want to explain why they are an excellent 
choice for your online presence and why we are the right option for their 
creation.</p>
<h3 className='pitanjegd'>What Is a WordPress Website?</h3>
<p className='tekstgd'>WordPress is a popular website building platform that allows the creation 
of dynamic, attractive, and functional websites. Its significant advantage
is that it enables users to manage content without the need for deep 
technical knowledge while providing numerous options for 
customization and adding functionality through plugins and themes.</p>
<h3 className='pitanjegd'>Advantages of WordPress Websites</h3>
<p className='tekstgd'>Affordable Development: Creating WordPress websites is often more
cost-effective compared to building a custom site from scratch, 
resulting in savings in your online presence budget.
Flexibility: WordPress offers limitless possibilities for customizing your 
site. You can use it for a blog, personal presentation, online store, 
portfolio, or even a forum.
SEO-Friendly: WordPress is known for its SEO-friendly structure that 
helps with better search engine rankings, attracting more visitors.
Easy Content Management: It allows you to easily add, edit, and delete 
content on the site without the need for technical expertise.</p>
<h3 className='pitanjegd'>Why Are We the Best for WordPress Website 
Development?</h3>
<p className='tekstgd'>Experience: Our team has years of experience in developing 
WordPress websites for various industries and target audiences. 
We know how to maximize the potential of this platform.
Customized Approach: We approach each WordPress website 
individually. We talk to you, understand your needs and goals to 
create a site that reflects them.
Design and Functionality: Our designers and developers work together 
to achieve the perfect blend of aesthetics and functionality.
Support and Maintenance: It doesn't end with website creation. We 
monitor and maintain your site to ensure it runs flawlessly.</p>
<p className='tekstgd'>Creating a WordPress website is a fast and economical way to establish 
your online presence. Wonta Studio will help you create a WordPress site 
that reflects your unique vision and achieves online success. Contact us to 
collaboratively create an online presence that sets you apart.</p>
<div className='donjidugmici'>
      <Link to='/Contact' className='dvadugmetadonjalevo'>ORDER</Link>
      <Link to='/Contact' className='dvadugmetadonja'>COOPERATION</Link>
</div>
    </div>
  )
}

export default WebDevelopment
