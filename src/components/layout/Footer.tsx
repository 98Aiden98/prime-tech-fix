import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  setWarrantyModalOpen: (open: boolean) => void;
  setPrivacyModalOpen: (open: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setWarrantyModalOpen, setPrivacyModalOpen }) => {
  return (
    <footer className="bg-secondary py-12 mt-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-bold text-2xl flex items-center gap-1">
              <img src="/logos/company-logo-square.png" alt="Logo" className="w-8 h-8"></img>
              <span className="text-primary">СЦ</span>
              <span className="text-foreground">PRIME</span>
            </Link>
            <p className="text-muted-foreground mt-2">
              Профессиональный ремонт цифровой и бытовой техники с гарантией качества
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://vk.com/serviceprime" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                  <g fill="#717479" fill-rule="nonzero" stroke="currentColor" stroke-width="1.2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                    <g transform="scale(5.12,5.12)">
                      <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM23.39648,15.99219c-1.05749,-0.00243 -2.00043,0.05667 -2.84375,0.4707c-0.00065,0.00065 -0.0013,0.0013 -0.00195,0.00195c-0.41113,0.20256 -0.70091,0.45985 -0.93164,0.76563c-0.11537,0.15289 -0.23356,0.29013 -0.29687,0.63867c-0.03166,0.17427 -0.04944,0.45667 0.13281,0.76172c0.18226,0.30504 0.54873,0.4785 0.7832,0.50977c0.16288,0.02168 0.53054,0.17817 0.56445,0.22461c0.00065,0.0013 0.0013,0.00261 0.00195,0.00391c0.00024,0.00033 0.14258,0.372 0.18359,0.70313c0.04102,0.33112 0.03906,0.59961 0.03906,0.59961c-0.00042,0.02671 0.00023,0.05342 0.00195,0.08008c0,0 0.05793,0.86756 0.01953,1.76367c-0.0153,0.35715 -0.06149,0.67489 -0.10937,0.95898c-0.35611,-0.39316 -0.88084,-1.10515 -1.63867,-2.41797c-0.84069,-1.4572 -1.50977,-2.76367 -1.50977,-2.76367c-0.03514,-0.11382 -0.15941,-0.46794 -0.64453,-0.82422c-0.53033,-0.39087 -1.04297,-0.44922 -1.04297,-0.44922c-0.06431,-0.0129 -0.12973,-0.01944 -0.19531,-0.01953l-3.94141,0.00195c0,0 -0.23632,-0.01367 -0.51953,0.02539c-0.28322,0.03906 -0.70968,0.07085 -1.12109,0.55859c-0.00065,0.00065 -0.0013,0.0013 -0.00195,0.00195c-0.36769,0.43934 -0.34545,0.92493 -0.30078,1.19922c0.04466,0.27429 0.14453,0.48242 0.14453,0.48242c0.00193,0.00392 0.00388,0.00783 0.00586,0.01172c0,0 3.22389,6.77825 6.86719,10.76953c2.64568,2.89802 5.36122,2.94727 7.60156,2.94727h1.67188c0.42683,0 0.81292,-0.01668 1.24023,-0.26562c0.42732,-0.24895 0.71484,-0.855 0.71484,-1.27539c0,-0.44052 0.06577,-0.78682 0.14648,-0.96484c0.05676,-0.1252 0.1017,-0.17028 0.17188,-0.20703c0.01484,0.00941 0.00526,0.00394 0.04688,0.0332c0.16647,0.11707 0.44136,0.38393 0.74023,0.7168c0.59775,0.66574 1.27626,1.57889 2.1875,2.20508c0.65281,0.44899 1.26946,0.64837 1.73828,0.7207c0.29372,0.04532 0.52185,0.03659 0.68359,0.02344l3.73438,0.01563c0.02215,0.00008 0.0443,-0.00057 0.06641,-0.00195c0,0 0.64346,0.0075 1.3125,-0.39258c0.33452,-0.20006 0.72906,-0.57936 0.85742,-1.13281c0.12836,-0.55345 -0.03296,-1.12692 -0.34766,-1.65039c0,-0.00065 0,-0.0013 0,-0.00195c0.05465,0.0906 -0.04948,-0.09557 -0.15625,-0.26953c-0.10677,-0.17396 -0.2618,-0.40838 -0.48437,-0.69922c-0.44515,-0.58167 -1.15812,-1.39565 -2.31055,-2.46875c-0.00065,0 -0.0013,0 -0.00195,0c-0.58533,-0.54459 -0.98058,-0.93016 -1.14258,-1.14453c-0.162,-0.21437 -0.10887,-0.10176 -0.09766,-0.15625c0.02243,-0.10898 0.72492,-1.12238 2.1543,-3.03125c0.86889,-1.16189 1.47868,-2.03421 1.88086,-2.75977c0.40218,-0.72556 0.69217,-1.35393 0.49023,-2.12305c-0.00065,-0.0013 -0.0013,-0.00261 -0.00195,-0.00391c-0.08965,-0.33762 -0.33449,-0.64882 -0.58594,-0.81836c-0.25144,-0.16954 -0.48983,-0.23585 -0.70312,-0.27734c-0.42659,-0.08299 -0.79885,-0.06836 -1.14453,-0.06836c-0.72476,0 -3.94041,0.02539 -4.20508,0.02539c-0.31273,0 -0.82985,0.14224 -1.05859,0.2793c-0.57511,0.34608 -0.74023,0.80078 -0.74023,0.80078c-0.0104,0.01921 -0.02017,0.03875 -0.0293,0.05859c0,0 -0.66333,1.47093 -1.51758,2.92383c-0.86538,1.47373 -1.50468,2.17662 -1.89062,2.50195c-0.01062,-0.05786 -0.00879,-0.01088 -0.01562,-0.0918c-0.03459,-0.41154 0.00391,-0.98022 0.00391,-1.53516c0,-1.49451 0.12668,-2.54049 0.05859,-3.46484c-0.03404,-0.46217 -0.11965,-0.93876 -0.42383,-1.37695c-0.30417,-0.43819 -0.81031,-0.72286 -1.31055,-0.84375c-0.30015,-0.0724 -0.64229,-0.26071 -1.88086,-0.27344c-0.00065,0 -0.0013,0 -0.00195,0c-0.37877,-0.00379 -0.74321,-0.01091 -1.0957,-0.01172zM24.47266,18.00391c1.09597,0.01126 0.82297,0.07159 1.43164,0.21875c0.18876,0.04561 0.14303,0.04535 0.13867,0.03906c-0.0044,-0.0063 0.05106,0.09681 0.07227,0.38477c0.04242,0.5759 -0.06445,1.72092 -0.06445,3.31641c0,0.43507 -0.0525,1.05592 0.00195,1.70313c0.0544,0.6472 0.21492,1.47779 0.98828,1.97852c0.36659,0.23763 0.79224,0.2526 1.15625,0.16211c0.36401,-0.0905 0.69425,-0.27898 1.04102,-0.55664c0.69354,-0.55532 1.46711,-1.49254 2.43945,-3.14844c0.90881,-1.5457 1.56986,-3.01759 1.5918,-3.06641c0.00429,-0.00344 0.00864,-0.00581 0.01367,-0.00977c0.01249,0.00014 -0.00045,0 0.01563,0c0.37334,0 3.52984,-0.02539 4.20508,-0.02539c0.15763,0 0.21501,0.0095 0.33984,0.01367c-0.03393,0.11327 0.0038,0.04102 -0.14453,0.30859c-0.31107,0.56119 -0.88431,1.39519 -1.73242,2.5293c-1.39362,1.86113 -2.2574,2.5904 -2.51172,3.82617c-0.12716,0.61788 0.11116,1.30278 0.46094,1.76563c0.34978,0.46285 0.79128,0.85939 1.37695,1.4043c1.08457,1.0099 1.72083,1.74362 2.08594,2.2207c0.18255,0.23854 0.29763,0.41084 0.36914,0.52734c0.07151,0.11651 0.05384,0.10421 0.14648,0.25781c0.06099,0.10221 0.03852,0.03983 0.04883,0.07031c-0.1199,0.0338 -0.26516,0.07449 -0.27344,0.07617l-3.67773,-0.01562c-0.06624,-0.00004 -0.13232,0.0065 -0.19727,0.01953c0,0 0.0092,0.01082 -0.1875,-0.01953c-0.19673,-0.03035 -0.50962,-0.11548 -0.91211,-0.39258c-0.48576,-0.33381 -1.16579,-1.15056 -1.83203,-1.89258c-0.33312,-0.37101 -0.66534,-0.7273 -1.07812,-1.01758c-0.41278,-0.29028 -1.03045,-0.56324 -1.69727,-0.35352c-0.69222,0.21736 -1.23104,0.75758 -1.49414,1.33789c-0.19584,0.43197 -0.2117,0.88317 -0.24219,1.33203c-0.03319,0.0025 0.005,0 -0.03711,0h-1.67187c-2.27166,0 -3.88468,0.15711 -6.125,-2.29687c-3.01349,-3.30132 -5.77446,-8.79416 -6.22461,-9.69922l3.46875,-0.00195c0.06097,0.0234 0.19146,0.0724 0.19922,0.07813c0.0013,0.00131 0.0026,0.00261 0.00391,0.00391c-0.12679,-0.09268 0.00586,0.03711 0.00586,0.03711c0.01224,0.02994 0.02593,0.05927 0.04102,0.08789c0,0 0.68733,1.3428 1.55664,2.84961c0.85272,1.47719 1.47409,2.39998 2.07422,3.00977c0.30006,0.30489 0.60296,0.54942 1.00781,0.6875c0.40485,0.13808 0.92761,0.08743 1.2793,-0.10547c0.71843,-0.39327 0.81495,-0.97334 0.93164,-1.48047c0.11685,-0.50784 0.16337,-1.04884 0.18555,-1.56641c0.04304,-1.0046 -0.01783,-1.87404 -0.02148,-1.92773c0.00022,-0.01883 0.0048,-0.38139 -0.05273,-0.8457c-0.0589,-0.47545 -0.12459,-1.05676 -0.55469,-1.64258l-0.00195,-0.00195c-0.003,-0.0041 -0.00677,-0.00381 -0.00977,-0.00781c0.56875,-0.08157 1.0554,-0.18198 2.06641,-0.17187zM33.29492,18.98438l-0.01367,0.03125c-0.00212,0.00121 -0.00144,-0.00144 -0.00391,0c0.00423,-0.00806 0.01758,-0.03125 0.01758,-0.03125z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="https://t.me/serviceprime" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                  <g fill="#717479" fill-rule="nonzero" stroke="currentColor" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,2c-12.69071,0 -23,10.3093 -23,23c0,12.6907 10.30929,23 23,23c12.69071,0 23,-10.3093 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-11.60983,0 -21,-9.39017 -21,-21c0,-11.60982 9.39017,-21 21,-21zM34.08789,14.03516c-0.684,0 -1.45256,0.15842 -2.35156,0.48242c-1.396,0.503 -17.81559,7.47458 -19.68359,8.26758c-1.068,0.454 -3.05664,1.2985 -3.05664,3.3125c0,1.335 0.78227,2.28984 2.32227,2.83984c0.828,0.295 2.79455,0.89108 3.93555,1.20508c0.484,0.133 0.99834,0.20117 1.52734,0.20117c1.035,0 2.07658,-0.25789 2.89258,-0.71289c-0.007,0.168 -0.00242,0.33781 0.01758,0.50781c0.123,1.05 0.77047,2.03758 1.73047,2.64258c0.628,0.396 5.75744,3.83291 6.52344,4.37891c1.076,0.769 2.2655,1.17578 3.4375,1.17578c2.24,0 2.99152,-2.31283 3.35352,-3.42383c0.525,-1.613 2.49089,-14.72997 2.71289,-17.04297c0.151,-1.585 -0.50958,-2.89019 -1.76758,-3.49219c-0.471,-0.227 -1.00875,-0.3418 -1.59375,-0.3418zM34.08789,16.03516c0.275,0 0.52052,0.04548 0.72852,0.14648c0.473,0.227 0.71363,0.73305 0.64063,1.49805c-0.242,2.523 -2.20309,15.32928 -2.62109,16.61328c-0.358,1.098 -0.73512,2.04297 -1.45313,2.04297c-0.718,0 -1.50239,-0.25169 -2.27539,-0.80469c-0.773,-0.552 -5.90614,-3.99436 -6.61914,-4.44336c-0.625,-0.394 -1.28647,-1.37617 -0.35547,-2.32617c0.767,-0.782 6.58503,-6.42878 7.08203,-6.92578c0.37,-0.371 0.19698,-0.81836 -0.16602,-0.81836c-0.125,0 -0.27469,0.05269 -0.42969,0.17969c-0.608,0.497 -9.08436,6.169 -9.81836,6.625c-0.486,0.302 -1.23853,0.51953 -2.01953,0.51953c-0.333,0 -0.67014,-0.03991 -0.99414,-0.12891c-1.128,-0.311 -3.03692,-0.89016 -3.79492,-1.16016c-0.729,-0.26 -0.99414,-0.50908 -0.99414,-0.95508c0,-0.634 0.89489,-1.07166 1.83789,-1.47266c0.996,-0.423 18.23012,-7.74156 19.57812,-8.22656c0.624,-0.226 1.19483,-0.36328 1.67383,-0.36328z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="https://www.instagram.com/service_prime_13" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт телефонов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт ноутбуков
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт планшетов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт компьютеров
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт бытовой техники
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setWarrantyModalOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Условия гарантии
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Политика конфиденциальности
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+79297474511" className="hover:text-primary transition-colors">
                    8 (929) 747-45-11
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:serviceprime@mail.ru" className="hover:text-primary transition-colors">
                    serviceprime@mail.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                 г.Саранск, ул.Севастопольская, д. 56/2
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  Пн-Пт: 10:00-19:00<br />
                  Сб: 10:00-14:00
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
          <div className="text-xs mb-4">
            <p>ИП Косынкин Андрей Сергеевич</p>
            <p>ОГРНИП: 311132822000044, ИНН: 132813311343</p>
          </div>
          <p>© 2011 - {new Date().getFullYear()} СЦ PRIME. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
