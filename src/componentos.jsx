import { useState } from 'react'
import './App.css'

import img9 from './assets/p1351987.jpeg'
import img11 from './assets/kiran-ck-LSNJ-pltdu8-unsplash.jpg'
import img12 from './assets/jakob-owens-O_bhy3TnSYU-unsplash.jpg'
import img13 from './assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg'

import vid1 from './assets/v5080098_Vr_Gamer_3840x2160.mp4'


function HeadSection(){
  let [menuOpen, setMenuOpen] = useState(false);
  
  return (<div className='bg-white shadow-xl relative'>
    <div className='w-[90%] h-auto mx-auto flex justify-between items-center py-3'>
    <div className='cursor-pointer lg2:order-1 order-2'><h1 className='text-gray-800 font-bold'>CloneCommerce<span className='text-green-600'>.</span></h1></div>

    <ul className={`flex lg2:flex-row flex-col lg2:items-center items-end lg2:gap-x-8 lg2:order-2 order-1 fixed lg2:static bg-stone-200 lg2:bg-transparent top-0 -left-[200px] shadow-xl lg2:shadow-none w-[300px] lg2:w-auto h-[360px] lg2:h-auto pr-6 pt-6 lg2:pr-0 lg2:pt-0 gap-y-7 lg2:gap-y-0 z-50 lg2:z-auto rounded-br-sm duration-500 lg2:transition-none ${menuOpen ? "left-0" : "-left-[300px]"}`}>
      <li className='text-lg font-medium text-gray-500 bg-white w-[94%] lg2:w-auto lg2:text-left text-right py-1 pr-3 lg2:p-0 rounded-sm'><a href="" className='hover:text-green-600 duration-200'>Home</a></li>
      <li className='text-lg font-medium text-gray-500 bg-white w-[94%] lg2:w-auto lg2:text-left text-right py-1 pr-3 lg2:p-0 rounded-sm'><a href="#about" className='hover:text-green-600 duration-200'>About</a></li>
      <li className='text-lg font-medium text-gray-500 bg-white w-[94%] lg2:w-auto lg2:text-left text-right py-1 pr-3 lg2:p-0 rounded-sm'><a href="#products" className='hover:text-green-600 duration-200'>Products</a></li>
      <li className='text-lg font-medium text-gray-500 bg-white w-[94%] lg2:w-auto lg2:text-left text-right py-1 pr-3 lg2:p-0 rounded-sm'><a href="#reviews" className='hover:text-green-600 duration-200'>Reviews</a></li>
      <li className='text-lg font-medium text-gray-500 bg-white w-[94%] lg2:w-auto lg2:text-left text-right py-1 pr-3 lg2:p-0 rounded-sm'><a href="#contact" className='hover:text-green-600 duration-200'>Contact</a></li>
    </ul>

    <ul className='flex items-center gap-x-4 order-3'>
      <li className='text-lg font-medium text-gray-900 hover:text-green-600 duration-200'><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" /></svg></a>
      </li>
      <li className='text-lg font-medium text-gray-900 hover:text-green-600 duration-200'><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg></a>
      </li>
      <li className='text-lg font-medium text-gray-900 hover:text-green-600 duration-200'><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" /></svg></a>
      </li>
    </ul>

    <button onClick={() => setMenuOpen((prev)=> !prev)} className="w-[29px] h-[27px] flex flex-col justify-around lg2:hidden cursor-pointer order-4 z-50">
      <span class={`w-[29px] h-[3px] rounded-full bg-black ${menuOpen ? "rotate-45 translate-y-2" : ""} duration-500`}></span>
      <span class={`w-[29px] h-[3px] rounded-full bg-black ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
      <span class={`w-[29px] h-[3px] rounded-full bg-black ${menuOpen ? "-rotate-45 -translate-y-2" : ""} duration-500`}></span>
    </button>

     {/* Overlay */}
     {menuOpen && (
        <div
          className="fixed inset-0 lg2:hidden bg-black/10 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  </div>)
} 

const FirstSection = ()=>{
  return (<div className='w-full h-dvh lg2:bg-[url(./assets/modern-stationary-collection-arrangement.jpg)] bg-[url(./assets/modern-stationary-collection-arrangement-mobile.jpg)] bg-fixed bg-cover bg-bottom flex items-center'>
    <div className='lg2:mx-20 lg2:basis-[40%] basis-[90%] mx-auto'>
      <h1 className='text-gray-800 font-bold text-5xl tShadow'>E-commers webpage</h1>
      <h3 className='text-color1 tShadow text-3xl lg2:my-3 my-5'>Clean & Elegent</h3>
      <p className='lg2:text-sm text-md text-gray-700 lg2:mb-4 mb-6 font-semibold lg2:font-normal tShadow'>Images, Illustration and Video of this page is from the Internet. These images are free but not for comercial uses. I don't own any of these graphics in this page. I am only using these for this type of open-source and hobby project. If you download any these stuff from here then do not use them for comercial purpose.</p>
      <button className='text-gray-200 bg-gray-800 px-7 py-[6px] rounded-2xl text-[14px] hover:bg-color1 duration-200 cursor-pointer shadow-2xl'>Shop Now</button>
    </div>
  </div>)
}

const SecondSection = ()=>{
  return (<div id='about' className='py-16 shadow-2xl'>
    <h1 className='text-center text-gray-800 font-bold text-4xl mb-14 bg-green-100 pb-2 pt-1 lg2:w-[40%] w-[70%] mx-auto rounded-sm'><span className='text-color1'>About</span> Us</h1>
    <div className='flex flex-col lg2:flex-row lg2:items-center lg2:gap-x-10 lg2:justify-center'>

      <div className='lg2:basis-[40%] w-[90%] lg2:w-auto h-[300px] mx-auto shadow-xl relative bg-white flex items-center justify-center overflow-hidden lg2:mb-0 mb-14'>
      <video
        className="absolute w-full h-full object-cover"
        src={vid1}
        autoPlay
        loop
        muted
        playsInline
      />
      <svg
        viewBox="0 0 800 110 "
        className="relative z-10 w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="text-mask" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="50"
              fontWeight="800"
              fontFamily="sans-serif"
              fill="black"
            >
              Many Cool Stuff
            </text>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          mask="url(#text-mask)"
        />
      </svg>
      </div>

      <div className='lg2:basis-[40%] w-[90%] lg2:w-auto mx-auto'>
        <h1 className='font-bold text-3xl text-gray-800 mb-3'>Why From Us</h1>
        <p className='text-sm text-gray-600 lg2:mb-4 mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam numquam di....Don't mind the guy do whatever he is doing. Let him enjoy life....<br /><br/>The Video in this section is a free video from <a className='text-color1 hover:underline font-semibold' href="https://www.freepik.com/" target='_blank'>Freepik</a>. and so does most of the images in this page. But the Illustration on the Contact section is from <a className='text-color1 hover:underline font-semibold' href='https://undraw.co/' target='_blank'>Undraw</a>. Also the customer image from the Customer-Review section is probably AI generated(not by me) and downloaded from unknown source. Other Illsutratons are svg..... Thank you for previewing this page.</p>
        <button className='text-gray-200 bg-gray-800 px-7 py-[6px] rounded-2xl text-[14px] hover:bg-color1 duration-200 cursor-pointer'>Learn More</button>
      </div>
    </div>
  </div>)
}

const ThirdSection = ()=>{
  return (<div className='py-10 bg-gray-200 flex lg2:flex-row flex-col gap-x-10 gap-y-6 justify-center items-center'>
    <div className='lg2:basis-20% w-[80%] lg2:w-auto flex items-center gap-x-4 py-3 px-5 bg-white rounded-sm lg2:rounded-none justify-center'>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1e2939" class="size-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
      </div>
      <div>
        <p className='font-semibold text-gray-800'>Free Shipping</p>
        <p className='text-[12px] text-gray-600'>On Every Orders</p>
      </div>
    </div>
    <div className='lg2:basis-20% w-[80%] lg2:w-auto flex items-center gap-x-4 py-3 px-5 bg-white rounded-sm lg2:rounded-none justify-center'>
      <div><svg fill="#1e2939" className='size-10' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z"/></svg>
      </div>
      <div>
        <p className='font-semibold text-gray-800'>1 Week Return</p>
        <p className='text-[12px] text-gray-600'>CashBack Guarantee</p>
      </div>
    </div>
    <div className='lg2:basis-20% w-[80%] lg2:w-auto flex items-center gap-x-4 py-3 px-5 bg-white rounded-sm lg2:rounded-none justify-center'>
      <div><svg fill="#1e2939" className='size-10' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
      <g><g><path d="M495.304,55.652H16.696C7.475,55.652,0,63.127,0,72.348v367.304c0,9.22,7.475,16.696,16.696,16.696h478.609 c9.22,0,16.696-7.475,16.696-16.696V72.348C512,63.127,504.525,55.652,495.304,55.652z M200.348,189.217
			c0-18.412,14.979-33.391,33.391-33.391s33.391,14.979,33.391,33.391c0,18.412-14.979,33.391-33.391,33.391h-31.712
			c-1.1-5.396-1.68-10.979-1.68-16.696V189.217z M166.957,422.957H33.391V256h100.174h16.65
			c-15.245,20.262-39.485,33.391-66.737,33.391c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696
			c32.672,0,62.249-13.482,83.478-35.168V422.957z M166.957,205.913c0,5.717-0.58,11.3-1.68,16.696h-31.712
			c-18.412,0-33.391-14.979-33.391-33.391s14.979-33.391,33.391-33.391c18.412,0,33.391,14.979,33.391,33.391V205.913z
			 M166.957,131.419c-9.832-5.702-21.231-8.984-33.391-8.984c-36.824,0-66.783,29.959-66.783,66.783
			c0,12.16,3.282,23.56,8.984,33.391H33.391V89.043h133.565V131.419z M478.609,422.957H200.348V287.615
			c21.229,21.685,50.806,35.168,83.478,35.168c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696
			c-27.252,0-51.492-13.129-66.737-33.391h16.65h244.87V422.957z M478.609,222.609H291.537c5.702-9.832,8.984-21.231,8.984-33.391 c0-36.824-29.959-66.783-66.783-66.783c-12.16,0-23.56,3.282-33.391,8.984V89.043h278.261V222.609z"/></g></g><g><g><path d="M428.522,289.391h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696S437.742,289.391,428.522,289.391z"/></g></g><g><g>
		  <path d="M428.522,356.174h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696S437.742,356.174,428.522,356.174z"/></g></g></svg>
      </div>
      <div>
        <p className='font-semibold text-gray-800'>Cool Offers</p>
        <p className='text-[12px] text-gray-600'>On All Orders</p>
      </div>
    </div>
    <div className='lg2:basis-20% w-[80%] lg2:w-auto flex items-center gap-x-4 py-3 px-5 bg-white rounded-sm lg2:rounded-none justify-center'>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1e2939" class="size-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
      </div>
      <div>
        <p className='font-semibold text-gray-800'>Fast Payment</p>
        <p className='text-[12px] text-gray-600'>Sequred By Paypal</p>
      </div>
    </div>
  </div>)
}

function Product({img, prodtNam, discount, newPrice, oldPrice}){
  return (<div tabIndex={0} className='overflow-hidden rounded-sm shadow-c1 group relative'>
    <p className='absolute text-color1 font-semibold text-lg top-2 left-2 bg-green-100 rounded-sm px-1'>-{discount}%</p>
    <img src={img} alt="product_img" className='w-[80%] h-[160px] object-cover object-center mx-auto rounded-sm sm2:group-hover:w-[70%] duration-300 group-focus:w-[70%] lg2:group-focus:w-[80%]' />
    <div className='text-center mt-4 mb-3 bg-white'>
      <h1 className='text-2xl font-bold text-gray-800 mb-1'>{prodtNam}</h1>
      <h1 className='text-2xl font-bold text-color1'>$ {newPrice} <del className='text-[14px] text-gray-500'>$ {oldPrice}</del></h1>
    </div>
        
    <div className='bg-color1 absolute top-[75%] left-0 w-full h-[15%] sm2:group-hover:z-10 sm2:group-hover:top-[55%] duration-300 group-focus:z-10 group-focus:top-[55%] lg2:group-focus:-z-10 lg2:group-focus:top-[75%] flex justify-evenly items-center -z-10'>
      <button className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg></button>
          
      <button className='text-white font-medium border-x border-white w-[60%] h-full flex items-center justify-center cursor-pointer'>Add To Cart</button>

      <button className='cursor-pointer'><svg className='size-6' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"/><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6495 0.799565C18.4834 -0.72981 16.0093 0.081426 16.0093 1.99313V3.91272C12.2371 3.86807 9.65665 5.16473 7.9378 6.97554C6.10034 8.9113 5.34458 11.3314 5.02788 12.9862C4.86954 13.8135 5.41223 14.4138 5.98257 14.6211C6.52743 14.8191 7.25549 14.7343 7.74136 14.1789C9.12036 12.6027 11.7995 10.4028 16.0093 10.5464V13.0069C16.0093 14.9186 18.4834 15.7298 19.6495 14.2004L23.3933 9.29034C24.2022 8.2294 24.2022 6.7706 23.3933 5.70966L19.6495 0.799565ZM7.48201 11.6095C9.28721 10.0341 11.8785 8.55568 16.0093 8.55568H17.0207C17.5792 8.55568 18.0319 9.00103 18.0319 9.55037L18.0317 13.0069L21.7754 8.09678C22.0451 7.74313 22.0451 7.25687 21.7754 6.90322L18.0317 1.99313V4.90738C18.0317 5.4567 17.579 5.90201 17.0205 5.90201H16.0093C11.4593 5.90201 9.41596 8.33314 9.41596 8.33314C8.47524 9.32418 7.86984 10.502 7.48201 11.6095Z" fill="#ffffff"/> <path d="M7 1.00391H4C2.34315 1.00391 1 2.34705 1 4.00391V20.0039C1 21.6608 2.34315 23.0039 4 23.0039H20C21.6569 23.0039 23 21.6608 23 20.0039V17.0039C23 16.4516 22.5523 16.0039 22 16.0039C21.4477 16.0039 21 16.4516 21 17.0039V20.0039C21 20.5562 20.5523 21.0039 20 21.0039H4C3.44772 21.0039 3 20.5562 3 20.0039V4.00391C3 3.45162 3.44772 3.00391 4 3.00391H7C7.55228 3.00391 8 2.55619 8 2.00391C8 1.45162 7.55228 1.00391 7 1.00391Z" fill="#ffffff"/></g></svg></button>
    </div>
  </div>)
}
function ForthSection(){
  return (<div id='products' className='my-8 pt-4'>
    <h1 className='text-center font-bold text-4xl bg-green-100 pb-2 pt-1 lg2:w-[40%] w-[80%] mx-auto rounded-sm'>Latest <span className='text-color1'>Products</span></h1>

    <div className='mt-10 grid lg2:grid-cols-3 md2:grid-cols-2 grid-cols-1 md2:gap-6 gap-y-20 px-20'>
      <Product img={img11} prodtNam={'Product 1'} discount={15} newPrice={69.99} oldPrice={79.99}/>

      <Product img={img12} prodtNam={'Product 2'} discount={15} newPrice={109.99} oldPrice={129.99}/>

      <Product img={img13} prodtNam={'Product 3'} discount={15} newPrice={49.99} oldPrice={59.99}/>

      <Product img={img11} prodtNam={'Product 4'} discount={15} newPrice={69.99} oldPrice={79.99}/>

      <Product img={img12} prodtNam={'Product 5'} discount={15} newPrice={109.99} oldPrice={129.99}/>

      <Product img={img13} prodtNam={'Product 6'} discount={15} newPrice={49.99} oldPrice={59.99}/>

      <Product img={img11} prodtNam={'Product 7'} discount={15} newPrice={69.99} oldPrice={79.99}/>

      <Product img={img12} prodtNam={'Product 8'} discount={15} newPrice={109.99} oldPrice={129.99}/>

      <Product img={img13} prodtNam={'Product 9'} discount={15} newPrice={49.99} oldPrice={59.99}/>
    </div>
  </div>)
}

function FifthSection(){
  return (<div id='reviews' className='my-20'>
    <h1 className='text-center font-bold text-4xl bg-green-100 pb-2 pt-1 lg2:w-[40%] w-[80%] mx-auto rounded-sm'>Customer's <span className='text-color1'>Reviews</span></h1>
    <div className="gap-10 flex lg2:flex-row flex-col items-center justify-center mt-10 lg2:px-14 xl2:px-16 px-18">
      <div className='shadow-xl p-4'>
        <div className='flex items-center gap-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
        </div>
        <p className='text-gray-600 text-[14px] my-4'>Lorem ipsum dolor sit amet conse ctetur, adip isi cing elit. Cons equa tur exer citat ionem, alias eaque mole stias vitae placeat esse, animi cum odio incid unt magnam nam verit atis id commodi, optio ipsam mollitia repreh ende rit at!</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={img9} className='w-[56px] h-[56px] object-cover rounded-full mr-3' alt="" />
            <div>
              <p className='font-semibold text-gray-800'>Pokie Person</p>
              <p className='text-sm text-gray-700'>Happy Buyer</p>
            </div>
          </div>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-14 opacity-40"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg></div>
        </div>
      </div>

      <div className='shadow-xl p-4'>
        <div className='flex items-center gap-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
        </div>
        <p className='text-gray-600 text-[14px] my-4'>Lorem ipsum dolor sit amet conse ctetur, adip isi cing elit. Cons equa tur exer citat ionem, alias eaque mole stias vitae placeat esse, animi cum odio incid unt magnam nam verit atis id commodi, optio ipsam mollitia repreh ende rit at!</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={img9} className='w-[56px] h-[56px] object-cover rounded-full mr-3' alt="" />
            <div>
              <p className='font-semibold text-gray-800'>Pokie Person</p>
              <p className='text-sm text-gray-700'>Happy Buyer</p>
            </div>
          </div>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-14 opacity-40"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg></div>
        </div>
      </div>

      <div className='shadow-xl p-4'>
        <div className='flex items-center gap-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
        </div>
        <p className='text-gray-600 text-[14px] my-4'>Lorem ipsum dolor sit amet conse ctetur, adip isi cing elit. Cons equa tur exer citat ionem, alias eaque mole stias vitae placeat esse, animi cum odio incid unt magnam nam verit atis id commodi, optio ipsam mollitia repreh ende rit at!</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={img9} className='w-[56px] h-[56px] object-cover rounded-full mr-3' alt="" />
            <div>
              <p className='font-semibold text-gray-800'>Pokie Person</p>
              <p className='text-sm text-gray-700'>Happy Buyer</p>
            </div>
          </div>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="oklch(0.627 0.194 149.214)" class="size-14 opacity-40"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg></div>
        </div>
      </div>
    </div>
  </div>)
}

function SixthSection(){
  return (<div id='contact' className='my-16'>
    <h1 className='text-center font-bold text-4xl mb-8 bg-green-100 pb-2 pt-1 lg2:w-[40%] w-[70%] mx-auto rounded-sm'><span className='text-color1'>Contact</span> Us</h1>

    <div className="px-14 md2:px-4 flex md2:flex-row flex-col justify-evenly gap-x-10 gap-y-6 items-center pt-6 md2:pt-0">
      <form action="" className='shadow-c1 order-2 md2:order-1 md2:basis-[45%] p-6'>
        <input type="text" placeholder='name' className='border border-gray-500 rounded-sm w-full p-2 mb-3 caret-color1 focus:outline focus:outline-color1 focus:border-color1 outline-0 text-gray-700' />
        <input type="email" name="" id="" placeholder='email' className='border border-gray-500 rounded-sm w-full p-2 mb-3 caret-color1 focus:outline focus:outline-color1 focus:border-color1 outline-0 text-gray-700' />
        <textarea name="" id="" className='border border-gray-500 rounded-sm w-full p-2 caret-color1 focus:outline focus:outline-color1 focus:border-color1 outline-0 text-gray-700 h-[150px]' placeholder='message'></textarea>
        <button type="submit" className='text-gray-200 bg-gray-800 px-7 py-[6px] rounded-2xl text-[14px] hover:bg-color1 duration-200 cursor-pointer mt-3'>Send Message</button>
      </form>

      <div className='md2:basis-[35%] order-1 md2:order-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 800.64 533.072" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><g transform="translate(-454.467 -212.002)"><path d="M482.342,713.12a13.987,13.987,0,0,1-17.617-4.2c-.395-.543.43-1.182.826-.638a12.952,12.952,0,0,0,16.4,3.877c.6-.307.99.66.4.965Z" transform="translate(753.091 20.702)" fill="#fff"/><path d="M473.349,676.436a7.917,7.917,0,0,0,5.451-5.169c.208-.639,1.169-.233.963.4a8.872,8.872,0,0,1-6.018,5.732.539.539,0,0,1-.681-.285A.524.524,0,0,1,473.349,676.436Z" transform="translate(751.211 29.008)" fill="#fff"/><path d="M977.768,398.345c0,110.6-70.1,204.826-168.279,240.682a253.338,253.338,0,0,1-46.048,12.087A257.9,257.9,0,0,1,634.8,639.431c-98.8-35.561-169.413-130.11-169.367-241.14,0-141.421,114.694-256.114,256.169-256.114A256.149,256.149,0,0,1,977.768,398.345Z" transform="translate(277.338 90.56)" fill="#f2f2f2"/><path d="M858.3,767.84a253.333,253.333,0,0,1-46.048,12.087,257.9,257.9,0,0,1-128.643-11.683l11.83-47.469.714-2.849,24.142.093,121.284.435,1.553,4.588Z" transform="translate(228.525 -38.253)" fill="#2f2e41"/><rect width="222.518" height="251.787" rx="8" transform="translate(454.467 212.002)" fill="#e6e6e6"/><rect width="214.194" height="241.134" rx="5" transform="translate(458.435 217.329)" fill="#fff"/><circle cx="12.007" cy="12.007" r="12.007" transform="translate(553.72 425.875)" fill="#e6e6e6"/><rect width="68.961" height="7.055" transform="translate(494.737 302.685)" fill="#e6e6e6"/><rect width="104.081" height="7.055" transform="translate(494.737 323.825)" fill="#95de4c"/><rect width="93.865" height="7.055" transform="translate(494.737 345.098)" fill="#e6e6e6"/><rect width="144.947" height="7.055" transform="translate(494.737 365.809)" fill="#95de4c"/><rect width="118.129" height="7.055" transform="translate(496.244 385.533)" fill="#e6e6e6"/><path d="M470.813,618.97a23.1,23.1,0,0,1,2.322,2.795L581.9,619.1l12.688-23.186,37.494,14.575L613.6,653.722a17.551,17.551,0,0,1-18.242,10.527L472.478,649.4a23.028,23.028,0,1,1-1.669-30.438Z" transform="translate(284.957 -10.956)" fill="#ed9da0"/><path d="M669.854,605.049l-51.772-20.714.22-.921c.222-.932,22.257-93.01,25.183-107.807,3.048-15.416,14.183-19.678,14.656-19.852l.345-.127,20.489,6.237,9,70.7Z" transform="translate(243.186 20.431)" fill="#95de4c"/>

        <path d="M718.072,337.454v-53.26a71.369,71.369,0,1,1,142.736-.473q0,.236,0,.473v53.26a9.6,9.6,0,0,1-9.587,9.587H727.659A9.6,9.6,0,0,1,718.072,337.454Z" transform="translate(220.815 74.807)" fill="#2f2e41"/><path d="M2.833,0,47.947.787l8.7,51.234H0Z" transform="matrix(1, -0.017, 0.017, 1, 977.099, 410.416)" fill="#ed9da0"/><circle cx="52.324" cy="52.324" r="52.324" transform="translate(943.265 315.958)" fill="#ed9da0"/><path d="M670.758,444.348l50.9-16.681,14.949-20.5,72.749,4.305,10.681,23.925,38.792,18.33-5.962,110.715-10.2,103.614c-52.443-27.156-150.316-6.453-151.173-6.116Z" transform="translate(231.4 31.274)" fill="var(--colorC)"/>

        <path d="M696.322,294.05a56.519,56.519,0,0,1,56.456-56.456H763.43a56.519,56.519,0,0,1,56.455,56.456v1.065H797.374l-7.678-21.5-1.536,21.5H776.527l-3.874-10.848-.776,10.848H696.322Z" transform="translate(230.49 68.619)" fill="#2f2e41"/><path d="M783.952,365.438a9.445,9.445,0,0,1-.751-10.028c11.288-21.47,27.092-61.143,6.115-85.609l-1.5-1.756h60.9v91.437l-55.325,9.762a9.786,9.786,0,0,1-1.7.15,9.548,9.548,0,0,1-7.737-3.953Z" transform="translate(206.489 62.399)" fill="#2f2e41"/><path d="M822.345,701.636a23.065,23.065,0,0,1,3.631.2l72-81.564L889.6,595.209l36.18-17.584,19.139,42.938a17.55,17.55,0,0,1-4.684,20.535L845.8,721.11a23.028,23.028,0,1,1-23.455-19.474Z" transform="translate(202.481 -6.863)" fill="#ed9da0"/><path d="M910.145,603.483l-30.033-70.645,11.714-49.208,12.621-15.945a7.271,7.271,0,0,1,5.841.054c4.658,1.873,8.617,7.615,11.781,17.065l28.147,80.172Z" transform="translate(184.561 17.865)" fill="#95de4c"/>
        
        <g transform="translate(540 231.612)"><path d="M210.287,123.086a25.532,25.532,0,1,0,25.531,25.532h0a25.532,25.532,0,0,0-25.532-25.532Zm0,7.659a7.659,7.659,0,1,1-7.659,7.659h0A7.659,7.659,0,0,1,210.287,130.745Zm0,36.874a18.6,18.6,0,0,1-15.319-8.175c.123-5.106,10.213-7.917,15.319-7.917s15.2,2.811,15.319,7.917A18.63,18.63,0,0,1,210.287,167.618Z" transform="translate(-184.753 -123.086)" fill="oklch(0.627 0.194 149.214)"/></g><path d="M216.534,384.632c9.925-18.188,33.7-29.707,53.151-19.324,8.755,4.673,15.714,12.938,17.923,22.707,2.564,11.348-2.838,22.169-8.415,31.7-3.027,5.175-6.343,10.245-8.848,15.7-2.594,5.653-4.448,12.186-2.495,18.335,1.758,5.54,6.166,9.569,10.993,12.531a81.912,81.912,0,0,0,16.892,7.545,99.428,99.428,0,0,0,37.712,4.879,103.137,103.137,0,0,0,18.8-3.038c6.551-1.67,12.979-3.787,19.54-5.42,10.955-2.721,23.446-4.074,33.834,1.392,10.092,5.312,14.609,16.422,16.005,27.229,2.58,19.957-5.333,40.668-19.62,54.643-6.855,6.705-15.48,12.245-24.875,14.511-8.2,1.978,8.219,2.778,16.78-2.572,17.809-11.129,29.65-30.7,32.128-51.451,1.291-10.812-.023-22.459-4.926-32.273A31.594,31.594,0,0,0,409.5,468.795a38.179,38.179,0,0,0-16.537-5.1c-13.147-1.211-25.778,3.3-38.249,6.756a106.064,106.064,0,0,1-19.5,3.723,97.406,97.406,0,0,1-19.244-.313,94.761,94.761,0,0,1-18.647-4.138,74.637,74.637,0,0,1-16.926-7.652c-4.677-2.991-8.722-7.274-8.952-13.111-.25-6.329,2.942-12.25,5.977-17.586,6-10.541,13.4-20.852,14.968-33.192,1.37-10.795-2.974-21.434-10.475-29.133a39.387,39.387,0,0,0-29.107-12.075c-11.129.319-21.784,5.158-29.97,12.591a49.339,49.339,0,0,0-10.108,12.84c-1.356,2.484,2.438,4.7,3.795,2.218Z" transform="translate(350.18 55.21)" fill="#3f3d56"/></g></svg>
        {/* #95de4c */}
      </div>
    </div>
  </div>)
}

function SeventhSection(){
  return (<div className='mt-16 mb-4 flex sm2:flex-row flex-col justify-evenly pl-[10%] sm2:pl-0 gap-y-6'>
    <ul className='text-sm text-gray-700'>
      <li><h1 className='text-2xl font-semibold text-gray-800 mb-4'>Links</h1></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Home</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">About</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Products</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Review</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Contact</a></li>
    </ul>

    <ul className='text-sm text-gray-700'>
      <li><h1 className='text-2xl font-semibold text-gray-800 mb-4'>More Links</h1></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Home</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">About</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Products</a></li>
    </ul>

    <ul className='text-sm text-gray-700'>
      <li><h1 className='text-2xl font-semibold text-gray-800 mb-4'>Contacts</h1></li>
      <li className='mb-2'><p className='hover:text-color1 duration-300 inline'>rafidrenson@gmail.com</p></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="https://github.com/HasinRafid" target='_blank'>Github Profile</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="https://web.facebook.com/m.h.a.RAFID" target='_blank'>Facebook</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="https://x.com/HasinRafid420" target='_blank'>X Account</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="https://www.upwork.com/freelancers/~01e89795f3f93cc8ff?viewMode=1" target='_blank'>Upwork Profile</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="https://github.com/HasinRafid/E-commercPage1" target='_blank'>Repo of this project</a></li>
    </ul>

    <ul className='hidden md2:block text-sm text-gray-700'>
      <li><h1 className='text-2xl font-semibold text-gray-800 mb-4'>More Links</h1></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Home</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">About</a></li>
      <li className='mb-2'><a className='hover:text-color1 hover:underline duration-300' href="">Products</a></li>
    </ul>
  </div>)
}

function FooterSection(){
  return (<div className='py-6 text-center border-t border-gray-300 w-[85%] mx-auto font-semibold text-gray-800'>
    <p>Developed By <span className='text-color1'>HasinRafid</span> || © 2025- ∞ <span className='text-color1'>HasinRafid</span></p>
  </div>)
}

export {HeadSection, FirstSection, SecondSection, ThirdSection, ForthSection, FifthSection, SixthSection, SeventhSection, FooterSection}


