<template>
  <button class="wd-button" :class="[`wd-button--${type}`,{isplain: plain}]">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'WdButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang=scss>
  .wd-button {
    /* 设置为内联块级元素 */
    display: inline-block;
    /* 设置间距问题 */
    line-height: 1;
    /* 设置不换行 */
    white-space: nowrap;
    /* 设置手指手势 */
    cursor: pointer;
    /* 设置白色背景 */
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606226;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .wd-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .wd-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background-color: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .wd-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background-color: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  .wd-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background-color: #f7b34a;
      border-color: #f7b34a;
      color: #fff;
    }
  }
  .wd-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background-color: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }

  .wd-button.isplain {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }

  .wd-button--primary.isplain {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .wd-button--success.isplain {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background-color: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .wd-button--info.isplain {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background-color: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  .wd-button--warning.isplain {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background-color: #f7b34a;
      border-color: #f7b34a;
      color: #fff;
    }
  }
  .wd-button--danger.isplain {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background-color: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
</style>
