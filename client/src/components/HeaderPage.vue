<template>
  <div class="container">
    <div class="logo">
      <a href="#" class="logo-pulse">Pulse</a>
    </div>
    <div class="wrapp">
      <div class="search-box">
        <input type="text" class="search" placeholder="Поиск" />
      </div>
      <div class="chart">
        <a href="#" class="chart-link">Чарт</a>
      </div>
      <div class="load">
        <a href="#" class="load-link">Загрузить</a>
      </div>
    </div>
    <div class="profile">
      <div class="user-data">
        <p class="user-name">Сычев Юрий</p>
        <p class="user-id">id 845789478</p>
      </div>
      <div class="user-photo"></div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.logo-pulse {
  margin: 31px 54px;
  text-decoration: none;
  width: 115px;
  height: 58px;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  color: #ededed;
}
.wrapp {
  display: flex;
}
.search {
  background-color: #110f10;
  border: 0px;
  outline: none;
  width: 71px;
  height: 29px;
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ededed;
  margin-left: 500px;
}
.chart-link {
  text-decoration: none;
  width: 54px;
  height: 29px;
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ededed;
  margin-left: 36px;
}
.load {
  width: 144px;
  height: 33px;
  background: #1c1147;
  border-radius: 31px;
  margin-left: 36px;
}
.load-link {
  text-decoration: none;
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ededed;
}
.profile {
  margin: 31px 54px;
  display: flex;
  align-items: center;
}
.user-name {
  width: 97px;
  height: 20px;
  left: 1699px;
  top: 44px;
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #ededed;
}
.user-id {
  width: 63px;
  height: 12px;
  left: 1733px;
  top: 63px;
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #676767;
}
.user-photo {
  width: 48px;
  height: 48px;
  background: #755384;
  border: 2px solid #1c1147;
  border-radius: 50%;
}
.user-data {
  margin-right: 30px;
}
</style>

<script>
export default {};
</script>