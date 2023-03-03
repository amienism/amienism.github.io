<template>
    <div id="hero-section">
        <q-img src="@/assets/images/codebg1.jpg" fit="fill" :ratio="16/9" class="bg-img"></q-img>
        <div class="hero-text">
            <h1><b>Hello There,</b> <q-icon name="waving_hand" color="white" /></h1>
            <p>My name is <b>Muhammad Amin Failasuf</b>, fullstack programmer.</p>
            <div class="hero-cta">
                <q-btn color="white" outline label="Download CV"></q-btn>
                <q-btn color="white" outline href="//github.com/amienism" target="_blank">
                    <template v-slot:default>
                        <q-icon class="q-mr-sm">
                            <img src="@/assets/icons/github.png" />
                        </q-icon>
                        
                        Github
                    </template>
                </q-btn>
            </div>
        </div>
    </div>
    <div id="about-section">
        <h3 class="text-center">About Me</h3>
        <div class="row q-py-lg ">
            <div class="col about-avatar">
                <q-avatar size="10rem" class="shadow-3">
                    <img src="@/assets/images/avatar.png">
                </q-avatar>
            </div>
        </div>
        <div class="row q-py-lg q-gutter-lg about-wrapper">
            <div class="col about-text">
                <p>Enthusiastic, highly motivated and fast learner Electrical Engineering graduates with the ability to
                    take initiative and seek new challenges. Has great interest for a career in IT/Data,
                    Telecommunication Industry and Electrical Engineering. Experience as Product Development and
                    Lecturer makes me familiar with problem solving and public speaking.</p>
            </div>
            <div class="col about-text">
                <p>Currently work as backend developer at PT Kwarsa Hexagon, Indonesia. Have proficiency in several
                    programming language like Javascript, Python and PHP. My web development stack is Vue js as frontend
                    framework, Node JS (Express) as backend framework and MySql/Postgres as database.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5><b>Skills</b></h5>
                <div class="skills-img-wrapper">
                    <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="html logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                        alt="css logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        alt="javascript logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                        alt="vue logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                        alt="nodejs logo">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png" alt="quasar logo">
                    <img src="https://seeklogo.com/images/V/vuetify-logo-CC59D65FD3-seeklogo.com.png"
                        alt="vuetify logo">
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="mysql logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                        alt="postgres logo">
                </div>
            </div>
        </div>
    </div>
    <div id="projects-section">

        <q-img src="@/assets/images/codebg2.jpg" fit="fill" :ratio="16/9" class="bg-img"></q-img>
        <div class="projects-text">
            <h3 class="text-center">My Projects</h3>
        </div>
        <div class="project-content">

            <div class="row q-gutter-md q-mt-md projects-wrapper">
                <div class="col">
                    <q-card class="card">
                        <q-carousel arrows animated v-model="slide_1" height="300px" control-color="black">
                            <q-carousel-slide name="first" img-src="@/assets/images/project1_1.jpeg">

                            </q-carousel-slide>
                            <q-carousel-slide name="second" img-src="@/assets/images/project1_2.jpeg">

                            </q-carousel-slide>
                            <q-carousel-slide name="third" img-src="@/assets/images/project1_3.jpeg">

                            </q-carousel-slide>
                        </q-carousel>

                        <q-card-section>
                            <div class="text-h6">Aplikasi Digital Informasi</div>
                            <div class="text-subtitle2">An application platform to provide real-time information. (Vue JS + Quasar + Express)</div>
                        </q-card-section>

                    </q-card>
                </div>
                <div class="col">
                    <q-card class="card">
                        <q-carousel arrows animated v-model="slide_2" height="300px" control-color="black">
                            <q-carousel-slide name="first" img-src="@/assets/images/project2_1.jpeg">

                            </q-carousel-slide>
                            <q-carousel-slide name="second" img-src="@/assets/images/project2_2.jpeg">

                            </q-carousel-slide>
                            <q-carousel-slide name="third" img-src="@/assets/images/project2_3.jpeg">

                            </q-carousel-slide>
                        </q-carousel>

                        <q-card-section>
                            <div class="text-h6">Sistem Informasi Keuangan Anggaran Proyek (SIKAP)</div>
                            <div class="text-subtitle2">Sistem untuk operasional keuangan proyek perusahaan. (Vue JS + Vuetify + Express)</div>
                        </q-card-section>

                        
                    </q-card>
                </div>
                
            </div>
            <div class="row q-gutter-md q-mt-sm projects-wrapper">
                <div class="col ">
                    <q-card class="card">
                        <q-carousel arrows animated v-model="slide_3" height="300px" control-color="black" >
                            <q-carousel-slide name="first" img-src="@/assets/images/project3_1.gif">
                            </q-carousel-slide>
                            <q-carousel-slide name="second" img-src="@/assets/images/project3_2.png">

                            </q-carousel-slide>
                            <q-carousel-slide name="third" img-src="@/assets/images/project3_3.jpeg">

                            </q-carousel-slide>
                        </q-carousel>

                        <q-card-section>
                            <div class="text-h6">Aplikasi Reservasi Rumah Sakit Anak</div>
                            <div class="text-subtitle2">Frontend Sistem aplikasi reservasi untuk rumah sakit (Vue JS + Vuetify)</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card class="card">
                        <q-carousel arrows animated v-model="slide_4" height="300px" control-color="black" >
                            <q-carousel-slide name="first" img-src="@/assets/images/project4_1.jpeg">
                            </q-carousel-slide>
                            <q-carousel-slide name="second" img-src="@/assets/images/project4_2.jpeg">

                            </q-carousel-slide>
                            <q-carousel-slide name="third" img-src="@/assets/images/project4_3.jpeg">

                            </q-carousel-slide>
                        </q-carousel>

                        <q-card-section>
                            <div class="text-h6">Admin Dashboard Monitoring PQ & TD</div>
                            <div class="text-subtitle2">Aplikasi untuk monitoring proses prakualifikasi dan tender perusahaan. (CoreUI Template Vue JS + Express)</div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            
        </div>
        <div class="q-mt-xl">
            <h4 class="text-center">Will be updated soon ...</h4>
        </div>
    </div>

    <div id="contact-section">
        <h3 class="text-center">Contact Me</h3>
        <div class="row q-py-lg contact-wrapper">
            <div class="col q-pa-md">
                <form action="" class="form-wrapper">
                    <q-input outlined v-model="text" label="Your Name" />
                    <q-input outlined v-model="text" label="Your Email" />
                    <q-input outlined v-model="text" type="textarea" label="Your Message" />
                    <small>Let's get in touch.</small>
                    <q-btn label="Send" color="black" outline></q-btn>
                </form>
            </div>
            <div class="col right-contact-text q-pa-sm">
                <h5>Contact Information</h5>
                <q-separator></q-separator>
                <div class="q-py-md contact-text">
                    <div>
                        <q-icon name="email" size="md"></q-icon> <span >failasuf99@gmail.com</span>
                    </div>
                    <div>
                        <q-icon size="md"><img src="@/assets/icons/linkedin.png" /></q-icon> <span
                            >https://www.linkedin.com/in/failasuf99</span>
                    </div>
                    <div>
                        <q-icon name="home" size="md"></q-icon> <span >Bandung, West Java</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref, computed
    } from 'vue'
    import { useQuasar } from 'quasar';

    export default {
        setup() {
            const $q = useQuasar()
            const imgRatio = computed(() => {
            return $q.screen.lt.md
                ? '16/9'
                : '4/3'
            })


            return {
                slide_1: ref('first'),
                slide_2: ref('first'),
                slide_3: ref('first'),
                slide_4: ref('first'),
                autoplay: ref(true),
                imgRatio,
            }
        }
    }
