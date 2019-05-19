<template>
  <div id="app">
    Hello World!
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/faq">Go To FAQ</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    metaInfo:{
      title:'default title'
    }
  };
</script>