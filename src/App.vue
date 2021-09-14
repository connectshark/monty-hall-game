<template>
  <nav class="text-white bg-gray-800">
    <h1 class=" text-3xl font-sans py-3">
      <router-link to="/">{{title}}</router-link>
    </h1>
    <ul class=" py-3">
      <li>
        <router-link to="/about" class=" hover:underline">作者</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  setup () {
    return {
      title: '三扇門遊戲'
    }
  }
}
</script>


<style>
#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  text-align: center;
}
</style>
