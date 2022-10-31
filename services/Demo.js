export class DemoService {
    static async getMountains($axios) {
        return await $axios.get("https://api.nuxtjs.dev/mountains");
    }
    static async getRivers($axios) {
        return await $axios.get("https://api.nuxtjs.dev/rivers");
    }
}
