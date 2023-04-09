<template>
  <body>
    <header-page></header-page>
    <div class="container-page">
      <div class="track-cover">
        <img
          :src="require(`../assets/images/covers/${current.img}.png`)"
          alt="user-photo"
          class="track-photo"
        />
        <div class="like__wrap">
          <p class="track-name">{{ current.title }}</p>
          <button class="reaction" @click="showReactions">
            <img
              src="../assets/images/icons/like.png"
              alt="like"
              class="reaction_like"
            />
          </button>
        </div>
        <p class="track-autor">{{ current.artists }}</p>
        <div v-if="isShow" class="reactions">
          <button @click="fire">
            <img src="../assets/images/icons/fire.svg" alt="fire" />
          </button>
          <button @click="heart">
            <img src="../assets/images/icons/love.svg" alt="heart" />
          </button>
          <button @click="angry">
            <img src="../assets/images/icons/angry.svg" alt="angry" />
          </button>
        </div>
      </div>

      <div class="tracks">
        <h1 class="tracks-title">Следующие треки</h1>
        <div class="track__item">
          <button
            v-for="song in songs"
            :key="song.src"
            @click="play(song)"
            :class="song.src == current.src ? 'song playing' : 'song'"
          >
            <img
              :src="require(`../assets/images/covers/${song.img}.png`)"
              class="img__track_next"
            />
            {{ song.title }}
            <br />
            {{ song.artists }}
            <div class="home-category-box">
              <p class="home-category-text">{{ song.category }}</p>
            </div>
            <div class="home-category-box">
              <p class="home-category-text">{{ song.category2 }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <section class="player">
      <div class="progress" ref="progress">
        <div class="progress__bar" @click="clickProgress">
          <div class="progress__current" :style="{ width: barWidth }"></div>
        </div>
        <div class="time">
          <div class="progress__time">{{ currentTime }}</div>
          <div class="progress__duration">{{ duration }}</div>
        </div>
      </div>
      <div v-cloak></div>
      <div class="player__bottom">
        <div class="volume">
          <img src="../assets/images/icons/player/Vector.svg">
          <input
            type="range"
            value="0" min="0" max="100"
            class="volume-range"
            ref="volume_range"
          />
        </div>
        <div class="song__text">
          <h2 class="song-title">
            {{ current.title }}
          </h2>
          <p class="song-author">{{ current.artists }}</p>
        </div>
        <img
          :src="require(`../assets/images/covers/${current.img}.png`)"
          class="img__track"
        />
        <button class="like">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.6498L8.55 17.3174C3.4 12.6032 0 9.48392 0 5.67824C0 2.559 2.42 0.12619 5.5 0.12619C7.24 0.12619 8.91 0.943856 10 2.22587C11.09 0.943856 12.76 0.12619 14.5 0.12619C17.58 0.12619 20 2.559 20 5.67824C20 9.48392 16.6 12.6032 11.45 17.3174L10 18.6498Z"
              fill="#E74242"
            />
          </svg>
        </button>
        <div class="control">
          <button class="prev" @click="prev">
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5 1.14404V17.632L14.1667 9.388L23.5 1.14404ZM10.6667 1.14404V17.632L1.33333 9.388L10.6667 1.14404Z"
                fill="#6247D1"
                stroke="#6247D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="play" v-if="!isPlaying" @click="play">
            <svg
              width="92"
              height="93"
              viewBox="0 0 92 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_304_1355)">
                <ellipse
                  cx="47"
                  cy="45.388"
                  rx="41"
                  ry="41.388"
                  fill="url(#paint0_linear_304_1355)"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                d="M40.1937 62.1136C39.2771 62.715 38.3485 62.7493 37.408 62.2163C36.4693 61.6851 36 60.8643 36 59.7539V31.0221C36 29.9117 36.4693 29.09 37.408 28.557C38.3485 28.0258 39.2771 28.061 40.1937 28.6625L62.6062 43.0284C63.4312 43.5836 63.8438 44.3701 63.8438 45.388C63.8438 46.4059 63.4312 47.1924 62.6062 47.7476L40.1937 62.1136Z"
                fill="#6247D1"
              />
              <defs>
                <filter
                  id="filter0_d_304_1355"
                  x="0"
                  y="0"
                  width="92"
                  height="92.776"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="1" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_304_1355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_304_1355"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_304_1355"
                  x1="47"
                  y1="4"
                  x2="47"
                  y2="86.776"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#110F10" />
                  <stop offset="1" stop-color="#110F10" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button class="pause" v-else @click="pause">
            <svg
              width="92"
              height="93"
              viewBox="0 0 92 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52 59V30H62V59H52ZM32 59V30H42V59H32Z" fill="#6247D1" />
              <g filter="url(#filter0_d_312_2753)">
                <ellipse
                  cx="47"
                  cy="45.388"
                  rx="41"
                  ry="41.388"
                  fill="url(#paint0_linear_312_2753)"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_312_2753"
                  x="0"
                  y="0"
                  width="92"
                  height="92.776"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="1" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_312_2753"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_312_2753"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_312_2753"
                  x1="47"
                  y1="4"
                  x2="47"
                  y2="86.776"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#110F10" />
                  <stop offset="1" stop-color="#110F10" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button class="next" @click="next">
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.14404V17.632L10.8333 9.388L1.5 1.14404ZM14.3333 1.14404V17.632L23.6667 9.388L14.3333 1.14404Z"
                fill="#6247D1"
                stroke="#6247D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button @click="toggleVisibility" class="settings">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_304_1863)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7501 2.95501C11.1022 2.75162 11.4987 2.63722 11.905 2.62171C12.3114 2.6062 12.7154 2.69006 13.0821 2.86601L13.2501 2.95501L19.5441 6.58801C19.898 6.7923 20.1965 7.08025 20.4134 7.42666C20.6303 7.77306 20.7589 8.16736 20.7881 8.57501L20.7941 8.75301V16.021C20.794 16.4296 20.6937 16.8319 20.5021 17.1928C20.3106 17.5536 20.0334 17.862 19.6951 18.091L19.5451 18.186L13.2501 21.82C12.8979 22.0234 12.5014 22.1378 12.0951 22.1533C11.6887 22.1688 11.2847 22.085 10.9181 21.909L10.7501 21.819L4.45605 18.188C4.10208 17.9837 3.80359 17.6958 3.58671 17.3494C3.36984 17.003 3.2412 16.6087 3.21205 16.201L3.20605 16.023V8.75401C3.20626 8.34535 3.30663 7.94297 3.4984 7.58209C3.69017 7.22122 3.96748 6.91286 4.30605 6.68401L4.45605 6.58901L10.7501 2.95501ZM12.2501 4.68701C12.187 4.65063 12.1167 4.62847 12.0441 4.62207C11.9716 4.61568 11.8985 4.62522 11.8301 4.65001L11.7501 4.68701L5.45605 8.32101C5.39304 8.35744 5.33873 8.40718 5.29693 8.46677C5.25513 8.52636 5.22685 8.59436 5.21405 8.66601L5.20605 8.75401V16.022C5.20613 16.0948 5.2221 16.1667 5.25284 16.2327C5.28359 16.2987 5.32837 16.3571 5.38405 16.404L5.45605 16.454L11.7501 20.089C11.8131 20.1254 11.8834 20.1476 11.956 20.1539C12.0285 20.1603 12.1016 20.1508 12.1701 20.126L12.2501 20.089L18.5441 16.455C18.6073 16.4187 18.6618 16.369 18.7037 16.3094C18.7457 16.2498 18.7741 16.1818 18.7871 16.11L18.7941 16.022V8.75401C18.7941 8.6813 18.7783 8.60945 18.7477 8.54347C18.7172 8.4775 18.6726 8.41898 18.6171 8.37201L18.5441 8.32101L12.2501 4.68701ZM12.0001 8.38801C13.0609 8.38801 14.0783 8.80944 14.8285 9.55958C15.5786 10.3097 16.0001 11.3271 16.0001 12.388C16.0001 13.4489 15.5786 14.4663 14.8285 15.2164C14.0783 15.9666 13.0609 16.388 12.0001 16.388C10.9392 16.388 9.92177 15.9666 9.17163 15.2164C8.42148 14.4663 8.00005 13.4489 8.00005 12.388C8.00005 11.3271 8.42148 10.3097 9.17163 9.55958C9.92177 8.80944 10.9392 8.38801 12.0001 8.38801ZM12.0001 10.388C11.4696 10.388 10.9609 10.5987 10.5858 10.9738C10.2108 11.3489 10.0001 11.8576 10.0001 12.388C10.0001 12.9184 10.2108 13.4272 10.5858 13.8022C10.9609 14.1773 11.4696 14.388 12.0001 14.388C12.5305 14.388 13.0392 14.1773 13.4143 13.8022C13.7893 13.4272 14.0001 12.9184 14.0001 12.388C14.0001 11.8576 13.7893 11.3489 13.4143 10.9738C13.0392 10.5987 12.5305 10.388 12.0001 10.388Z"
                fill="#6247D1"
              />
            </g>
            <defs>
              <clipPath id="clip0_304_1863">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.388016)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div class="song__text_next">
          <h2 class="song-title">
            {{ current.title }}
          </h2>
          <p class="song-author">{{ current.artists }}</p>
        </div>
        <img
          :src="require(`../assets/images/covers/${current.img}.png`)"
          class="img__track_clone"
        />
      </div>
      <div v-if="isVisible" class="tegs">
        <div class="tegs__wrapper">
          <div class="tegs__item">{{ current.category }}</div>
          <div class="tegs__item_2">{{ current.category2 }}</div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import Nextsongs from "../data/data.nextTracks";
