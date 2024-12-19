import React from 'react';
import '../style/welcome.css'

const Buy =() => {
    return (
        <div className='bg-[#1F7723] pb-11'>
            <h1 className='text-white font text-2xl md:text-2xl font-bold mb-6 text-center'>How To Buy</h1> 
            
         
         <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-4 px:0 md:px-60'>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7  border-2  rounded-lg mb-3'
             style={{
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)', 
                borderBottom: '2px solid #B3B3B3', 
                borderRight: '2px solid #B3B3B3'
             }}>
                <h1  className='mb-5 font-extrabold'>SOLANA WALLET</h1>
                <p className='text-center'>Download your solana wallet of choice but we recommend plantom or solfare chrome extentions</p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-3'>
                <h1 className='mb-5 font-extrabold'>GET SOME SOLANA</h1>
                <p className='text-center'>Get some solana, either buy within your wallet or via an exchange and deposit to your wallet cia the address shown</p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-3'>
                <h1  className='mb-5 font-extrabold'>BUY SOME $KJW PEPE</h1>
                <p className='text-center'>Go to Raydium and paste in the <strong>$KJW PEPE</strong> Contact address. Select your desired amount and confirm </p>
            </div>
        </div>  
        </div>
    );
}

export default Buy;