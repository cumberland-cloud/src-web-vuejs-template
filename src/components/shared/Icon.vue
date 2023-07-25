<template>
    <RouterLink id="icon-link"
        class="icon"
        :to="route"
        :tabindex="focusable ? 1 : -1"
        v-if="this.link">
        <img :id="this.id"
            :alt="this.alt"
            :src="`src/assets/svg/${icon}.svg`"
            :style="{
                'width': this.width, 
                'height': this.height
            }"
            class="icon-img"
            />
    </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    computed: {

    },
    data () {
        return {
        }
    },
    props: {
        alt: {
            Type: String,
            default: 'Icon'
        },
        control: {
            Type: Boolean,
            default: true
        },
        height: {
            Type: String,
            default: '32px'
        },
        link: {
            Type: Boolean,
            default: true
        },
        focusable: {
            Type: Boolean,
            default: true
        },
        icon: {
            Type: String,
            default: 'coffee_cup'
        },
        id: {
            Type: String,
            default: 'icon'
        },
        route: {
            Type: String,
            default: ''
        },
        width: {
            Type: String,
            default: '32px'
        }
    }
}
</script>