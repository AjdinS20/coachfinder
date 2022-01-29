<template>
<div>
    <section>
        <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2>Interested? Reach out now!</h2>
                <base-button link :to="contactLink" v-if="!contactActive" @click="this.contactActive=true">Contact</base-button>
                <base-button v-else mode="outline" @click="goBackRoute()" link :to="goBack">Close info</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
</div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            selectedCoach: null,
            contactActive: false
        };
    },
    created(){
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
    },
    computed:{
        fullName(){
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink(){
            return '/coaches/' + this.selectedCoach.id + '/contact';
        },
        areas(){
            return this.selectedCoach.areas;
        },
        rate(){
            return this.selectedCoach.hourlyRate;
        },
        description(){
            return this.selectedCoach.description;
        },
        goBack(){
            return '/coaches/' + this.selectedCoach.id;
        }
    },
    methods:{
        goBackRoute(){
            this.contactActive = false;
        }
    }
}
</script>