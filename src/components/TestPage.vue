<template>
  <div class="hello">
    TEST PAge

    <ul uk-accordion id="accordion">
        <li>
            <a class="uk-accordion-title" href="#">11111</a>
            <div class="uk-accordion-content" onclick="asd()">asdasd</div>
        </li>
    </ul>

    <div @click="bttn">
      TEST BUTTON
    </div>

  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      
    }
  },
  methods : {
    bttn(){
      $('#accordion').hide();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
