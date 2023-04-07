<template>
  <div>
    <h3>Testowanie Video</h3>
    <video ref="video" :src="videoSrc" controls></video>
    <div v-if="videoSupported" class="test-results">
      <p>Video Codec: {{ videoCodec }}</p>
      <p>Video Duration: {{ videoDuration }} seconds</p>
      <p>Video Dimensions: {{ videoWidth }}x{{ videoHeight }}</p>
    </div>
    <div v-else>
      <p>Twoja przeglądarka nie obsługuje video.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: "path/to/video/file.mp4",
      videoSupported: true,
      videoCodec: "",
      videoDuration: 0,
      videoWidth: 0,
      videoHeight: 0,
    };
  },
  mounted() {
    this.testVideo();
  },
  methods: {
    testVideo() {
      const video = this.$refs.video;
      if (video.canPlayType) {
        const supportedVideoFormats = ["video/mp4", "video/webm", "video/ogg"];
        let selectedFormat = null;
        for (let i = 0; i < supportedVideoFormats.length; i++) {
          if (video.canPlayType(supportedVideoFormats[i]) === "probably") {
            selectedFormat = supportedVideoFormats[i];
            break;
          }
        }
        if (!selectedFormat) {
          selectedFormat = supportedVideoFormats[0];
        }
        this.videoCodec = selectedFormat.split("/")[1];
        video.addEventListener("loadedmetadata", () => {
          this.videoDuration = video.duration.toFixed(2);
          this.videoWidth = video.videoWidth;
          this.videoHeight = video.videoHeight;
        });
      } else {
        this.videoSupported = false;
      }
    },
  },
};
</script>
