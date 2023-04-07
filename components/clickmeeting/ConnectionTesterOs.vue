<template>
  <div>
    <p>System operacyjny: {{ os }}</p>
    <p>Wersja: {{ version }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      os: "",
      version: "",
    };
  },
  mounted() {
    this.os = this.getOS();
    this.version = this.getVersion();
  },
  methods: {
    getOS() {
      const platform = window.navigator.platform.toLowerCase();
      const osList = [
        {
          name: "Mac OS",
          keywords: ["macintosh", "macintel", "macppc", "mac68k"],
        },
        { name: "iOS", keywords: ["iphone", "ipad", "ipod"] },
        { name: "Windows", keywords: ["win"] },
        { name: "Linux", keywords: ["linux"] },
      ];
      const os = osList.find((os) =>
        os.keywords.some((keyword) => platform.includes(keyword))
      );
      return os ? os.name : "Inny";
    },
    getVersion() {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const versionList = [
        { name: "Mac OS", identifier: "mac os x", versionIndex: 1 },
        { name: "iOS", identifier: "iphone os", versionIndex: 0 },
        {
          name: "Windows",
          identifier: "windows nt",
          versionIndex: 0,
          versions: [
            { identifier: "10.0", name: "10" },
            { identifier: "6.3", name: "8.1" },
            { identifier: "6.2", name: "8" },
            { identifier: "6.1", name: "7" },
            { identifier: "6.0", name: "Vista" },
            { identifier: "5.1", name: "XP" },
            { identifier: "5.0", name: "2000" },
          ],
        },
      ];
      const os = versionList.find((os) => userAgent.includes(os.identifier));
      if (os) {
        if (os.versions) {
          const version = os.versions.find((version) =>
            userAgent.includes(version.identifier)
          );
          return version ? version.name : "Nieznana";
        } else {
          const parts = userAgent.split(os.identifier)[1].split(")");
          return parts[os.versionIndex].trim();
        }
      } else {
        return "Nieznana";
      }
    },
  },
};
</script>
