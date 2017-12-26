<template>
    <div>
        <nuxt/>
    </div>
</template>
<script>
import rem from '~/assets/js/rem'
export default{
    mounted(){
        rem(window)
    }
}
</script>
<style>

</style>
