import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
    const [slide,setSlide] = useState(0);
    const [categories, setCategory] = useState([]);
    const fetchCategory = async () => {
        const response = await fetch('/data/category.json');
        const data = await response.json();
        setCategory(data);
    }
    useEffect(() => {
        fetchCategory();
    }, [])


    const nextSlide = () =>{
        console.log(categories.length);
        if(categories.length - 8 == slide) return false;
        setSlide (slide + 3);

    }

    const prevSlide = () =>{
        if(slide == 0) return false;
        setSlide (slide - 3);
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2'>
                <div className='flex items-center justify-between my-3'>
                    <div className='text-[25px] font-bold'>What's in your mind?</div>
                    <div className='flex'>
                        <div className='w-[30px] h-[30px] bg-[#272c3526] rounded-full mx-2 flex justify-center items-center cursor-pointer'><BsArrowLeft onClick={prevSlide}/></div>
                        <div className='w-[30px] h-[30px] bg-[#272c3526] rounded-full mx-2 flex justify-center items-center cursor-pointer'><BsArrowRight onClick={nextSlide}/></div>
                    </div>
                </div>
                <div className="flex  overflow-hidden" >
                    {
                        categories.map(
                            (cat, index) => {
                                return (
                                    <div key={index} className='w-[150px] shrink-0 duration-500' style={{transform:`translateX(-${slide * 100}%)`}}>
                                        <img src={"images/"+cat.image} alt=""/>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <hr className='my-6 border-[1px]' />
            </div>
        </>
    )
}

export default Category