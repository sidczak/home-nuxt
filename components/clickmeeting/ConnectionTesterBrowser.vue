<template>
  <div>
    <p>{{ browserName }}</p>
    <p v-if="browserVersion">Version: {{ browserVersion }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      browserName: "",
      browserVersion: "",
    };
  },
  created() {
    const browsers = [
      { name: "Mozilla Firefox", pattern: /Firefox\/([\d.]+)/ },
      { name: "Opera", pattern: /(Opera|OPR)\/([\d.]+)/ },
      { name: "Microsoft Internet Explorer", pattern: /Trident\/([\d.]+)/ },
      { name: "Microsoft Edge", pattern: /Edge\/([\d.]+)/ },
      { name: "Google Chrome", pattern: /(Chrome|CriOS)\/([\d.]+)/ },
      { name: "Apple Safari", pattern: /Version\/([\d.]+).*Safari/ },
    ];

    const userAgent = navigator.userAgent;
    const matchedBrowser = browsers.find((browser) =>
      browser.pattern.test(userAgent)
    );
    if (matchedBrowser) {
      this.browserName = matchedBrowser.name;
      this.browserVersion = userAgent.match(matchedBrowser.pattern)[1];
    } else {
      this.browserName = "Unknown browser";
    }
  },
};
</script>
