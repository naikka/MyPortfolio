import React from 'react'
import { ReactTyped  } from 'react-typed'

const Home = () => {
  return (
    <div>
        <div className='w-full max-w-[800] h-screen mx-auto text-center flex flex-col'>
        <ReactTyped
        className='text-[#EECAD5] font-bold pt-32 text-3xl'
      strings={[
        "Welcome",
        "환영",
        "Accueillir",
        "ようこそ",
        "Bienvenido",
        "स्वागत",
        "欢迎",
        "Benvenuto",
        "Chào mừng",
        "ยินดีต้อนรับ",
      ]}
      typeSpeed={120}
      backSpeed={100}
      loop
    />
        </div>
      
    </div>
  )
}

export default Home
