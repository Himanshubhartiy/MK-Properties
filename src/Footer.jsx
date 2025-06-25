import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white" id="contact__section">
      <div className="container-fluid">
        <div className="row">
          <div className="p-4 col-12 col-md-8">
            <h5>M K Properties</h5>
            <p>Aapke Sapno Ka Ghar, Hamari Zimmedari!</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4">
              <div className="text-center mb-3">
                <h5>Get In Touch</h5>
              </div>
              <div className="row justify-content-center gx-3">
                {[
                  {
                    href: "https://www.instagram.com/mkproperties785/",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                      >
                        <g fill="#00adb5">
                          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                        </g>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.facebook.com/mkproperties785",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="40"
                        height="40"
                      >
                        <g fill="#00adb5">
                          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                        </g>
                      </svg>
                    ),
                  },
                  {
                    href: "mailto:mkproperties785@gmail.com",
                    icon: (
                      <svg
                        fill="#00adb5"
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" />
                      </svg>
                    ),
                  },
                  {
                    href: "tel:8872961444",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="40"
                        height="40"
                      >
                        <g fill="#00adb5">
                          <path d="M 14 3.99 C 8.49 3.99 4 8.48 4 13.99 L 4 35.99 C 4 41.5 8.49 45.99 14 45.99 L 36 45.99 C 41.51 45.99 46 41.5 46 35.99 L 46 13.99 C 46 8.48 41.51 3.99 36 3.99 L 14 3.99 z M 18 12.03 C 18.63 12.06 19.21 12.41 19.56 12.96 C 19.95 13.58 20.57 14.53 21.37 15.78 C 22.1 16.92 22.15 18.4 21.5 19.59 L 20.03 21.67 C 19.63 22.24 19.56 22.96 19.82 23.6 C 20.24 24.58 21.04 26.11 22.47 27.53 C 23.89 28.96 25.41 29.76 26.4 30.18 C 27.04 30.44 27.76 30.36 28.33 29.97 L 30.41 28.5 C 31.6 27.85 33.07 27.9 34.21 28.63 C 35.46 29.43 36.42 30.04 37.04 30.44 C 37.59 30.79 37.94 31.37 37.97 31.99 C 38.12 35.56 35.36 37 34.56 37 C 34 37 27.32 37.76 19.78 30.22 C 12.24 22.68 13 16 13 15.44 C 13 14.64 14.44 11.88 18 12.03 z" />
                        </g>
                      </svg>
                    ),
                  },
                  {
                    href: "https://youtube.com/@mk_properties_785?si=PcKiTvWT_4A2_WUE",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="#00adb5"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div className="col-2 col-sm-2 text-center mb-2" key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="text-light mx-3" />
        <div className="row text-center text-md-start justify-content-between px-3 pb-3">
          <div className="col-12 col-md-6 mb-2">
            <p className="mb-0">© 2010 - 2025 MK Properties</p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="mb-0">Privacy Policy | Website Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
