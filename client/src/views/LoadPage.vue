<template>
  <div class="upload_pg">
    <HeaderPage></HeaderPage>
    <form action="http://localhost:3500/upload" method="post">
    <div class="container-pg">
      <div class="info">
        <img class="photo" src="../assets/images/photo.png" alt="photo" />
        <h2></h2>
        <h3></h3>
        <button class="submit_button" @click="uploadButtonPressed">Загрузить</button>
        <!-- <button class="submit_button" @click="onUploadFile" :disabled="!this.selectedFile">Загрузить</button> -->
      </div>
      
      <div class="load">
        <div class="track_info">
          <h3 class="track_info_title">Загрузить трек</h3>

          <div class="file-upload">
            <!-- <button @click="onUploadFile" class="upload-button"
          :disabled="!this.selectedFile">Upload file</button> -->
            <input type="file" @change="onFileChange" />
            
          </div>

          <div class="track_info_1">
            <label for="form_artist">Имя исполнителя</label>
            <input id="form_artist" v-model="artist" type="text" class="input">
          </div>

          <div class="track_info_1">
            <label for="form_name">Название</label>
            <input id="form_name" v-model="track_name" type="text" class="input">
          </div>

          <div class="track_info_1">
            <label for="">Год выпуска</label>
            <input type="text" v-model="year" class="input">
          </div>

          <div class="track_info_1">
            <label for="">Описание трека</label>
            <input type="text" v-model="desc" class="input">
          </div>


        </div>
        <div class="tags_lyrics">
          <div class="tags">

          </div>
          <div class="lyrics"></div>
        </div>
      </div>
    </div>
  </form>
  </div>

  

</template>

<style>
.upload_pg {
  color: #fff;
  background-color: #0f0617;
  min-height: 100vh;
}

.container-pg {
  display: flex;
  margin-top: 40px;
  margin-left: 300px;
  margin-right: 300px;
}

input {
  color: #FFF;
}


.photo {
  width: 400px;
  height: 400px;
}

.track_info {
  padding: 36px 36px 0px 36px;
  width: 421px;
  min-height: 600px;
  background: rgba(28, 17, 71, 0.6);
  box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 36px 36px 0px 0px;
}

.track_info_title {
  font-size: 32px;
  text-align: left;
  font-weight: 400;
}

.input {
  width: 348px;
  height: 37px;
  background: #1c1147;
  border-radius: 64px;
  border: none;
}

.submit_button {
  color: #fff;
  background-color: #6247D1;
  border-radius: 25%;
  width: 200px;
  height: 100px;
}
</style>

<script>
import { ref, onBeforeMount } from "vue";
import HeaderPage from "@/components/HeaderPage.vue";
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: "",
      artist: "",
      track_name: "",
      year: "",
      desc: ""
    };
  },
  methods: {
    async uploadButtonPressed(e) {
      e.preventDefault()
      console.log("Button was pressed");

      if (!this.artist) {
        console.log("Artist is empty");
      }
      if (!this.track_name) {
        console.log("Track name is empty");
      }
      if (!this.year) {
        console.log("Year is empty");
      }

      const formData = new FormData()
      console.log(`${this.artist} - ${this.track_name}`);
      formData.append("artist", this.artist)
      formData.append("name", this.track_name)
      formData.append("year", this.year)
      formData.append("file", this.selectedFile)
      
      // Список пар ключ/значение
      for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
      }

      // try {
      //   const res = await axios.post('http://localhost:3500/api/upload_form', formData)
      //   console.log(res);
      // } catch(e) {
      //   console.log(e);
      // }

      // axios({
      //   method: "post",
      //   url: "http://localhost:3500/api/upload_form",
      //   headers: { "Content-Type": "multipart/form-data" },
      // }, formData)
      //   .then(function (response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(function (response) {
      //     //handle error
      //     console.log(response);
      //   });

      axios
            .post("http://localhost:3500/api/upload", formData)
            .then(res => {
            console.log(res);
        })
            .catch(err => {
            console.log(err);
        });

    },




    onFileChange(e) {
        const selectedFile = e.target.files[0]; // accessing file
        this.selectedFile = selectedFile;
    },
  //   onUploadFile(e) {
  //     e.preventDefault()
  //       const formData = new FormData();
  //       formData.append("file", this.selectedFile); // appending file
  //       // sending file to the backend
  //       axios
  //           .post("http://localhost:3500/api/upload", formData)
  //           .then(res => {
  //           console.log(res);
  //       })
  //           .catch(err => {
  //           console.log(err);
  //       });
  // }
},
components: { HeaderPage }
};
</script>



