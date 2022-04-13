import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

function slider(){
    var slider = tns({
        container: '.intro',
        items: 1,
        slideBy: 'page',
        autoplay: true
      });
}

export default slider;