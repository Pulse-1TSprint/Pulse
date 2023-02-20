<template>

  <body>
    <HeaderPage />
    <div class="container-page">
      <div class="track-cover">
        <img src="../assets/images/MusicPhoto.png" alt="user-photo" class="track-photo" />
        <p class="track-name"> 1</p>
        <p class="track-autor"> 2</p>
      </div>
      <div class="tracks">
        <h1 class="tracks-title">Следующие треки</h1>
        <div class="track-item">
          <img src="../assets/images/MusicPhoto2.png" alt="user-photo" class="track-item-photo" />
          <div class="track-item-block">
            <div v-if="!songs" class="track-item-title">Загрузка..</div>
            <div v-else class="track-item-title" @click="playSound"> {{ songs[0].track_name }}</div>

            <div v-if="!songs" class="track-item-autor">Загрузка...</div>
            <div v-else class="track-item-autor">{{ songs[0].artist_name }}</div>
          </div>
        </div>
        <div class="track-item">
          <img src="../assets/images/MusicPhoto2.png" alt="user-photo" class="track-item-photo" />
          <div class="track-item-block">
            <div v-if="!songs" class="track-item-title">Загрузка..</div>
            <div v-else class="track-item-title"> {{ songs[1].track_name }}</div>

            <div v-if="!songs" class="track-item-autor">Загрузка...</div>
            <div v-else class="track-item-autor">{{ songs[1].artist_name }}</div>
          </div>
        </div>
        <div class="track-item">
          <img src="../assets/images/MusicPhoto2.png" alt="user-photo" class="track-item-photo" />
          <div class="track-item-block">
            <div v-if="!songs" class="track-item-title">Загрузка..</div>
            <div v-else class="track-item-title"> {{ songs[2].track_name }}</div>

            <div v-if="!songs" class="track-item-autor">Загрузка...</div>
            <div v-else class="track-item-autor">{{ songs[2].artist_name }}</div>
          </div>
        </div>
        <div class="track-item">
          <img src="../assets/images/MusicPhoto2.png" alt="user-photo" class="track-item-photo" />
          <div class="track-item-block">
            <div v-if="!songs" class="track-item-title">Загрузка..</div>
            <div v-else class="track-item-title"> {{ songs[3].track_name }}</div>

            <div v-if="!songs" class="track-item-autor">Загрузка...</div>
            <div v-else class="track-item-autor">{{ songs[3].artist_name }}</div>
          </div>
        </div>
        <div class="track-item">
          <img src="../assets/images/MusicPhoto2.png" alt="user-photo" class="track-item-photo" />
          <div class="track-item-block">
            <div v-if="!songs" class="track-item-title">Загрузка..</div>
            <div v-else class="track-item-title"> {{ songs[4].track_name }}</div>

            <div v-if="!songs" class="track-item-autor">Загрузка...</div>
            <div v-else class="track-item-autor">{{ songs[4].artist_name }}</div>
          </div>
        </div>



      </div>
    </div>
  </body>
  <MusicPlayer />
</template>

<style>
body {
  background: #110f10;
}

.container-page {
  display: flex;
  margin-top: 40px;
}

.track-cover {
  margin-left: 200px;
  margin-right: 260px;
}

.track-photo {
  width: 350px;
  height: 350px;
  background: #755384;
  filter: drop-shadow(0px 4px 43px #6247d1);
  border-radius: 36px;
  margin-bottom: 10px;
}

.track-name {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #ededed;
}

.track-autor {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #c0c0c0;
}

.tracks-title {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #ededed;
}

.track-item {
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.track-item-photo {
  width: 50px;
  height: 50px;
  background-color: #755384;
  margin-right: 17px;
  filter: drop-shadow(0px 1px 0px #6247d1);
  border-radius: 10px;
}

.track-item-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.track-item-title {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ededed;
}

.track-item-autor {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #ededed;
}
</style>
<script>
import HeaderPage from "../components/HeaderPage.vue";
import MusicPlayer from "../components/MusicPlayer.vue";
import axios from "axios";
export default {
  data() {
    return {
      songs: null
    };

  },

  methods: {
    async getSongs(count) {
      const response = await fetch(`http://localhost:3500/api/tracks/${count}`)
      this.songs = await response.json()
    },

    async play(id) {

    },

    playSound() {
      let context
      let request
      let source
      try {
        context = new AudioContext();
        request = new XMLHttpRequest();
        request.open(
          "GET",
          "http://localhost:3500/api/track/1",
          true
        );
        request.responseType = "arraybuffer";

        request.onload = () => {
          context.decodeAudioData(request.response, (buffer) => {
            source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            // autoplay
            source.start(0); // start was previously noteOn
          });
        };


        request.send();
      } catch (e) {
        alert("web audio api not supported");
      }
    }

  },

  mounted() {
    this.getSongs(5)
  },

  components: { HeaderPage, MusicPlayer }
};
</script>

