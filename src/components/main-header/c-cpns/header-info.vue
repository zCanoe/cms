<script setup lang="ts">
import {
  ChatDotRound,
  InfoFilled,
  Lock,
  Message,
  Remove,
  Search,
} from "@element-plus/icons-vue";
</script>

<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <span class="dot"></span>
        <el-icon>
          <Message />
        </el-icon>
      </span>
      <span>
        <el-icon>
          <ChatDotRound />
        </el-icon>
      </span>
      <span>
        <el-icon>
          <Search />
        </el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="drop">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon>
                <Remove />
              </el-icon>
              退出登陆
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon>
                <InfoFilled />
              </el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <Lock />
              </el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.header-info {
  display: flex;
}

.operation {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;

    &:hover {
      cursor: pointer;
      background-color: #f7f7f7;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 9;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.info {
  cursor: pointer;
  display: flex;
  align-items: center;

  .drop {
    border: none !important;
  }
}
</style>
