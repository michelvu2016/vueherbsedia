<template>
    <ul>
        <li>
            Home
        </li>
        <li>
            Herb Info
        </li>
        <li>
            What's Wrong
        </li>
        <li>
            Other Approach
        </li>
    </ul>
</template>
<script>
export default {
    name: "MenuBar"
}
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
</style>