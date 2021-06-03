<template>
    <div>
        <div id="map" style="width:100%;height:400px;"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e3f615e6039c30edd69a69d65b194e1e';
            document.head.appendChild(script);
        }
    },

    methods: {
        initMap() {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                center: new kakao.maps.LatLng(36.3552172, 127.382338), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
                };

            var map = new kakao.maps.Map(mapContainer, mapOption);
        }
    }

}

</script>

