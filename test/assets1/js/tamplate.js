class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container d-flex align-items-center">
  
        <!-- <h1 class="logo me-auto"><a href="index.html">Rapid</a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html" class="logo me-auto"><img src="assets/img/LOGO Digital.png" alt="" class="img-fluid"></a>
  
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="index.html">Home</a></li>
            <li><a class="nav-link scrollto" href="about.html">About Us</a></li>
            <li class="dropdown"><a href="#"><span>Service & Solutions</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="erp-system.html">ERP System</a></li>
                <li><a href="scada.html">Scada</a></li>
                <li><a href="service.html">Service</a></li>
                <li><a href="market-platform.html">Marketplace Platform</a></li>
                <li><a href="ar.html">AR (Augmented Reality)</a></li>
                <li><a href="ai.html">AI (Artificial Intelligent)</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="blog.html">Blogs</a></li>
            <li><a class="nav-link scrollto" href="join-us.html">Join Us</a></li>
            <li><a class="nav-link scrollto " href="portfolio.html">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="contact-us.html">Contact Us</a></li>
            <li><a class="nav-link scrollto" href="helps.html">Helps</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
        <div class="social-links">
          <a href="https://twitter.com/digitalpage2" target="tab_" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100083466331948" target="tab_" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/erpeazy.digitalaccess" target="tab_" class="instagram"><i class="bi bi-instagram"></i></a>
        </div>
  
      </div>
      
    `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <footer id="footer" class="section-bg">
    <div class="content-footer">
      <div class="left-footer">
        <div class="logo">
          <a href="index.html" class="logo me-auto"><img src="assets/img/LOGO Digital.png" alt="" class="img-fluid"></a>
        </div>

        <div class="site-map">  
          <h3>Site Map</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Service & Solutions</li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Join Us</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Helps</a></li>
          </ul>
        </div>
      </div>

      <div class="right-footer">
        
        <div class="contact">
          <h3>Contact Us</h3>
          <div class="address">
            <i class="bi bi-building-fill-add"></i> 123 ERP Solutions Building, 4th Floor, Bangkok, Thailand 
          </div>
          <div class="tel">
            <i class="bi bi-telephone-fill"></i> 091-123-4678
          </div>
          <div class="email">
            <i class="bi bi-envelope-at-fill"></i> info@digital.co.th
          </div>
        </div>

        <div class="socail-media">
          <h3>Socail Media</h3>
          <div class="social-links">
          <a href="https://twitter.com/digitalpage2" target="tab_" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100083466331948" target="tab_" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/erpeazy.digitalaccess" target="tab_" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        
      </div>

    </div>
  </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
      -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  `;
  }
}

customElements.define("my-footer", MyFooter);
