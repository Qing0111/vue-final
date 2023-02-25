<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-double-ring-juf8237g2sc">
      <div class="ldio-1prs6fceeog">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <Navbar></Navbar>
  <main>
    <section class="banner">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :autoplay="{ delay: 3000 }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/image/banner.jpg" alt="banner圖" />
          <article class="content">
            <h2>RabbitFamily</h2>
            <p>The best for your bunny</p>
            <router-link
              to="/products?category=全部"
              class="btn btn-yellow text-white"
              >shop now</router-link
            >
          </article>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/banner3.jpg" alt="banner圖" />
          <article class="content">
            <h2 class="text-white">RabbitFamily</h2>
            <p class="text-white">The best for your bunny</p>
            <router-link to="/products" class="btn btn-yellow text-white"
              >shop now</router-link
            >
          </article>
        </swiper-slide>
      </swiper>
    </section>
    <div class="container-md">
      <section
        class="main-content"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        <section class="product-commodity">
          <router-link to="/products?category=飼料">
            <figure>
              <img src="@/assets/image/發泡飼料.jpg" alt="" />
              <div class="content">
                <h2>飼料</h2>
                <p>shop now</p>
              </div>
            </figure>
          </router-link>
          <router-link to="/products?category=兔用品">
            <figure>
              <img src="@/assets/image/兔籠子.jpg" alt="" />
              <div class="content">
                <h2>兔用品</h2>
                <p>shop now</p>
              </div>
            </figure>
          </router-link>
        </section>
        <section class="new-product">
          <h2>兔用新品</h2>
          <div class="row g-3">
            <div
              class="col-md-4"
              v-for="item in filterData"
              :key="item.id"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <article class="card product-card">
                <router-link
                  :to="{
                    name: 'product',
                    params: { product: item.id },
                    query: { name: item.title },
                  }"
                >
                  <div class="pic">
                    <img :src="item.imageUrl" class="card-img-top" alt="圖片" />
                  </div>
                </router-link>

                <div class="card-body">
                  <h5 class="card-title fs-5">{{ item.title }}</h5>
                  <p class="card-text" v-if="!item.price">
                    {{ item.origin_price }} 元
                  </p>
                  <p class="card-text" v-if="item.price">
                    NT${{ item.origin_price }}
                  </p>
                  <div class="group">
                    <div
                      class="shop"
                      @click="addToCart(item.id)"
                      :disabled="cartLoading == item.id"
                    >
                      <i class="bi bi-cart3"></i>
                    </div>
                    <div
                      class="heart"
                      @click="toggleFavorite(item.id)"
                      :class="{ active: favoriteItems.includes(item.id) }"
                    >
                      <i
                        class="bi bi-suit-heart-fill"
                        v-if="favoriteItems.includes(item.id)"
                      ></i>
                      <i class="bi bi-suit-heart" v-else></i>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          class="rabbit"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <router-link to="/products?category=兔子">
            <figure>
              <img src="@/assets/image/rabbit.jpg" alt="" />
              <div class="content">
                <h2>兔子</h2>
                <p>shop now</p>
              </div>
            </figure>
          </router-link>
        </section>

        <section class="introduce">
          <h2>兔子介紹</h2>
          <swiper
            ref="{swiperRef}"
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :navigation="true"
            :breakpoints="{ 768: { slidesPerView: 2 } }"
            class="mySwiper"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <template v-for="(item, key) in introduce" :key="key">
              <swiper-slide>
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </section>
      </section>
    </div>

    <section class="information bg-yellow-deep">
      <article
        class="contact"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h3>聯絡我們</h3>
        <p>地址 : 台中市兔子家族</p>
        <p>連絡電話 : 04-12345678</p>
        <p>信箱 : rabbit_family@gmail.com</p>
      </article>
      <article
        class="follow"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h3>關注我們</h3>
        <article>
          <div class="fb">
            <a href="#/">
              <i class="bi bi-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
          <div class="ig">
            <a href="#/">
              <i class="bi bi-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </article>
      </article>
    </section>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scope>
