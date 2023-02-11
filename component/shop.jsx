import testing from "../styles/style.module.css";
export default function Shop(){
    return(
        <div className={testing.shop_bg}>
          <div className={testing.shop_allText}>
            <div className={testing.left_side}>
              <h2>It’s official: The <br /> best of Thos</h2>
              <p>You asked, we delivered. Thos’ best 100 recipes are <br /> now available as a hardback and we deliver worldwide!</p>
              <div className={testing.shop_btn}>
                <a href="">Go to shop</a>
              </div>
            </div>
            <div className={testing.right_side}>
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,h=496,fit=crop/thosn4c78/ProductPhoto-m2WOWbeEKQtK0kMp.png" alt="" />
            </div>
          </div>
      </div>
    )
}