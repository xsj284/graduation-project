<script setup lang="ts">
import { ElFooter } from 'element-plus'
</script>

<template>
    <ElContainer class="el-container-main">
        <ElHeader class="el-header">
            <slot name="header" />
        </ElHeader>
        <ElContainer>
            <ElAside class="el-aside">
                <ElScrollbar height="100%">
                    <slot name="aside" />
                </ElScrollbar>
            </ElAside>
            <ElContainer>
                <ElMain class="el-main">
                    <ElScrollbar height="100%">
                        <slot name="main" />
                    </ElScrollbar>
                </ElMain>
                <ElFooter class="el-footer"><slot name="footer" /></ElFooter>
            </ElContainer>
        </ElContainer>
    </ElContainer>
</template>

<style lang="scss" scoped>
.el-container-main {
    background-color: $main-dark;
    height: 100%;
}
.el-header {
    background-color: $main-dark;
    height: auto;
    display: flex;
    align-items: center;
}
.el-aside {
    height: 0;
    background-color: $main-light-1;
    margin: 4px;
    padding: 8px;
    border-radius: 8px;
}
.el-main {
    height: 0;
    background-color: $main-light-1;
    margin: 4px;
    padding: 8px;
    border-radius: 8px;
}

.el-footer {
    background-color: $main-light-1;
    margin: 4px;
    padding: 8px;
    border-radius: 8px;
}
</style>