.banner {
  position: relative;
  .swiper-pagination {
    padding-bottom: 32px;
  }
  .swiper-pagination-bullet-active {
    background-color: #9e805a;
  }
  img {
    width: 100%;
    height: 420px;

    object-fit: cover;
    vertical-align: bottom;
  }
  .content {
    position: absolute;
    top: 56%;
    left: 8%;
    h2 {
      font-size: 28px;
      margin-bottom: 16px;
      color: #54433c;
    }
    p {
      font-size: 20px;
      margin-bottom: 12px;
    }
    a {
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
  .banner {
    img {
      height: 820px;
    }
    .content {
      top: 50%;
      left: 16%;
      transform: translateY(-50%);
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 28px;
      }
      a {
        font-size: 20px;
      }
    }
  }
}

.main-content {
  padding: 8px;
  position: relative;
  top: -36px;
  z-index: 3;
  background-color: #fff;
  // box-shadow: 1px -1px 3px #ccc;
  .product-commodity {
    margin-bottom: 40px;
    a {
      width: 100%;
    }
    figure {
      width: 100%;
      position: relative;
      transition: transform 0.3s;
      margin-bottom: 20px;
      &:hover {
        transform: scale(1.03);
        z-index: 1;
      }
      img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        object-position: center 80%;
        vertical-align: bottom;
      }
      .content {
        position: absolute;
        left: 10%;
        top: 40%;
        z-index: 1;
        h2 {
          font-size: 24px;
          color: #fff;
          margin-bottom: 12px;
        }
        p {
          display: inline;
          color: #e9bf84;
          border-bottom: 1px solid #e9bf84;
        }
      }
      &:after {
        content: "";
        position: absolute;
        inset: 0 0;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }
  @media (min-width: 768px) {
    padding: 20px;
  }

  .new-product {
    margin-bottom: 40px;
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      position: relative;
      color: #54433c;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgb(84, 67, 60);
        left: 0;
        bottom: -8px;
      }
    }
    .product-card {
      box-shadow: 1px 1px 2px #ccc;
      transition: box-shadow 0.5s;
      &:hover {
        box-shadow: none;
      }
      .pic {
        width: 100%;
        position: relative;
        &::after {
          content: "see more";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0 0;
          color: #fff;
          font-size: 24px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(84, 67, 60, 0.5);
          clip-path: circle(50px at center);
        }
        img {
          width: 100%;
          object-fit: cover;
          height: 240px;
          cursor: pointer;
          vertical-align: bottom;
        }
      }
    }
    .group {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 4px;
      gap: 8px;
    }
    .shop {
      cursor: pointer;
      border: 1px solid #c8a472;
      padding: 6px;
      border-radius: 50%;
      color: #c8a472;
      &:hover {
        background-color: #c8a472;
        color: #fff;
      }
      i {
        font-size: 20px;
      }
    }
    .heart {
      cursor: pointer;
      border: 1px solid #c8a472;
      padding: 6px;
      border-radius: 50%;
      color: #c8a472;
      &:hover,
      &.active {
        background-color: #c8a472;
        color: #fff;
      }
      i {
        font-size: 20px;
      }
    }
  }
}

.rabbit {
  margin-bottom: 40px;
  figure {
    width: 100%;
    position: relative;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      vertical-align: bottom;
    }
    .content {
      position: absolute;
      left: 10%;
      top: 40%;
      z-index: 1;
      h2 {
        font-size: 24px;
        color: #fff;
        margin-bottom: 12px;
      }
      p {
        color: #e9bf84;
        border-bottom: 1px solid #e9bf84;
      }
    }
    &:after {
      content: "";
      position: absolute;
      inset: 0 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}

.introduce {
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    position: relative;
    color: #54433c;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgb(84, 67, 60);
      left: 0;
      bottom: -8px;
    }
  }
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      .card {
        height: 252px;
        .card-title {
          font-size: 18px;
        }
        .card-text {
          line-height: 1.5;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      // color: rgba(84, 67, 60, 0.6);
      color: rgb(233, 191, 132, 0.7);
      background-color: rgba(0, 0, 0, 0.3);
      padding: 12px;
    }
  }
}

