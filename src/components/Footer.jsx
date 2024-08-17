import React from 'react'

// Note: company,contact,legal these are all json variable using map(). and deliver variable is array type of variable this is also use with map().
const Footer = () => {
  const company = [
    {
      name : "About"
    },
    {
      name : "Careers"
    },
    {
      name : "Help & Support"
    },{
      name : "Team"
    },
    {
      name : "Swiggy One"
    },
    {
      name : "Swiggy Instamart"
    },
    {
      name : "Swiggy Genie"
    }
  ];
  const contact = [
    {
      name : "Help & Support"
    },
    {
      name : "Partner with us"
    },
    {
      name : "Ride with us"
    },
    {
      name : "Press Contacts"
    },
    {
      name : "Press Kit"
    }
  ];
  const legal = [
    {
      name : "Terms & Conditions"
    },
    {
      name : "Cookie Policy"
    },
    {
      name : "Privacy Policy"
    },
    {
      name : "Investor Relations"
    }
  ];
  const deliver = [ "Bangalore","Gurgaon", "Hyderabad","Kolkata","Delhi","Mumbai","Pune","589 cities"];

  return (
    <>
    <footer class="bg-black">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src="images/footer-logo.png" alt="" className='h-15 w-8' />
          <span class="ml-3 text-xl">Swiggy</span>
        </a>
        <p class="mt-2 text-sm font-bold text-slate-500 cursor-pointer">© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font font-semibold text-white tracking-widest  mb-3">Company</h2>
          
          <nav class="list-none mb-10">
          {
            company.map((item, index) => {
              return (
                <li key={index}>
                  <a class="font-bold text-slate-500 cursor-pointer">{item.name}</a>
                </li>
              )
            })
          }
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font font-semibold text-white tracking-widest  mb-3">Contact us</h2>
          <nav class="list-none mb-10">
          {
            contact.map((item, index)=>{
              return (
                <li key={index}>
                  <a class="font-bold text-slate-500 cursor-pointer">{item.name}</a>
                </li>
              )
            })
          }
            <div className='my-10'></div>
            <h2 class="title-font font-semibold text-white tracking-widest  mb-3">Legal</h2>
            {
              legal.map((item,index)=>{
                return(
                  <li key={index}>
                  <a class="font-bold text-slate-500 cursor-pointer">{item.name}</a>
                </li>
              )  
              })
            }
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font font-semibold text-white tracking-widest  mb-3">We deliver to:</h2>
          <nav class="list-none mb-10">
          {
            deliver.map((item,index)=>{
              return(
              <li key={index}>
              <a class="font-bold text-slate-500 cursor-pointer">{item}</a>
            </li>
          )
            })
          }
          </nav>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer