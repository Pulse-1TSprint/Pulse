<template>
  <body>
    <HeaderPage />
    <div class="container-page">
      <div class="track-cover">
        <div class="track-photo"></div>
        <p class="track-name">Товарищ Сталин</p>
        <p class="track-autor">ANAZED</p>
      </div>
      <div class="tracks">
        <h1 class="tracks-title">Следующие треки</h1>
        <div class="track-item">
          <div class="track-item-photo"></div>
          <div class="track-item-block">
            <div class="track-item-title">Капканы</div>
            <div class="track-item-autor">Эндшпиль, HLOY</div>
          </div>
        </div>
        <div class="track-item">
          <div class="track-item-photo"></div>
          <div class="track-item-block">
            <div class="track-item-title">Капканы</div>
            <div class="track-item-autor">Эндшпиль, HLOY</div>
          </div>
        </div>
        <div class="track-item">
          <div class="track-item-photo"></div>
          <div class="track-item-block">
            <div class="track-item-title">Капканы</div>
            <div class="track-item-autor">Эндшпиль, HLOY</div>
          </div>
        </div>
        <div class="track-item">
          <div class="track-item-photo"></div>
          <div class="track-item-block">
            <div class="track-item-title">Капканы</div>
            <div class="track-item-autor">Эндшпиль, HLOY</div>
          </div>
        </div>
        <div class="track-item">
          <div class="track-item-photo"></div>
          <div class="track-item-block">
            <div class="track-item-title">Капканы</div>
            <div class="track-item-autor">Эндшпиль, HLOY</div>
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
  filter: drop-shadow(0px 1px 0px #6247D1);
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
import MusicPlayer from "../components/MusicPlayer.vue"
export default {
  components: { HeaderPage, MusicPlayer },
  
};
</script>

