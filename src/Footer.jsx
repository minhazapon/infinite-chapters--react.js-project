



const Footer = () => {
    return (
        <div className=" ml-16 mr-16 mt-28 ">
          
        
 
          <footer className="footer   text-base-content book p-5">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    required
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item" />
                  <button className="btn  bg-cyan-600 book text-white  join-item">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </footer>
            
        </div>
    );
};

export default Footer;