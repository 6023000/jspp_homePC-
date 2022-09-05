import $ from 'jquery';

import '../styles/resets.css';
import '../styles/common.css';
import '../styles/iconfont.css';
import '../styles/ui.scss';
import '../styles/header.scss';
import '../styles/carousel.scss';
import '../styles/mainTitle.scss';
import '../styles/recomCourse.scss';
import '../styles/collection.scss';
import '../styles/courseItem.scss';
import '../styles/teacher.scss';
import '../styles/footer.scss';

import Carousel from '../modules/Carousel';
import HeaderSearch from '../modules/HeaderSearch';

;(($) => {
  
  const headerSearch = HeaderSearch($);

  const init = () => {
  	new Carousel().init();
    headerSearch.init();
  }

  init();
})($);