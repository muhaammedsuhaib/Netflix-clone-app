import React from 'react';
import Image from 'next/image';
import netflixlogo from '../asets/netFlix-logo.jpg';
import tvimge from '../asets/tv.png';
import mobailimage from '../asets/mobile.jpg';
import device from '../asets/device.png';
import kids from '../asets/kids.png'
const Page = () => {
  return (
    <>
    <div>

      {/* First page */}

    <div className="container w-[100%] h-[100vh] text-center "  style={{ backgroundImage: "url('/netflix-bg.jpg')", backgroundSize: 'cover',   backgroundPosition: 'center',    }} >
      <div className="container">
      <Image
    src={netflixlogo}
    alt="Netflix Logo" 
    className='w-[auto] h-[100px] pl-32'
    priority
  />


  <h1 className='font-bold text-4xl text-center pt-16 p-2'>Unlimited movies, TV shows and more</h1>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Get Started</button>
      </div>
    </div>
    {/* Line  */}
    <hr className='bg-slate-900 h-3 border-none'/>
  {/* Second page */}

  <div className="container w-[100%] h-[70vh] bg-black ">
  <div className="columns-md">


     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <h1 className='text-4xl font-bold p-10'>Enjoy on your TV</h1>
     <p className='text-lg text-start p-5'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
     </div></div>



     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <Image className='w-full 'alt='' src={tvimge} />
     </div></div>
     
   </div>
  </div>
 {/* Line  */}
 <hr className='bg-slate-900 h-3 border-none'/>

  {/* Third */}

  <div className="container w-[100%] h-[70vh] bg-black">
  <div className="flex flex-col-reverse md:flex-row">

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <Image className='w-full  'alt='' src={mobailimage} />
     </div></div>

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <h1 className='text-4xl font-bold p-10 text-start'>Download your shows to watch offline</h1>
     <p className='text-lg text-start p-5'>Save your favourites easily and always have something to watch.</p>
     </div></div>
     
   </div>
  </div>

 {/* Line  */}
 <hr className='bg-slate-900 h-3 border-none'/>

  {/* Fourth */}

  <div className="container w-[100%] h-[70vh] bg-black ">
  <div className="columns-md">

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[420px] h-[300px] ">          
     <h1 className='text-4xl font-bold p-10 text-start'>Watch everywhere</h1>
     <p className='text-lg text-start p-5'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
     </div></div>

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <Image className='w-full bg-black'alt='' src={device} />
     </div></div>
     
   </div>
  </div>

 {/* Line  */}
 <hr className='bg-slate-900 h-3 border-none'/>

  {/* Five */}

  <div className="container w-[100%] h-[80vh] bg-black ">
  <div className="flex flex-col-reverse md:flex-row">

     

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[400px] h-[300px] ">          
     <Image className='w-full bg-black'alt='' src={kids} />
     </div></div>

     <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[420px] h-[300px] ">          
     <h1 className='text-4xl font-bold p-10 text-start'>Create profiles for kids</h1>
     <p className='text-lg text-start p-5'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
     </div></div>
     
   </div>
  </div>

 {/* Line  */}
 <hr className='bg-slate-900 h-3 border-none'/>

  {/* Six */}

  <div className="container w-[100%] h-[80vh] bg-black ">
        <h1 className='text-3xl font-bold text-center pt-8'>Frequently Asked Questions</h1>


    {/* <div className="container text-center flex items-center justify-center "> */}
     
    <div className='flex flex-col items-center p-5 gap-2'>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11'>What is Netflix? </h1>   
  </div>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11'>How much does Netflix cost? </h1>   
  </div>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11'>Where can I watch?</h1>   
  </div>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11'>How do I cancel?</h1>   
  </div>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11'>What can I watch on Netflix?</h1>   
  </div>
  <div className="bg-slate-800 w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl hover:bg-slate-700">
    <h1 className='text-2xl text-start p-5 col-start-11 '>Is Netflix good for Kids?</h1>   
  </div>
  <h1 className='font-bold'>Ready to watch? Enter your email or mobile number to create or restart your membership.</h1>
  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Get Started</button>
</div>
    {/* </div> */}



     

     {/* <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container bg-zinc-100 w-[400px] h-[300px] ">          
     <Image className='w-full bg-black'alt='' src={kids} />
     </div></div> */}

     {/* <div className="container w-full text-center flex items-center justify-center"> 
     <div className="container w-[420px] h-[300px] ">          
     <h1 className='text-4xl font-bold p-10 text-start'>Create profiles for kids</h1>
     <p className='text-lg text-start p-5'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
     </div></div> */}
     
   
  </div>






    </div>
    </>
  );
};

export default Page;