</script>

<style scoped>
    #hero-section {
        min-height: 92.8vh;
        background-color: black;
        position: relative;
    }

    .hero-cta {
        display: flex;
        gap: 0.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
        padding: 0;
    }

    .hero-text {
        position: absolute;
        top: 40%;
        padding: 0 10rem;
        color: white;
    }

    .bg-img {
        max-height: 100%;
        opacity: 0.2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;

    }

    #about-section {
        padding: 2rem 10rem;
        min-height: 92.8vh;
    }

    .about-text {
        display: flex;
        align-items: center;
        font-size: 16px;
    }

    .about-avatar {
        display: flex;
        justify-content: center;
    }

    #projects-section {
        background-color: black;
        min-height: 92.8vh;
        position: relative;
        color: white;
        padding: 2rem 10rem;
    }

    .projects-text {
        position: relative;
    }

    .card {
        color: black;
        width: 100%;
        height: 100%;
    }

    #contact-section {
        padding: 2rem 10rem;
    }

    .contact-text {
        font-size: 16px;
    }

    .form-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .skills-img-wrapper {
        display: flex;
        gap: 1rem;
    }

    .skills-img-wrapper img {
        max-height: 50px;
    }


    @media screen and (max-width: 600px) {
        h1 {
            font-size: 64px;
            line-height: 4rem;
        }

        h3 {
            font-size: 36px;
        }

        #hero-section {
        min-height: 92.8vh;
        background-color: black;
        position: relative;
    }

    .bg-img {
        max-height: 100%;
        opacity: 0.2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }


    .hero-text {
        position: absolute;
        top: 25%;
        padding: 0 1rem;
        color: white;
    }

    #about-section {
        padding: 2rem 1rem;
        min-height: 92.8vh;
    }

    .skills-img-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .about-wrapper {
        display: flex;
        flex-direction: column;
    }

    #projects-section {
        background-color: black;
        min-height: 92.8vh;
        position: relative;
        color: white;
        padding: 2rem 1rem;
    }

    .projects-wrapper {
        display: flex;
        flex-direction: column;
    }

    #contact-section {
        padding: 2rem 1rem;
    }

    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }
}

    /* .right-contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: start;
    } */
</style>