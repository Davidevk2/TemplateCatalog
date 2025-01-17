new Vue({
    el: "#app",
    data() {
      return {
        errorMessage: "",
        items: [],
      };
    },
    methods: {
      fetchData() {
        fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((data) => {
            this.items = data.results;
            console.log(data.results);
          })
          .catch((error) => {
            console.log("Error:", error);
            errorMessage = error;
          });
      },
    },
    created() {
      this.fetchData();
    },
  });