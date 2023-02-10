<!-- <template>
  <div>
    <h1>Music Uploader</h1>
    <form id="uploadForm">
        <input type="file" id="myFiles" accept="audio/*" multiple />
        <button>Submit</button>
    </form>
    <h2></h2>
    <h3></h3>
  </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      selecredFile: "",
    };
  },
  methods: {

  }
}
</script> -->

<template>
  <div class="file-upload">
    <input type="file" @change="onFileChange" />
    <button @click="onUploadFile" class="upload-button"
    :disabled="!this.selectedFile">Upload file</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: "",
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);  // appending file

     // sending file to the backend
      axios
        .post("http://localhost:3500/upload", formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>