<template>
  <div id="app">
    <div class="row">
      <wd-button>默认按钮</wd-button>
      <wd-button type='primary'>主要按钮</wd-button>
      <wd-button type='success'>成功按钮</wd-button>
      <wd-button type='info'>信息按钮</wd-button>
      <wd-button type='warning'>警告按钮</wd-button>
      <wd-button type='danger'>危险按钮</wd-button>
    </div>

    <div class="row">
      <!-- 增加plain就是朴素按钮 -->
      <wd-button>默认按钮</wd-button>
      <wd-button type='primary' plain>主要按钮</wd-button>
      <wd-button type='success' plain>成功按钮</wd-button>
      <wd-button type='info' plain>信息按钮</wd-button>
      <wd-button type='warning' plain>警告按钮</wd-button>
      <wd-button type='danger' plain>危险按钮</wd-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .row {
    margin-bottom: 20px;
    .wd-button {
    margin-right: 20px;
    }
  }
</style>
