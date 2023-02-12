<template>
  <div class="chart-and-authors">
    <div class="chart">
      <h2 class="chart-h2">Чарт</h2>
      <div class="chart-period-box">
        <div class="chart-period-title">За месяц</div>
      </div>
      <div class="chart-period-box">
        <div class="chart-period-title">За неделю</div>
      </div>

      <div class="chart-track-list">
      </div>

    </div>
    <div class="authors">
      <h2 class="authors-h2">Авторы</h2>
    </div>
  </div>
  
</template>

<style>
body{
background-color: #110F10; 
}

.chart-and-authors{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 56px;
position: absolute;
width: 1188px;
height: 1524px;
left: 366px;
top: 199px;

}

.authors{
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 36px;
gap: 36px;
width: 448px;
height: 1074.3px;
background: rgba(28, 17, 71, 0.6);
border-radius: 36px;

}
.chart{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 36px;
gap: 36px;
width: 684px;
height: 1524px;
background: rgba(28, 17, 71, 0.6);
border-radius: 36px;

}
.authors-h2{
width: 130px;
height: 1420px;
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 44px;
text-align: right;
color: #FFFFFF;
}
.chart-h2{
width: 81px;
height: 44px;
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 44px;
color: #EDEDED;
}
.chart-period-box{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 16px 6px;
isolation: isolate;
background: #1C1147;
border-radius: 64px;
margin-top: 5px;
}
.chart-period-title{
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #EDEDED;
margin-top: 10px;
}

.chart-track-list{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;
width: 510px;
height: 860.61px;
overflow-y: scroll;
overflow: auto;
-ms-overflow-style: none;
scrollbar-width: none;
}
</style>

<script>
export default {

}
</script>
