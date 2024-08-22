import React,{useContext,useEffect} from 'react'
import Ct from './Ct'
import Allpost from './Allpost'
import {Link,Outlet,useNavigate} from 'react-router-dom'
const Home = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/login")
    }
  },[])
  return (
    <div className='con'>
      <div className='sidmenu'>
        <Link to='/'>Allposts</Link>
        <Link to='/me'>Donebyme</Link>
        <Link to='/news'>News</Link>
        <Link to='/edu'>Education</Link>
        <Link to='/sports'>Sports</Link>
        <Link to='/star'>Stared</Link>
        <Link to='/movies'>Movies</Link>
      </div>
      <div className='maincon'>
        <Outlet/>
      </div>
      <div className='adv'>
      <iframe width="200" height="200" src="https://www.youtube.com/embed/R8EbjbeJo5I?si=F_C_DKuBFQDIywnR&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="200" height="200" src="https://www.youtube.com/embed/slkgAY91eGw?si=zitJYxntW8Ya-i5S&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
     
    </div>
  )
}

export default Home