import songs from "../data/data.nextTracks";
import Tracks from "../data/data.tracks";
import { shuffleArray } from "../helpers/utils";

export default {
  components: { HeaderPage },
  data() {
    return {
      current: {},
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isShow: false,
      index: 0,
      isPlaying: false,
      isVisible: false,
      songs: shuffleArray(Nextsongs),
      player: new Audio(),
    };
  },

  mounted() {
    this.addEventListener();
  },
  methods: {
    addEventListener() {
      this.$refs.volume_range.addEventListener(
        "input",
        this.handleVolumeProgress
      );
    },

    handleVolumeProgress(event) {
      let value = event.target.value;
      this.player.volume = value / 100;
      this.setLocalStorageData("volume", value);
    },

    setVolumeFromLocalStorage() {
      let volume = parseFloat(this.getLocalStorageData("volume")) || 100;
      let input = this.$refs.volume_range;
      this.player.volume = volume / 100;
      input.value = volume;
    },

    showReactions() {
      this.isShow = !this.isShow;
    },
    heart() {
      this.$confetti.start({
        particles: [
          {
            type: "heart",
            size: 8,
          },
        ],
        defaultColors: ["red"],
      });
      setTimeout(() => {
        this.$confetti.stop();
      }, 2000);
    },
    fire() {
      this.$confetti.start({
        particles: [
          {
            type: "image",
            url: "https://cdn-icons-png.flaticon.com/128/4325/4325956.png",
            size: 8,
          },
        ],
      });
      setTimeout(() => {
        this.$confetti.stop();
      }, 2000);
    },
    angry() {
      this.$confetti.start({
        particles: [
          {
            type: "image",
            url: "https://cdn-icons-png.flaticon.com/128/9805/9805014.png",
            size: 8,
          },
        ],
      });
      setTimeout(() => {
        this.$confetti.stop();
      }, 2000);
    },
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;

        this.player.src = this.current.src;
      }

      this.player.play();
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }

          this.current = this.songs[this.index];

          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];

      this.play(this.current);
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];

      this.play(this.current);
    },
    generateTime() {
      let width = (100 / this.player.duration) * this.player.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.player.duration / 60);
      let dursec = Math.floor(this.player.duration - durmin * 60);
      let curmin = Math.floor(this.player.currentTime / 60);
      let cursec = Math.floor(this.player.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.player.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.player.currentTime = (maxduration * percentage) / 100;
      this.player.play();
    },
    clickProgress(e) {
      this.isPlaying = true;
      this.player.pause();
      this.updateBar(e.pageX);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },

    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.player.currentTime = 0;
      this.player.src = this.current.source;
      setTimeout(() => {
        if (this.isPlaying) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }, 300);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;

    this.current = this.songs[this.index];
    this.player.src = this.current.src;

    let vm = this;
    this.player.ontimeupdate = function () {
      vm.generateTime();
    };
    this.player.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.player.onended = function () {
      vm.next();
      this.isPlaying = true;
    };
  },
};
</script>
