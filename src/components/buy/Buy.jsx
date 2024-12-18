import React from 'react';
import '../style/welcome.css'

const Buy =() => {
    return (
        <div className='bg-green-800 pb-11'>
            <h1 className='text-white font text-2xl md:text-2xl font-bold mb-6 text-center'>How To Buy</h1> 
            
         
         <div className='grid grid-cols-1 md:grid-cols-3 gap-x-9 px-11'>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-3'>
                <h1  className='mb-5 font-extrabold'>SOLANA WALLET</h1>
                <p>Download your solana wallet of choice but we recommend plantom or solfare chrome extentions</p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-3'>
                <h1 className='mb-5 font-extrabold'>GET SOME SOLANA</h1>
                <p>Get some solana, either buy within your wallet or via an exchange and deposit to your wallet cia the address shown</p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-3'>
                <h1  className='mb-5 font-extrabold'>BUY SOME $KJW PEPE</h1>
                <p>Go to Raydium and paste in the <strong>$KJW PEPE</strong> Contact address. Select your desired amount and confirm </p>
            </div>
        </div>  
        </div>
    );
}

export default Buy;