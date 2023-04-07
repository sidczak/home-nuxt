<template>
  <div>
    <h3>Testowanie kamery internetowej</h3>
    <video ref="video" :src="videoSrc" autoplay></video>
    <div v-if="cameraSupported" class="test-results">
      <p>
        Rozmiar obrazu kamery internetowej: {{ videoWidth }}x{{ videoHeight }}
      </p>
    </div>
    <div v-else>
      <p>Kamera internetowa nie jest obsługiwana.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: null,
      cameraSupported: true,
      videoWidth: 0,
      videoHeight: 0,
    };
  },
  mounted() {
    this.testCamera();
  },
  methods: {
    testCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const video = this.$refs.video;
          video.srcObject = stream;
          video.play();
          video.addEventListener("loadedmetadata", () => {
            this.videoWidth = video.videoWidth;
            this.videoHeight = video.videoHeight;
          });
        })
        .catch((error) => {
          console.error("Błąd podczas pobierania strumienia wideo:", error);
          this.cameraSupported = false;
        });
    },
  },
};
</script>
