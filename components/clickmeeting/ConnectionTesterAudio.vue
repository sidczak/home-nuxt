<!-- Komponent AudioTest -->
<template>
  <div>
    <h3>Testowanie Audio</h3>
    <audio ref="audio" :src="audioSrc" controls></audio>
    <div v-if="audioSupported" class="test-results">
      <p>Audio Codec: {{ audioCodec }}</p>
      <p>Audio Duration: {{ audioDuration }} seconds</p>
    </div>
    <div v-else>
      <p>Twoja przeglądarka nie obsługuje audio.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: "path/to/audio/file.mp3",
      audioSupported: true,
      audioCodec: "",
      audioDuration: 0,
    };
  },
  mounted() {
    this.testAudio();
  },
  methods: {
    testAudio() {
      const audio = this.$refs.audio;
      if (audio.canPlayType) {
        const supportedAudioFormats = ["audio/mpeg", "audio/ogg", "audio/wav"];
        let selectedFormat = null;
        for (let i = 0; i < supportedAudioFormats.length; i++) {
          if (audio.canPlayType(supportedAudioFormats[i]) === "probably") {
            selectedFormat = supportedAudioFormats[i];
            break;
          }
        }
        if (!selectedFormat) {
          selectedFormat = supportedAudioFormats[0];
        }
        this.audioCodec = selectedFormat.split("/")[1];
        audio.addEventListener("loadedmetadata", () => {
          this.audioDuration = audio.duration.toFixed(2);
        });
      } else {
        this.audioSupported = false;
      }
    },
  },
};
</script>
