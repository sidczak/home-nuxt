<template>
  <div>
    <p>Pobieranie: {{ downloadSpeed }} Mbps</p>
    <p>Wysyłanie: {{ uploadSpeed }} Mbps</p>
  </div>
</template>

<script>
// import speedTest from "speedtest-net";

export default {
  data() {
    return {
      downloadSpeed: null,
      uploadSpeed: null,
    };
  },
  mounted() {
    this.runSpeedTest();
  },
  methods: {
    runSpeedTest() {
      // speedTest({ maxTime: 5000 }).on("data", (data) => {
      //   this.downloadSpeed = (data.speeds.download / 1000000).toFixed(2);
      //   this.uploadSpeed = (data.speeds.upload / 1000000).toFixed(2);
      // });
    },
  },
};
</script>

<!-- <template>
  <div>
    <p>Prędkość pobierania: {{ downloadSpeed }} Mbps</p>
    <p>Prędkość wysyłania: {{ uploadSpeed }} Mbps</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadSpeed: null,
      uploadSpeed: null,
    };
  },
  mounted() {
    this.getSpeeds();
  },
  methods: {
    getSpeeds() {
      const downloadImage = new Image();
      const uploadImage = new Image();

      const startTime = new Date().getTime();
      downloadImage.onload = () => {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = downloadImage.fileSize * 8;
        this.downloadSpeed = (bitsLoaded / duration / 1024 / 1024).toFixed(2);
      };
      downloadImage.src =
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" +
        "?n=" +
        Math.random();

      const startTime2 = new Date().getTime();
      const blob = new Blob(["data"], { type: "text/plain" });
      uploadImage.src = URL.createObjectURL(blob);
      uploadImage.onload = () => {
        const endTime2 = new Date().getTime();
        const duration2 = (endTime2 - startTime2) / 1000;
        const bitsLoaded2 = uploadImage.fileSize * 8;
        this.uploadSpeed = (bitsLoaded2 / duration2 / 1024 / 1024).toFixed(2);
      };
    },
  },
};
</script> -->

<!-- 
<template>
  <div>
    <p>Pobieranie: {{ downloadSpeed }} Mbps</p>
    <p>Wysyłanie: {{ uploadSpeed }} Mbps</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadSpeed: null,
      uploadSpeed: null,
    };
  },
  mounted() {
    this.runSpeedTest();
  },
  methods: {
    runSpeedTest() {
      const fileSize = 1000000; // 1 MB
      const downloadStartTime = new Date().getTime();
      const downloadUrl = `https://speed.hetzner.de/1GB.bin?x=${downloadStartTime}`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', downloadUrl, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          const downloadEndTime = new Date().getTime();
          const downloadTimeInSeconds = (downloadEndTime - downloadStartTime) / 1000;
          const downloadSpeedInMbps = ((fileSize / downloadTimeInSeconds) * 8) / 1000000;
          this.downloadSpeed = downloadSpeedInMbps.toFixed(2);
          this.uploadFile();
        }
      };
      xhr.send();
    },
    uploadFile() {
      const fileSize = 1000000; // 1 MB
      const uploadStartTime = new Date().getTime();
      const formData = new FormData();
      const blob = new Blob(['a'.repeat(fileSize)], { type: 'application/octet-stream' });
      formData.append('file', blob, 'test');
      const uploadUrl = 'https://speedtest.tele2.net/upload.php';
      fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((response) => {
          const uploadEndTime = new Date().getTime();
          const uploadTimeInSeconds = (uploadEndTime - uploadStartTime) / 1000;
          const uploadSpeedInMbps = ((fileSize / uploadTimeInSeconds) * 8) / 1000000;
          this.uploadSpeed = uploadSpeedInMbps.toFixed(2);
        });
    },
  },
};
</script> -->
