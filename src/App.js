import { useState } from 'react';

import "swiper/css/bundle";

import Blogpage from './components/blog/blogpage';
import ImageGallery from './components/gallery/imageGallery';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Home from "./components/home";
import Testimonial from './components/testimonial/testimonial';
import Services from './components/services/services';

import client1 from './images/a.jpg'
import client2 from './images/b.jpg'
import client3 from './images/c.jpg'

import service1 from './images/web-development.svg'
import service2 from './images/mobile-app.svg'
import service3 from './images/maintenance.svg'


import m1 from './images/m1.png'
import m2 from './images/m2.png'
import m3 from './images/m3.png'
import m4 from './images/m4.png'
import m5 from './images/m5.png'
import m6 from './images/m6.png'
import m7 from './images/m7.png'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'

import blog from './images/blog.jpg'
import { Route, Routes } from 'react-router-dom';



function App() {
  //NavItems
  const [navitems, setNavItems] = useState([
    { title: "Home", path: "/" },
    { title: "About me", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Testimonial", path: "/testimonial" },
    { title: "Blog", path: "/blog" },
    { title: "Gallery", path: "/gallery" },
  ]);

  //Client Review
  const [clientReview,setClientReview] = useState([
    {id:'1',name:'Anna Smith',image:client1,comment:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?'},
    {id:'2',name:'Anna Smith',image:client2,comment:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?'},
    {id:'3',name:'Anna Smith',image:client3,comment:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?'},
  ])

  //Services
  const [services,setServices] = useState([
    {id:'1',image:service1,title:'Web Development',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!'},
    {id:'2',image:service2,title:'Mobile Apps',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!'},
    {id:'3',image:service3,title:'Maintenance',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!'},
  ])

  //Companies
  const [companies,setCompanies] = useState([
    {id:'1',image:m1},
    {id:'2',image:m2},
    {id:'3',image:m3},
    {id:'4',image:m4},
    {id:'5',image:m5},
    {id:'6',image:m6},
    {id:'7',image:m7},
  ])

  //Blogs
  const [blogs,setBlog] = useState([
    {id:'1',title:'Blog Title',date:'12 Nov',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad,',image:blog},
    {id:'2',title:'Blog Title',date:'12 Nov',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad,',image:blog},
    {id:'3',title:'Blog Title',date:'12 Nov',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad,',image:blog},
    {id:'4',title:'Blog Title',date:'12 Nov',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad,',image:blog},
   
  ])

  //images for gallery
  const [images,setImages] = useState([
    {id:'1',img:img1},
    {id:'2',img:img2},
    {id:'3',img:img3},
    {id:'4',img:img4},
    {id:'5',img:img5},
    {id:'6',img:img6},
  ])

  return (
    <>
      <Navbar navitems={navitems} />
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
              navitems={navitems} 
              services={services} 
              clientReview={clientReview}
              blogs={blogs}
              images={images}
              companies={companies}
            />
          } 
        />
        <Route 
          path='/about' 
          element={
            <About
              heading="About Me"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                blanditiis magni cum ullam dicta ab? Dolorem atque mollitia ducimus,
                ea incidunt dolores nisi beatae explicabo accusamus qui dicta vitae
                tempore temporibus quo illum libero. Sed. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam exercitationem velit fuga quidem
                deserunt iusto tenetur quis ab facere. Tempore."
              exp="8"
              clt="100+"
            />
          }
        />
        <Route 
          path='/services' 
          element={
            <Services
              heading="Services I offer"
              description="I help ambitious business like 
                your generate more profits by
                providing my best services"
              services={services}
               />
          }
        />
        <Route 
          path='/testimonial' 
          element={
            <Testimonial
              heading="What Client Say ?"
              description="Client's Kind Words"
              data={clientReview}
             />
          }
        />
        <Route 
          path='/blog' 
          element={
            <Blogpage
              heading="Our Latest Blogs "
              description="Check out our blogs here"
              blogs={blogs}
            />
          }
        />
        <Route 
          path='/gallery' 
          element={
            <ImageGallery heading="Image Gallery" images={images} />
          }
        />
      </Routes>
      
      
    </>
  );
}

export default App;
