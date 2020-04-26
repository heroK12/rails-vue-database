import Vue from 'vue';
import axios from 'axios';
document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: '#bookid',
    data: {
      bookInfo: {},
      bookInfoBool: false
    },
    methods: {
      setBookInfo(id){
        axios.get(`api/v1/books/${id}.json`)
          .then(res => {
            this.bookInfo = res.data;
            this.bookInfoBool = true;
          });
      }
    }
  });
});