export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer__container">
      <a className="footer__logo-link">
        <img className="footer__logo" src="img/logo.svg" alt="Логотип Cup Time" />
      </a>

      <div className="footer__nav">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">Чай</a>
          </li>

          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">Кофе</a>
          </li>

          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">Чайники</a>
          </li>

          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">Турки</a>
          </li>

          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">Прочее</a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <p className="footer__copyright">©CUPTIME, 2024</p>

        <ul className="footer__developers">
          <li className="footer__developer">Designer:
            <a className="footer__developer-link" href="#">Anastasia Ilina</a>
          </li>

          <li className="footer__developer">Developer:
            <a className="footer__developer-link" href="#">AlexeiWeb</a>
          </li>
        </ul>
      </div>

      <div className="footer__contacts">
        <a className="footer__email" href="mailto:CUPTIME@gmail.com">CUPTIME@gmail.com</a>

        <ul className="footer__social">
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3C8.824 3 3 8.824 3 16C3 23.176 8.824 29 16 29C23.176 29 29 23.176 29 16C29 8.824 23.176 3 16 3ZM22.032 11.84C21.837 13.894 20.992 18.886 20.563 21.187C20.381 22.162 20.017 22.487 19.679 22.526C18.925 22.591 18.353 22.032 17.625 21.551C16.481 20.797 15.831 20.329 14.726 19.601C13.439 18.756 14.271 18.288 15.012 17.534C15.207 17.339 18.535 14.31 18.6 14.037C18.609 13.9957 18.6078 13.9527 18.5965 13.9119C18.5852 13.8712 18.5641 13.8338 18.535 13.803C18.457 13.738 18.353 13.764 18.262 13.777C18.145 13.803 16.325 15.012 12.776 17.404C12.256 17.755 11.788 17.937 11.372 17.924C10.904 17.911 10.02 17.664 9.357 17.443C8.538 17.183 7.901 17.04 7.953 16.585C7.979 16.351 8.304 16.117 8.915 15.87C12.711 14.219 15.233 13.127 16.494 12.607C20.108 11.099 20.849 10.839 21.343 10.839C21.447 10.839 21.694 10.865 21.85 10.995C21.98 11.099 22.019 11.242 22.032 11.346C22.019 11.424 22.045 11.658 22.032 11.84Z" fill="white"/>
              </svg>              
            </a>
          </li>
  
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3337 14.0001L18.2537 10.0001L11.3337 6.00008V14.0001ZM26.747 3.56008C26.9203 4.18675 27.0403 5.02675 27.1203 6.09341C27.2137 7.16008 27.2537 8.08008 27.2537 8.88008L27.3337 10.0001C27.3337 12.9201 27.1203 15.0667 26.747 16.4401C26.4137 17.6401 25.6403 18.4134 24.4403 18.7467C23.8137 18.9201 22.667 19.0401 20.907 19.1201C19.1737 19.2134 17.587 19.2534 16.1203 19.2534L14.0003 19.3334C8.41366 19.3334 4.93366 19.1201 3.56033 18.7467C2.36033 18.4134 1.58699 17.6401 1.25366 16.4401C1.08033 15.8134 0.960326 14.9734 0.880326 13.9067C0.786992 12.8401 0.746992 11.9201 0.746992 11.1201L0.666992 10.0001C0.666992 7.08008 0.880326 4.93341 1.25366 3.56008C1.58699 2.36008 2.36033 1.58675 3.56033 1.25341C4.18699 1.08008 5.33366 0.960081 7.09366 0.880081C8.82699 0.786748 10.4137 0.746748 11.8803 0.746748L14.0003 0.666748C19.587 0.666748 23.067 0.880081 24.4403 1.25341C25.6403 1.58675 26.4137 2.36008 26.747 3.56008Z" fill="white"/>
              </svg>              
            </a>
          </li>
  
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3C8.82021 3 3 8.82021 3 16C3 23.1798 8.82021 29 16 29C23.1798 29 29 23.1798 29 16C29 8.82021 23.1798 3 16 3ZM20.9996 17.667C20.9996 17.667 22.1493 18.8018 22.4323 19.3285C22.4404 19.3394 22.4445 19.3502 22.4472 19.3556C22.5623 19.5493 22.5894 19.6996 22.5325 19.812C22.4377 19.9989 22.1127 20.0909 22.0017 20.0991H19.9704C19.8296 20.0991 19.5344 20.0625 19.1769 19.816C18.902 19.6238 18.6311 19.3082 18.3671 19.0008C17.973 18.5431 17.6318 18.1477 17.2878 18.1477C17.2441 18.1476 17.2007 18.1545 17.1592 18.168C16.8992 18.252 16.566 18.623 16.566 19.6116C16.566 19.9203 16.3223 20.0977 16.1503 20.0977H15.22C14.9031 20.0977 13.2524 19.9867 11.7899 18.4443C9.99969 16.5552 8.38823 12.7662 8.37469 12.731C8.27312 12.4859 8.48302 12.3546 8.71187 12.3546H10.7634C11.037 12.3546 11.1264 12.5211 11.1886 12.6687C11.2618 12.8407 11.5299 13.5246 11.97 14.2937C12.6836 15.5477 13.121 16.0569 13.4718 16.0569C13.5375 16.0561 13.6021 16.0394 13.66 16.0081C14.1177 15.7535 14.0324 14.1218 14.0121 13.7832C14.0121 13.7196 14.0107 13.0533 13.7765 12.7337C13.6085 12.5022 13.3228 12.4142 13.1495 12.3817C13.2196 12.2849 13.3121 12.2064 13.419 12.1528C13.7331 11.9957 14.2992 11.9727 14.8611 11.9727H15.174C15.7833 11.9808 15.9404 12.0201 16.1611 12.0756C16.608 12.1826 16.6175 12.471 16.5782 13.4582C16.566 13.7385 16.5539 14.0554 16.5539 14.4292C16.5539 14.5104 16.5498 14.5971 16.5498 14.6892C16.5363 15.1916 16.52 15.7617 16.8748 15.9959C16.9211 16.025 16.9745 16.0404 17.0292 16.0406C17.1524 16.0406 17.5234 16.0406 18.5282 14.3168C18.8381 13.7619 19.1074 13.1853 19.334 12.5916C19.3543 12.5564 19.4139 12.448 19.4843 12.406C19.5362 12.3795 19.5939 12.3661 19.6522 12.3668H22.064C22.3267 12.3668 22.5068 12.406 22.5406 12.5076C22.6002 12.6687 22.5298 13.1603 21.4289 14.6512L20.9373 15.2999C19.9393 16.608 19.9393 16.6744 20.9996 17.667Z" fill="white"/>
              </svg>              
            </a>
          </li>
        </ul>
      </div>      
    </div>
  </footer>
  )
}