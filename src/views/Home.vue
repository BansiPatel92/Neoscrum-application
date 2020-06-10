<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '../components/layouts/Header.vue';

export default {
    name:'Home',
    components: { Header },
    methods:{
    }
}
</script>