@media (min-width: 768px) {
  .main-content {
    padding: 16px;
    position: relative;
    top: -36px;
    z-index: 3;
    background-color: #fff;
    // box-shadow: 1px -1px 3px #ccc;
    .product-commodity {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
      a {
        width: 100%;
      }
      figure {
        width: 100%;
        position: relative;
        transition: transform 0.3s;
        margin-bottom: 0px;
        &:hover {
          transform: scale(1.03);
          z-index: 1;
        }
      }
    }

    .new-product {
      margin-bottom: 40px;

      .product-card {
        .pic {
          &::after {
            content: "";
            clip-path: circle(300px at center);
            transition: clip-path 0.3s;
          }
          img {
            height: 300px;
          }
        }
        &:hover .pic::after {
          content: "see more";
          clip-path: circle(50px at center);
        }
      }
    }
    .rabbit {
      figure {
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }
}

.information {
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
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";

import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default {
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },
  mixins: [localFavorite],
  data() {
    return {
      newProduct: [],
      favoriteItems: this.getLocalFavorite() || [],
      introduce: [
        {
          title: "成長期",
          content:
            "兔寶寶成長期速度很快，6個月就成年了，繁殖能力強，一胎4至12隻，平均壽命5至8歲。 未滿6個月幼兔主食「苜蓿草及飼料」，通常幼兔只吃葉子比較多，因為怕咬不動，飼料太大顆一定要剪小一點比較好，注意要喝乾淨的水，不可以喝生水，避免拉肚子。",
        },
        {
          title: "兔子飼養方式",
          content:
            "基本上配備是固定式碗或者比較重的陶瓷碗避免打翻，固定式飲水器，如果用一般水碗給兔寶寶喝水容易打翻，這樣子是不行的，也會造成身上濕濕冷冷的還可能會黴菌或皮膚病，兔寶寶一開始還不會用便盆，2至3個月後才會懂得使用便盆，把便盆放在牠固定便便的角落喔，要多花一點耐心與時間。",
        },
        {
          title: "環境",
          content:
            "需要足夠運動空間（不可以在磁磚地板跑喔，一定要鋪墊子）避免後腳受傷，室內要通風，溫度20至25度是兔子喜歡的溫度，環境太悶熱造成中暑，食慾不振。",
        },
        {
          title: "個性",
          content:
            "兔寶寶個性比較敏感，聲音太大會嚇到牠們的，會造成緊張或拉肚子，剛到新環境的兔寶寶需要7天適應環境，先給予牧草，水，如果牠不願意給摸，先不要勉強牠，好好認識新主人的味道，可以準備小點心當獎勵多培養感情。",
        },
        {
          title: "剪指甲",
          content:
            "通常需要2個人幫忙，一個抱住牠，一個剪，如果你是老手，一個人就能完成任務，但是要注意安全，因為兔寶寶脊椎非常脆弱，一不小心就會造成永久性傷害，如果有狀況馬上就醫，如果兔子不願意剪時，可以請寵物店的專業人士幫你剪。",
        },
        {
          title: "兔子品種",
          content:
            "台灣常見的品種：迷你兔的體重1.5～2.2公斤，侏儒兔體重1.2～1.5公斤，獅子兔體重1.6～2.2公斤，兔子品種體型，體重也會有所差異。",
        },
      ],
    };
  },
  computed: {
    ...mapState(productStore, ["products"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),

    filterData() {
      let filterValue = [];
      filterValue = this.products.filter(
        (item) =>
          item.title == "飲水器" ||
          item.title == "床墊" ||
          item.title == "陶瓷碗"
      );
      return filterValue;
    },
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),
  },
  created() {
    // console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.getProducts();
    this.getCart();
    AOS.init({});
  },
};
</script>
