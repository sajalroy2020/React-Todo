import testing from "../styles/style.module.css";
export default function Footer (){
    return(
        <div className={testing.footer_bg}>
        <h3 className={testing.footer_text}>Subscribe to our newsletter</h3>
        <div className={testing.email}>
            <label className={testing.emailText}>Email address<sup>*</sup></label>
            <input className={testing.emailBox}type="email" placeholder="Your email address" />
        </div>
        <div className={testing.footer_btn}>
          <a href="">Subscribe</a>
        </div>
      </div>
    )
}