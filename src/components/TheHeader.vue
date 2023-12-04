<template>
    <q-header class="header bg-white text-black">
        <div class="row">
            <div class="col header-logo"><b>Failasuf</b></div>
            <div class="col" align="right">
                <div class="header-menu">
                    <ul >
                        <router-link to="#hero-section"><li>Home</li></router-link>
                        <router-link to="#about-section"><li>About</li></router-link>
                        <router-link to="#projects-section"><li>Projects</li></router-link>
                        <router-link to="#contact-section"><li>Contact</li></router-link>
                    </ul>
                </div>
            </div>
        </div>
    </q-header>
</template>

<style scoped>
.header {
    padding: 0 10rem;
}

.header-logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
}

ul {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
}

ul li {
    display: inline-block;
    padding: 1rem 2rem;
}

li:hover {
    background-color: #02131e;
    color: white !important;
}

a {
    color: #000;
}

.isActive {
    color: red;
}



@media screen and (max-width: 600px) {
    .header {
    padding: 0 1rem;
    }

    ul {
        display: none;
    }

}




</style>