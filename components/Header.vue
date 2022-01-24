<template>
    <div>
        <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
            </div>
        </div>
        <div class="site-mobile-menu-body"></div>
        dhtftgf
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                links: [],
                clientInfo: {},
            }
        },

        methods: {
            getLinks(){
                $axios.get("./data/menu.json")
            }

        }
        
    }
</script>

<style>

</style>