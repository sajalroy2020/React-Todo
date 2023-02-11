import testing from "../styles/style.module.css";
import Header from "../component/header";
import Card from "../component/card";
import Shop from "../component/shop";
import Footer from "../component/footer";
import Instagram from "../component/instagram";


export default function myapp () {
    return(
       <div className={testing.text_style}>
          <div className={testing.container}>
            {/* header section start */}
            <div className={testing.header}>
                <a href=""><img className={testing.logos} src="https://assets.zyrosite.com/thosn4c78/ThosLogo-ALpjpwaKK4TkweJp.svg" alt="" /></a>
                <ul className={testing.allList}>
                  <Header items="Blog" />
                  <Header items="Shop" />
                  <Header items="About" />
                  <Header items="Contact" />
                  <Header items="Shopping Bag (0)" />
                </ul>
            </div>
            {/* header section start */}

            {/* Food section start */}
              <div className={testing.foodText}>
                <h1>My culinary journey <br /> from A to Z</h1>
                <h5>Join me for daily reflections and delicious recipes</h5>
              </div>
              <div className={testing.all_card}>
                  <Card cardIMG={testing.food_img} title="Hot-cross buns and Easter fun" subTitle="If you thought Easter was all about chocolate, you’re badly mistaken. 6/9/2021  1 min read" image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=360,fit=crop/thosn4c78/Group-mk3N38bV5EhG0arx.png" />
                  
                  <Card title="Tasty and healthy snacks for the road" subTitle="Finding snacks that keep well and taste good is sometimes tricky. 6/9/2021  1 min read" image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=360,fit=crop/thosn4c78/Group-YNqzqO6Ga7i1L6k4.png" />
              </div>
              <div className={testing.all_card}>
                  <Card title="My first attempt at making pear desserts" subTitle="Growing up, I always associated pears with fruit salad and nothing else. 6/9/2021  1 min read" image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=360,fit=crop/thosn4c78/Group-YanenMeNJVHyX1Do.png" />

                  <Card title="Sourdough baking 101" subTitle="I actually jumped on the sourdough bandwagon way back in middle school. 6/9/2021  1 min read" image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=360,fit=crop/thosn4c78/monika-grabkowska-unsplash-m2WOWly9Xjf5oyG0.png" />
              </div>
              <div className={testing.food_btn}>
                <a href="">More articles</a>
              </div>
            {/* Food section end */}
          </div>

          {/* Shop section start */}
            <Shop />
          {/* Shop section end */}


          {/* Instagram section start */}
            <div className={testing.container}>
              <h2 className={testing.instagram_text}>Follow on Instagram @Thos</h2>
              <div className={testing.instagram_allImg}>
                <Instagram image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=304,fit=crop/thosn4c78/julia-peretiatko-JtBY-unsplash-A1aVa1b3aPCDL1bZ.png"/>
                <Instagram image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=304,fit=crop/thosn4c78/bryony-elena-XSnHHtOQzWA-unsplash-YrDOD1ve9nUEW5DN.png"/>
                <Instagram image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=304,fit=crop/thosn4c78/julia-peretiatko-TDQ-unsplash-AoPaPZ53wZup94re.png"/>
                <Instagram image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=304,fit=crop/thosn4c78/svitlana-unsplash-YbN6NnQXxKi056yz.png"/>
              </div>
            </div>
          {/* Instagram section End */}

          {/* Footer section start */}
           <Footer />
          {/* Footer section end */}

          

       </div>
    )
}
