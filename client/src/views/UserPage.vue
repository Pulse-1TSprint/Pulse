<template>
  <div class="user">
    <!--Компонент хедера-->
    <div class="wrapper">
      <div class="user__info">
        <img src="../assets/images/photo.png" alt="user_photo" />
        <div class="user__descr">
          <h3 class="user__name">{{ name }}</h3>
          <router-link to="/load" class="goLoad"
            >Редактировать профиль</router-link
          >
        </div>
        <div class="user__social">
          <a href="#"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_133_1478)">
                <path
                  d="M0 15.36C0 8.1192 0 4.49884 2.24942 2.24942C4.49884 0 8.1192 0 15.36 0H16.64C23.8808 0 27.5011 0 29.7506 2.24942C32 4.49884 32 8.1192 32 15.36V16.64C32 23.8808 32 27.5011 29.7506 29.7506C27.5011 32 23.8808 32 16.64 32H15.36C8.1192 32 4.49884 32 2.24942 29.7506C0 27.5011 0 23.8808 0 16.64V15.36Z"
                  fill="#0077FF"
                />
                <path
                  d="M17.0267 23.0534C9.73332 23.0534 5.57339 18.0534 5.40005 9.7334H9.05339C9.17339 15.8401 11.8667 18.4267 14 18.9601V9.7334H17.4401V15.0001C19.5468 14.7734 21.7599 12.3734 22.5065 9.7334H25.9466C25.3733 12.9867 22.9733 15.3867 21.2666 16.3734C22.9733 17.1734 25.7067 19.2667 26.7467 23.0534H22.9599C22.1466 20.5201 20.1201 18.5601 17.4401 18.2934V23.0534H17.0267Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_133_1478">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs></svg
          ></a>
          <a href="#"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_133_1481)">
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="url(#paint0_linear_133_1481)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.24251 15.8311C11.9068 13.7989 15.0171 12.4592 16.5734 11.8119C21.0167 9.96372 21.94 9.64267 22.5418 9.63207C22.6742 9.62974 22.9701 9.66254 23.1618 9.81809C23.3237 9.94944 23.3682 10.1269 23.3895 10.2514C23.4108 10.3759 23.4374 10.6596 23.4163 10.8813C23.1755 13.4112 22.1336 19.5508 21.6036 22.3844C21.3793 23.5835 20.9376 23.9855 20.5101 24.0248C19.581 24.1103 18.8754 23.4108 17.9755 22.8209C16.5673 21.8978 15.7717 21.3231 14.4048 20.4224C12.8251 19.3814 13.8492 18.8092 14.7494 17.8742C14.985 17.6294 19.0789 13.9058 19.1581 13.568C19.168 13.5257 19.1772 13.3682 19.0837 13.2851C18.9901 13.2019 18.852 13.2304 18.7524 13.253C18.6112 13.285 16.3615 14.772 12.0035 17.7138C11.365 18.1522 10.7866 18.3659 10.2684 18.3547C9.69709 18.3423 8.59817 18.0317 7.78124 17.7661C6.77924 17.4404 5.98287 17.2682 6.05221 16.715C6.08833 16.4269 6.4851 16.1323 7.24251 15.8311Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_133_1481"
                  x1="16"
                  y1="0"
                  x2="16"
                  y2="31.7627"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AABEE" />
                  <stop offset="1" stop-color="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_133_1481">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#ED1D24" />
              <path d="M11 22L23 15.5001L11 9V22Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
      <div class="playlist">
        <h3 class="playlist__title">Мне нравится</h3>
        <div class="search">
          <input type="text" placeholder="Поиск" class="playlist__search" />
          <svg
            class="search__icon"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M10.8563 11.8122L7.03272 7.98862C6.69132 8.26173 6.29872 8.47795 5.85491 8.63727C5.4111 8.79659 4.93883 8.87624 4.43812 8.87624C3.19772 8.87624 2.14805 8.44677 1.2891 7.58782C0.429701 6.72842 0 5.67852 0 4.43812C0 3.19772 0.429701 2.14782 1.2891 1.28842C2.14805 0.429474 3.19772 0 4.43812 0C5.67852 0 6.72842 0.429474 7.58782 1.28842C8.44677 2.14782 8.87625 3.19772 8.87625 4.43812C8.87625 4.93883 8.79659 5.41109 8.63727 5.85491C8.47795 6.29872 8.26174 6.69132 7.98862 7.03272L11.8293 10.8734C11.9545 10.9986 12.0171 11.1522 12.0171 11.3343C12.0171 11.5164 11.9488 11.6757 11.8122 11.8122C11.6871 11.9374 11.5277 12 11.3343 12C11.1408 12 10.9815 11.9374 10.8563 11.8122ZM4.43812 7.51067C5.29161 7.51067 6.01718 7.21206 6.61485 6.61485C7.21206 6.01718 7.51067 5.29161 7.51067 4.43812C7.51067 3.58464 7.21206 2.85906 6.61485 2.26139C6.01718 1.66418 5.29161 1.36558 4.43812 1.36558C3.58464 1.36558 2.85906 1.66418 2.26139 2.26139C1.66418 2.85906 1.36558 3.58464 1.36558 4.43812C1.36558 5.29161 1.66418 6.01718 2.26139 6.61485C2.85906 7.21206 3.58464 7.51067 4.43812 7.51067Z"
              fill="#EDEDED"
              fill-opacity="0.7"
            />
          </svg>
        </div>
        <div class="tracks__wrapper">
          <div class="track__item">
            <img src="../assets/images/track.png" alt="track" />
            <div class="track__item_info">
              <p class="track__title">СЕРДЦЕ НАПОПОЛАМ</p>
              <p class="track__author">Смоки Мо</p>
            </div>
          </div>
          <div class="track__item">
            <img src="../assets/images/track.png" alt="track" />
            <div class="track__item_info">
              <p class="track__title">СЕРДЦЕ НАПОПОЛАМ</p>
              <p class="track__author">Смоки Мо</p>
            </div>
          </div>
          <div class="track__item">
            <img src="../assets/images/track.png" alt="track" />
            <div class="track__item_info">
              <p class="track__title">СЕРДЦЕ НАПОПОЛАМ</p>
              <p class="track__author">Смоки Мо</p>
            </div>
          </div>
          <div class="track__item">
            <img src="../assets/images/track.png" alt="track" />
            <div class="track__item_info">
              <p class="track__title">СЕРДЦЕ НАПОПОЛАМ</p>
              <p class="track__author">Смоки Мо</p>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about__user">
          <h3 class="about__user_title">Расскажите о себе</h3>
          <div class="edit">
            <input type="text" class="edit__input" />
            <svg
              class="edit__icon"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10.1403V12.1667C0 12.3534 0.146647 12.5 0.333288 12.5H2.35968C2.44633 12.5 2.53299 12.4667 2.59298 12.4L9.87199 5.12767L7.37233 2.62801L0.0999865 9.90035C0.0333289 9.96701 0 10.047 0 10.1403ZM11.8051 2.25472L10.2453 0.694936C10.1836 0.633142 10.1104 0.584117 10.0297 0.550667C9.94908 0.517218 9.86264 0.5 9.77534 0.5C9.68804 0.5 9.6016 0.517218 9.52096 0.550667C9.44032 0.584117 9.36707 0.633142 9.3054 0.694936L8.08557 1.91477L10.5852 4.41443L11.8051 3.1946C11.8669 3.13293 11.9159 3.05968 11.9493 2.97904C11.9828 2.8984 12 2.81196 12 2.72466C12 2.63736 11.9828 2.55092 11.9493 2.47028C11.9159 2.38964 11.8669 2.31639 11.8051 2.25472Z"
                fill="#EDEDED"
                fill-opacity="0.7"
              />
            </svg>
          </div>
        </div>
        <div class="playlists__list">
          <h3 class="playlists__list_title">Плейлисты</h3>
          <div class="playlists__wrapper">
            <div class="playlists__item">Бег</div>
            <div class="playlists__item_2">Тренировка</div>
            <div class="playlists__item_3">Шансон</div>
          </div>
        </div>
      </div>
    </div>
    <music-player></music-player>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { auth } from "../firebase";
import MusicPlayer from "../components/MusicPlayer.vue";
export default {
  components: { MusicPlayer },
  setup() {
    const name = ref("");
    const store = useStore();
    onBeforeMount(() => {
      const user = auth.currentUser;
      if(user) {
        name.value = user.email.split('@')[0];
      }
      store.dispatch("fetchUser");
    });

    return {
      name
    }
  },
};
</script>
