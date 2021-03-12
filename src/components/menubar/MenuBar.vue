<template>
    <ul>
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/info">Info</router-link>
        </li>
        <li>
            <router-link to="ailment">Ailment</router-link>
        </li>
        <li>
            <router-link to="/others">Other Approaches</router-link>
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
    ul > li {
        padding-right: 1.5rem;
        
    }

    li > a {
        text-decoration: none;
        color: rgb(49, 45, 41);
        font-weight: 600;
        font-size: 1.2em
    }

    li > a:hover {
        color: red;
    }

</style>