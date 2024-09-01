import React from 'react'
import { ReactTyped  } from 'react-typed'

const Home = () => {
  return (
    <div>
        <div className='w-full max-w-[800] h-screen mx-auto text-center flex flex-col'>
        <ReactTyped
        className='text-[#EECAD5] font-bold pt-32 text-6xl'
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
      typeSpeed={90}
      backSpeed={80}
      loop
    />
     <p className='mx-24 text-white pt-5'>Hello! I'm Micah Gersava, an IT student at the University of Antique-Main, majoring in Networking and Security (NAS). Alongside my passion for network management and cybersecurity, I have a strong interest in fullstack web development.  I enjoy creating dynamic web applications and building projects that blend creativity with technical skills. </p>
     <p className='mx-24 text-[#efaabf] pt-10 text-xl'>Welcome to my portfolio, where you can explore my work, projects, and the skills I'm honing in both networking and web development. </p>
        </div>
        <div className='relative text-center'>
         
        </div>
      
    </div>
  )
}

export default Home
