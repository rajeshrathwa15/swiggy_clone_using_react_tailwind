import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Card from './Card';

const TopRes = () => {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('/data/restaurantChains.json');
        const apiData = await response.json();
        setCategory(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, [])

    const slidesToShow = 4; // Number of slides to show at once (adjust this as needed)
    const totalSlides = Math.ceil(categories.length / slidesToShow); // Calculate the total number of slides
    
    
    const nextSlide = () => { 
        if (slide < totalSlides - 1) { 
            setSlide(slide + 1); 
        }
    } 

    const prevSlide = () => { 
        if (slide > 0) { 
            setSlide(slide - 1); 
        }
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2'>
                <div className='flex items-center justify-between my-3'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                    <div className='flex'>
                        <div className='w-[30px] h-[30px] bg-[#272c3526] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                            <BsArrowLeft onClick={prevSlide} />
                        </div>
                        <div className='w-[30px] h-[30px] bg-[#272c3526] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                            <BsArrowRight onClick={nextSlide} />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden  relative">
                    <div className="flex transition-transform gap-6 duration-300" style={{ transform: `translateX(-${slide * (100 / slidesToShow)}%)` }}>
                        {categories.map((d, i) => {
                            return <Card width="w-full md:w-[273px]" {...d} key={i} />
                        })}
                    </div>
                </div>

                <hr className='my-6 border-[1px]' />
            </div>
        </>
    )
}

export default TopRes
