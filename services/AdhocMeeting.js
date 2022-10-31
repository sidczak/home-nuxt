export const getAdhocMeetingUrl = async ($axios) => {
    const { url } = (
        await $axios.get(
            `${process.env.APP_HEFAJSTOS_URL}/api/panel/events/adhoc`
        )
    ).data;
    return url;
};

export const openUrl = (url, target = "_blank") => {
    window.open(url, target, "toolbar=0,location=0,menubar=0");
};

export const openAdhocMeeting = async ($axios, target) => {
    const url = await getAdhocMeetingUrl($axios);
    openUrl(url, target);
};

// @click='xopenAdhocMeeting'

// import { openAdhocMeeting } from '@services/AdhocMeeting';

// methods: {
//     async xopenAdhocMeeting() {
//         try {
//             this.isLoading = true;
//             await openAdhocMeeting(this.$axios);
//         } catch (e) {
//             console.log(e);
//         } finally {
//             this.isLoading = false;
//         }
//     },
// },
