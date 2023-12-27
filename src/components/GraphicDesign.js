import React from 'react'
import './GraphicDesign.css'
import { Link } from 'react-router-dom'
import TextSpan from './TextSpan'
import grupa6 from '../slike/Group 6.webp'
import grupa7 from '../slike/Group 7.webp'
function GraphicDesign() {
  const logo = "logo".split("");
  const brand = "brand".split("");
  const identity = "identity".split("");
  const flyer = "flyer".split("");
  const poster = "poster".split("");
  const scl = "social".split("");
  const media = "media".split("");
  const product = "product".split("");
  const design = "design".split("");
  return (
    <div>
       {logo.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
      <h3 className='pitanjegd'>What is a Logo?</h3>
      <p className='tekstgd'>A logo is a visual symbol that represents your brand or organization. 
It is a compact and recognizable graphic or symbol that immediately
associates people with your company. A logo is a key element of 
your brand because it aids in identification, communicates values, 
and creates a first impression.</p>
<h3 className='pitanjegd'>Why Do You Need a Good Logo?</h3>
<p className='tekstgd'>First Impression: Your logo is the first thing people will encounter 
when they get to know your brand. A good logo leaves a positive
impression and captures attention right away.

Recognition: A logo helps you stand out among the competition. 
If it's easily recognizable and memorable, people will remember 
your brand more.
Trust and Professionalism: A good logo signifies the professionalism
 and seriousness of your business. People tend to trust brands with 
high-quality logos.

</p>
<h3 className='pitanjegd'>Why We Are the Best Solution for Your Logo?</h3>
<p className='tekstgd'>When it comes to creating your logo, Wonta Studio is your reliable 
partner. Give us the opportunity to bring your brand to life with a 
unique and effective logo that will set you apart from the crowd.</p>
<img className='grupaslike' src={grupa6} alt='grupaslike6'></img>
<div className='desno'>
{brand.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='animated'>
       {identity.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <h3 className='pitanjegd'>What is Brand Identity?</h3>
<p className='tekstgd'>Brand identity represents the visual and emotional set of elements 
that characterize your brand, making it recognizable and unique. 
This includes all aspects of the brand, including the logo, colors, 
typography, tone of voice, values, mission, and company culture. 
When properly defined, brand identity serves as the foundation for 
building strong customer relationships and creating an authentic brand.</p>
<h3 className='pitanjegd'>Why is Brand Identity Important?</h3>
<p className='tekstgd'>Recognition: One of the most crucial aspects of brand identity is 
creating recognition. When people recognize your logo or other identity
elements, it fosters a connection and trust.
Differentiation: Competition in the market is often fierce.Brand identity
helps you stand out and showcase what makes you unique and why 
customers should choose you.
Customer Loyalty: A strong brand identity builds emotional 
connections with customers. When people feel connected to your 
brand, the likelihood of them becoming loyal customers is higher.
Professionalism and Reliability: A good brand identity suggests 
professionalism and reliability. People will trust a company with a 
well-crafted and consistent identity.
</p>
<h3 className='pitanjegd'>Why We Are the Right Choice for Your Brand Identity?</h3>
<p className='tekstgd'>When it comes to building and managing your brand identity, 
Wonta Studio is the right choice. Give us the opportunity to help your
brand shine and establish a strong presence in the market.</p>
{flyer.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
<h3 className='pitanjegd'>Visual Art for Your Message</h3>
<p className='tekstgd'>Flyers are a powerful tool for communication and promotion, often overlooked
in the digital age. They represent a compact, portable form of advertising that
has the ability to capture attention and convey your message with strength
and efficiency. At Wonta Studio, we understand the art of flyer design
and provide you with the opportunity to express your ideas in a way that
leaves a lasting impression.</p>
<h3 className='pitanjegd'>Why Flyers?</h3>
<p className='tekstgd'>Tangibility and Ease of Sharing: Flyers provide a physical component
to your marketing campaign, making them easy to share and distribute.
People often keep flyers, leaving you with a lasting presence.
Quick and Direct Communication: Flyers offer a fast and direct
way to convey your message to your target audience. They provide
immediate information that people can consume quickly.
Creative Freedom: Flyer design allows you to showcase creativity 
and originality in presenting your brand or product. Through effective
graphics, colors, and text, you can create memorable flyers.
</p>
<h3 className='pitanjegd'>Why We Are the Right Agency for Flyer Design?</h3>
<p className='tekstgd'>At Wonta Studio, we believe that flyers are not just pieces of
paper – they are artistic expressions and marketing tools that allow 
your brand to stand out. Give us the opportunity to design flyers that 
will inspire and engage your target audience, making your message 
unforgettable.</p>
<div className='desno'>
{poster.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Creating Visual Stories that Leave You Breathless</h3>
<p className='tekstgd'>A poster is a powerful means of visual communication with the ability to convey
important messages, capture attention, and leave a deep impression. Whether 
used for marketing purposes, event promotion, or artistic expression, 
posters represent a pinnacle of visual art that demands careful consideration 
and expert design. At Wonta Studio, we understand the power of 
posters and provide top-notch design services to help you express your ideas 
in the best possible way.</p>
<h3 className='pitanjegd'>What Are Posters?</h3>
<p className='tekstgd'>A poster is a visual representation of information or a concept on a large
scale. Typically, it consists of a combination of images, graphics, text, 
and colors with the aim of attracting attention and communicating a 
message to the target audience. Posters can come in various 
dimensions and serve various purposes, including advertising, event 
promotion, education, and artistic expression.</p>
<h3 className='pitanjegd'>Why We Are the Best for Poster Design?</h3>
<p className='tekstgd'>At Wonta Studio, we believe that posters are not just printed pieces
of paper—they are works of art and marketing tools that can evoke
emotions and convey important messages. Give us the opportunity 
to design posters that set you apart and leave a lasting impression.</p>
<img className='grupaslike' src={grupa7} alt='grupaslike7'></img>
<div>
{scl.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='levo'>
     {media.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Creating Your Social Media Story</h3>
<p className='tekstgd'>Every social media platform has its unique tone, style, and format for posts and
cover photos. To stand out and capture attention on these platforms, it's 
essential to have quality and tailored design. That's where we 
come in - Wonta Studio.</p>
<h3 className='pitanjegd'>Our Social Media Design Services</h3>
<p className='tekstgd'>Creating Visual Identity: Your presence on social media should reflect your
brand. We help you define and create a consistent visual identity that will 
be recognized across all platforms.
Post Design: Each social media post is an opportunity to engage your 
followers. Our team of expert designers creates appealing visuals and 
text that will engage your target audience.
Cover Photos: Cover photos on social media profiles and pages are the 
first thing people see. We design cover photos that highlight your
brand, your story, and your values.
Adaptability: We understand that each social media platform has 
specific dimension and format requirements. Our designs are 
adaptable, and we provide you with different versions for various 
platforms.</p>
<h3 className='pitanjegd'>Why Our Services Are the Best Choice?</h3>
<p className='tekstgd'>Social media platforms are where a brand's reputation can rise or fall.
With our social media design services, your presence will stand out, 
capture attention, and create a strong connection with your target 
audience. Refresh your online identity with Wonta Studio and 
become a leader on social media.</p>
<div className='desno'>
{product.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='animated'>
     {design.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Shaping the Future Through Innovation</h3>
<p className='tekstgd'>Product design is a crucial process in the development of new products or the 
enhancement of existing ones. It is the art and science of creating products that 
are not only functional but also aesthetically appealing, useful, and efficient. 
At Wonta Studio, we see product design as a way to shape the future 
through innovation and create game-changing products.</p>
<h3 className='pitanjegd'>Why is Product Design Important?</h3>
<p className='tekstgd'>User Experience: Products designed with a focus on user experience (UX) 
often attract and retain more customers. Well-designed products make it 
easier and more enjoyable to fulfill user needs.
Competitive Advantage: High-quality product design can help you stand 
out from the competition. An attractive and functional product can be 
the key to market success.
Production Efficiency: Designing products with production efficiency 
in mind can result in lower production costs and higher profits.</p>
<h3 className='pitanjegd'>Why Are We the Best for Product Design?</h3>
<p className='tekstgd'>At Wonta Studio, we believe that product design is not just a 
process but also an art. Our commitment to innovation and expertise in 
creating game-changing products makes us the right partner for your 
next revolutionary idea.</p>
<div className='donjidugmici'>
      <Link to='/Contact' className='dvadugmetadonjalevo'>ORDER</Link>
      <Link to='/Contact' className='dvadugmetadonja'>COOPERATION</Link>
</div>
    </div>
  )
}

export default GraphicDesign;
