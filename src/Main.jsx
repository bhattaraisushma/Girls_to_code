import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Sidenav from './Sidenav';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      {/* <Counter title="Counter 1" name="Sush" /> */}
      <div className=''>
      <Header title="I am header"/>
      <div className='flex flex-row'> 
      <Sidenav title="I am side nav"/>
      <div  className=' flex justify-center items-center bg-red-400 w-full font-bold text-4xl text-yellow-50' >I AM MAIN</div></div>
      <Footer title= " I am footer"/>
      </div>
      </>
  );
};

export default Main;