<template>
  <main>
    <section class="banner">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :autoplay="{ delay: 3000 }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/image/banner.jpg" alt="banner圖" />
          <article class="content">
            <h2>RabbitFamily</h2>
            <p>The best for your bunny</p>
            <a
              href="#/products"
              class="btn btn-yellow text-white"
              >shop now</a
            >
          </article>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/banner3.jpg" alt="banner圖" />
          <article class="content">
            <h2 class="text-white">RabbitFamily</h2>
            <p class="text-white">The best for your bunny</p>
            <a href="#/products" class="btn btn-yellow text-white">shop now</a>
          </article>
        </swiper-slide>
      </swiper>
      <!-- <img src="@/assets/image/banner.jpg" alt="banner圖" />
      <article class="content">
        <h2>RabbitFamily</h2>
        <p>The best for your bunny</p>
        <a href="#/products" class="btn btn-outline-yellow">shop now</a>
      </article> -->
    </section>
    <section class="information">
      <article class="contact">
        <h3>聯絡我們</h3>
        <p>地址 : 台中市兔子家族</p>
        <p>連絡電話 : 04-12345678</p>
        <p>信箱 : rabbit_family@gmail.com</p>
      </article>
      <article class="follow">
        <h3>關注我們</h3>
        <article>
          <div class="fb">
            <a href="#">
              <i class="bi bi-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
          <div class="ig">
            <a href="#">
              <i class="bi bi-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </article>
      </article>
    </section>
  </main>
</template>

<style lang="scss">
.banner {
  position: relative;
  .swiper-pagination-bullet-active {
    background-color: #9e805a;
  }
  img {
    width: 100%;
    // height: calc(100vh - 82px);
    height: 820px;
    object-fit: cover;
    vertical-align: bottom;
  }
  .content {
    position: absolute;
    top: 80%;
    left: 10%;
    transform: translateY(-50%);
    h2 {
      font-size: 32px;
      margin-bottom: 16px;
      color: #54433c;
    }
    p {
      font-size: 28px;
      margin-bottom: 12px;
    }
    a {
      font-size: 20px;
      text-decoration: none;
      border-radius: 0px;
      padding: 4px 20px;
      // &:hover {
      //   color: white;
      // }
    }
  }
}
@media (min-width: 768px) {
  .banner{

    .content {
      top: 50%;
      left: 20%;
    }
  }
}
.information {
  background-color: #9e805a;
  width: 100%;
  color: #fff;
  padding: 20px;
  .contact {
    margin-bottom: 16px;
    h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }
    p {
      margin-bottom: 4px;
    }
  }
  .follow {
    h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }
    article {
      display: flex;
      gap: 8px;
      a {
        text-decoration: none;
        color: #fff;
      }
      i {
        font-size: 24px;
      }
      span {
        display: none;
      }
    }
  }
}
@media (min-width: 500px) {
  .information {
    display: flex;
    gap: 80px;
    justify-content: center;
    padding: 40px;
    .contact {
      position: relative;
      h3 {
        margin-bottom: 20px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #fff;
        top: 0;
        right: -40px;
      }
    }
    .follow {
      h3 {
        margin-bottom: 20px;
      }
      article {
        flex-direction: column;
        span {
          display: inline-block;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart", "getCart"]),
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.getCart();
  },
};
</script>
