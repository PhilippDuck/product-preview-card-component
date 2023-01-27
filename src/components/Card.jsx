import React, {useState, useEffect} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Card() {

    const mobileImage = 'src\\images\\image-product-mobile.jpg';
    const desktopImage = 'src\\images\\image-product-desktop.jpg';

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = window.innerWidth >= 1024 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []); //empty array makes side effect only run on mount and unmount

    return (
        <div className='bg-white flex flex-col rounded-xl lg:flex-row m-3 max-w-md lg:max-w-6xl'>

            <img src={imageUrl} className='rounded-t-xl lg:rounded-r-none  lg:max-w-sm lg:rounded-l-xl' alt="Parfum Image" />

            <div className='flex flex-col p-6   lg:p-5 lg:max-w-sm'>
                <p className='font-montserrat text-darkGrayishBlue text-sm'>P E R F U M E</p>

                <h1 className='text-3xl my-4 font-fraunces lg:text-5xl'>Gabrielle Essence Eau De Parfum</h1>

                <p className='font-montserrat text-darkGrayishBlue text-sm lg:text-xl lg:my-6'>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>


                <div className='flex my-8 items-center'>
                    <p className='text-4xl text-darkCyan font-fraunces '>$149.99</p>
                    <p className='ml-3 line-through text-darkGrayishBlue font-montserrat'>$169.99</p>
                </div>


                <button className='bg-darkCyan text-white p-4 rounded-lg font-montserrat font-bold flex justify-center items-center hover:bg-green-900 focus:bg-green-800'>
                    <img className='mr-2' src="src\\images\\icon-cart.svg" alt="Shoppingcart symbol" /> Add to Cart
                </button>
            </div>

        </div>
    )
}

export default Card