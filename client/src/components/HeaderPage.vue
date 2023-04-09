<template>
  <div class="container">
    <div class="logo">
      <a href="/" class="logo-pulse">Pulse</a>
    </div>
    <div class="wrapp">
      <div class="search-box">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4752 15.7496L9.37708 10.6515C8.92189 11.0156 8.39842 11.3039 7.80667 11.5164C7.21492 11.7288 6.58523 11.835 5.91762 11.835C4.26375 11.835 2.86419 11.2624 1.71893 10.1171C0.573057 8.97123 0.00012207 7.57136 0.00012207 5.9175C0.00012207 4.26363 0.573057 2.86377 1.71893 1.71789C2.86419 0.572632 4.26375 0 5.91762 0C7.57148 0 8.97135 0.572632 10.1172 1.71789C11.2625 2.86377 11.8351 4.26363 11.8351 5.9175C11.8351 6.58511 11.7289 7.21479 11.5165 7.80654C11.3041 8.39829 11.0158 8.92176 10.6516 9.37696L15.7725 14.4979C15.9394 14.6648 16.0229 14.8696 16.0229 15.1124C16.0229 15.3551 15.9318 15.5676 15.7498 15.7496C15.5829 15.9165 15.3704 16 15.1125 16C14.8546 16 14.6421 15.9165 14.4752 15.7496ZM5.91762 10.0142C7.0556 10.0142 8.02303 9.61608 8.81992 8.8198C9.61621 8.02291 10.0143 7.05548 10.0143 5.9175C10.0143 4.77952 9.61621 3.81208 8.81992 3.01519C8.02303 2.21891 7.0556 1.82077 5.91762 1.82077C4.77964 1.82077 3.8122 2.21891 3.01531 3.01519C2.21903 3.81208 1.82089 4.77952 1.82089 5.9175C1.82089 7.05548 2.21903 8.02291 3.01531 8.8198C3.8122 9.61608 4.77964 10.0142 5.91762 10.0142Z"
            fill="#EDEDED"
          />
        </svg>

        <input type="text" class="search__header" placeholder="Поиск" />
      </div>
      <div id="sidemenu">
    <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item"><router-link to="/chart">Чарт</router-link></li>
            <li class="sidemenu__item"><router-link to="/load">Загрузить</router-link></li>
            <li class="sidemenu__item"><router-link to="/login">Войти</router-link></li>
            <li class="sidemenu__item"><router-link to="/register">Регистрация</router-link></li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
      <div class="chart">
        <a href="/chart" class="chart-link">Чарт</a>
      </div>
      <div class="load">
        <a href="/load" class="load-link">Загрузить</a>
      </div>
    </div>
    <div class="authoization">
      <button class="auth-header"><router-link to="/login">Войти</router-link></button>
      <button class="auth-header"><router-link to="/register">Регистрация</router-link></button>
    </div>
  </div>
</template>

<style>
.container {
  background-color: #110f10;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 34px 56px 34px 56px;
  justify-content: space-between;
}

.logo-pulse {
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
  align-items: center;
  margin-left: auto;
}

.search__header {
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
  margin-left: 6px;
}
.search::placeholder {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ededed;
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
.authoization {
  display: flex;
  align-items: center;
  margin-left: 78px;
}

.auth-header {
  margin-left: 20px;
  width: 120px;
  height: 33px;
  background: #1c1147;
  border-radius: 35px;
  border: none;
}

.auth-header a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}


#sidemenu nav {
  display: none;
  width: 100%;
  background: #110f10;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
#sidemenu .sidemenu__btn {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  position: relative;
  z-index: 100;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  outline: none;
}
#sidemenu .sidemenu__btn span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}
#sidemenu .sidemenu__btn span.top {
  transform: translateY(-8px);
}
#sidemenu .sidemenu__btn span.bottom {
  transform: translateY(8px);
}
#sidemenu .sidemenu__btn.active .top {
  transform: rotate(-45deg);
}
#sidemenu .sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}
#sidemenu .sidemenu__btn.active .bottom {
  transform: rotate(45deg);
}
#sidemenu .sidemenu__wrapper {
  padding-top: 50px;
}
#sidemenu .sidemenu__list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
}
#sidemenu .sidemenu__item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: 0.5em;
  display: block;
  color: white;
  transition: 0.4s ease;
}
#sidemenu .sidemenu__item a:hover {
  background: lightgrey;
  color: dimgrey;
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}



@media (max-width: 1024px) {
  .authoization{
    margin-left: 26px;
  }
  .load {
    width: 100px;
    margin-left: 24px;
  }
  .load-link {
    font-size: 16px;
  }
  .logo-pulse {
    font-size: 36px;
  }
  .auth-header {
    width: 100px;
  }

  .auth-header a {
    font-size: 14px;
  }
  .chart-link {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    #sidemenu .sidemenu__btn {
      display: block;
    }
    .auth-header {
      display: none;
    }
    .chart-link {
      display: none;
    }
    #sidemenu nav {
      display: block;
    }
    .load {
      display: none;
    }
  }

  @media (max-width: 575px) {
    .container {
      padding: 20px 15px 20px 15px;
    }
    .authoization{
      margin-left: 15px;
    }
    .chart-link {
      margin-left: 15px;
    }
  }

  @media (max-width: 376px) {
    .container {
      padding: 10px 5px 10px 5px;
    }
    .chart-link {
      font-size: 18px;
    }
    .search__header {
      font-size: 18px;
    }
    .logo-pulse {
      font-size: 32px;
    }
  }
}
</style>

<script>
export default {
	el: '#sidemenu',
	data() {
    return {
      navOpen: true,
    }
	},
};


</script>
