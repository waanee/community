<template>
    <div>
    <div class="topScroll" style="">
        <a href="#" class="top" uk-scroll uk-icon="icon: chevron-up; ratio: 1"></a>
        <br>
        <!--<a href="#" class="reflash" @click="pageReflash()" uk-icon="icon: refresh; ratio: 1"></a>-->
    </div>
    <footer><div class="container">Copyright &copy; Travlog All Right Reserved.</div></footer>
    
    <div id="footer_bottom">
        <ul>
            <li><router-link to="/"><span uk-icon="icon: home"></span><br>Travle Feed</router-link></li>
            <li><router-link to="/map"><span uk-icon="icon: world"></span><br>Map</router-link></li>
            <li><router-link to="/bbs"><span uk-icon="icon: comments"></span><br>Bbs</router-link></li>
            <li><router-link to="/about"><span uk-icon="icon: info"></span><br>about</router-link></li>
        </ul>
    </div>

    </div>
</template>

<script>
export default {
    
}
</script>