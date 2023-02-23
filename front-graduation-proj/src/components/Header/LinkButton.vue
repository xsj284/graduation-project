<script setup lang="ts">
const props = defineProps<{
    linkName: string
    link: string
    isSelf?: boolean
}>()
function gotoPage() {
    open(props.link, props.isSelf ? '_self' : '_blank')
}
</script>

<template>
    <button @click="gotoPage" class="button">{{ linkName }}</button>
</template>

<style lang="scss" scoped>
.button {
    padding: 6px;
    margin: 6px;
    font-size: 18px;
    color: #e8e8e8;
    height: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: #9333ff;
        border-radius: 4px;
        transform: scale(1.1);
        box-shadow: 4px 5px 17px -4px #9333ff;
    }
}
</style>
