
import {Routes, Route, NavLink} from "react-router-dom"
import React, { Fragment } from 'react'
import Footer from "./Footer"

function Header() {
    
    return (
        <Fragment>
            <header className='  max-w-[1440px] mx-auto '>
                <div className='container max-w-[1200px] mx-auto'>
                    <nav className='flex justify-between'>
                        <div className='nav_left '>
                            <div className="logo ">
                                <p className='w-[160px] h-[30px] bg-[#4E9F0D] text-[#FFFFFF] pl-[37px] font-Raleway font-normal text-[20px]  mt-[26px]'>STREET88</p>
                            </div>
                        </div>
                        <div className='nav_right '>
                            <ul className='flex'>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]'><NavLink to="/">Home</NavLink></li>
                                <li className='footer1 w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]'><NavLink to="/footer">Меню</NavLink></li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]'><a href="#">o нас</a></li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]'><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main>
                        <h1 className='text-[#4E9F0D] text-[86px] font-black font-Raleway mt-[130px]'>Большой гамбургер</h1>
                        <span className='text-[#4E9F0D] font-Raleway fontnormal text-[36px]'>говядина</span>
                        <p className=' max-w-[1169px] text-[#FFFFFF] text-[18px] font-normal font-Raleway mt-[40px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
                        <button className=' w-[350px] h-[100px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-thin text-[60px] mt-[65px] mb-[120px]'>14 500</button>
                    </main>
                </div>
            </header>
            <menu className='max-w-[1440px] mx-auto bg-black'>
                <div className='container max-w-[1260px] mx-auto'>
                    <div className='menu_nav'>
                        <ul className='flex gap-[58px] pt-[40px]'>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Гамбургеры</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Хот доги</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Пицца</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Напитки</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Соки</a></li>
                        </ul>
                    </div>
                    <div className='menu_main mt-[100px] flex justify-between'>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                    </div>
                    <div className='menu_main mt-[100px] flex justify-between'>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px]'>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                    </div>
                </div>
            </menu>

            <Routes>
                <Route path="/Footer" element={<Footer/>}/>
            </Routes>

        </Fragment>
    )

}

export default Header