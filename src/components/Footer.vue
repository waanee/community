<template>
    <div>
    
    <div class="menu" style="">
        <button class="top" uk-icon="icon: menu; ratio: 1" type="button" uk-toggle="target: #offcanvas-slide"></button>
    </div>
    
    <footer><div class="container">Copyright &copy; Community All Right Reserved.</div></footer>
    
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