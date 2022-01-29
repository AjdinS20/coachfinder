<template>
    <teleport to="body">
        <div v-if="show" @click="tryClose" class="backdrop"></div>
         <transition name="dialog">
        <dialog open v-if="show">
            <header>
                <slot name="header">
                    <h2>
                        {{ title }}
                    </h2>
                </slot>
            </header>
            <section>
                <slot></slot>
            </section>
            <menu>
                <slot name="actions">
                    <base-button @click="tryClose">Close</base-button>
                </slot>
            </menu>
        </dialog>
        </transition>
    </teleport>
</template>

<script>
export default {
    props:{
        show:{
            type: Boolean,
            required: true
        },
        title:{
            type: String,
            required: false
        },
        fixed:{
            type:Boolean,
            required: false
        }
    },
    emits: ['close'],
    methods:{
        tryClose(){
        if(this.fixed){
            return;
        }
        this.$emit('close');
    }
    }
    
}
</script>

<style scoped>
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
    
}
dialog{
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
}
.dialog-enter-from,
.dialog-leave-to{
    opacity: 0;
    transform: scale(0.8);
}
.dialog-enter-to,
.dialog-leave-from{
    opacity: 1;
    transform: scale(1);
}
.dialog-enter-active{
    transition: all 0.3s ease-out;
}
.dialog-leave-active{
    transition: all 0.3s ease-in;
}
</style>