import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
const OnlineDelivery = () => {
    const [data, setData] = useState([]);
    const ref = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const react = ref.current.getBoundingClientRect();
                setIsAtTop(react.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    const fetchTopRestaurant = async () => {
        const response = await fetch('/data/restaurantChains.json');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, [])

    return (
        <div className='max-w-[1200px] mx-auto px-2' ref={ref}>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}  >

                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 '>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>
                    <div className='p-3 rounded-md shadow'>Rating 4.0+</div>
                    <div className='p-3 rounded-md shadow'>Pure Veg</div>
                    <div className='p-3 rounded-md shadow'>Offers</div>
                    <div className='p-3 rounded-md shadow'>Rs.300-Rs.600</div>
                    <div className='p-3 rounded-md shadow'>Less than Rs.300</div>
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d, i) => {
                            return <Card {...d} />
                        })
                }
            </div>
            <hr className='my-10 border-[1px]' />
        </div>
    )
}

export default OnlineDelivery