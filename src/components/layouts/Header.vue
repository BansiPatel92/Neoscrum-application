<template>
    <div>
         <div class="container-fluid main"></div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
            <!-- <img src="../image/profileImage.png" alt="logo" style="width:50px;"> -->
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav list">
                <li class="nav-item">
                    <button @click.prevent="$router.push('feedback')" class="btn btn-outline-success my-2 my-sm-0">Add Feedback</button>
                </li>
                <span></span>
                <li class="nav-item">
                    <button class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="logoutuser">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods:{
        logoutuser(){
            localStorage.removeItem('currentuser');
            this.$router.push('/login');
        }
    }
}
</script>
