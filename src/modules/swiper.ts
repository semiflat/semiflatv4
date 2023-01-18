import SwiperCore, { Autoplay, Navigation  } from "swiper";
import "swiper-autoplay.css";

import type { UserModule } from "~/types";

import "swiper.css";
import "swiper-navigation.css";

export const install: UserModule = () => {
  SwiperCore.use([Navigation, Autoplay]);
};
