import React from "react";
import Header from "./header/header";
import About from "./about/about";
import Services from "./services/services";
import Testimonial from "./testimonial/testimonial";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Blogpage from "./blog/blogpage";
import profile from "../images/profile.jpg";
import ImageGallery from "./gallery/imageGallery";
import Companies from "./companies/companies";

function Home({ navitems, services, clientReview, blogs, images, companies }) {
  return (
    <>
      <Header
        name="Casper Le"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?"
        image={profile}
      />
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
      <Services
        heading="Services I offer"
        description="I help ambitious business like 
                    your generate more profits by
                    providing my best services"
        services={services}
      />
      <Testimonial
        heading="What Client Say ?"
        description="Client's Kind Words"
        data={clientReview}
      />
      <Blogpage
        heading="Our Latest Blogs "
        description="Check out our blogs here"
        blogs={blogs}
      />
      <ImageGallery heading="Image Gallery" images={images} />
      <Companies
        heading="Some famous companies"
        description="Companies that work with us"
        companies={companies}
      />
      <Contact
        heading="Let's make something amazing"
        description="Write to me"
      />
      <Footer />
    </>
  );
}

export default Home;
