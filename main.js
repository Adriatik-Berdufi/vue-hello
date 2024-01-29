const {createApp} = Vue;

createApp ({
    data() {
        return {
            text : `Hello Vue`,
            img: `https://img.freepik.com/free-photo/concept-nebula-with-galaxies-deep-space-cosmos-discovery-outer-space-stars-universe_90220-1141.jpg`,
        }
    }
}).mount('#app')