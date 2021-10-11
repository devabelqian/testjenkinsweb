
<template>
  <div>
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view />
      </div>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { ConfigProvider } from "ant-design-vue";

export default {
  name: "App",
  data() {
    return {
      locale: zhCN,
    };
  },
  components: {
    AConfigProvider: ConfigProvider,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
