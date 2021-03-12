<template>
 <div>
    <h3>Healthy Living</h3>
    <p>
        To be able to live a healthy life, we've often heard the recommendation from healthcare professionals to stay away from processed food, avoid fat in daily meals and to cut down on a lot of other "good stuffs". Everytime I open my lunch bag for a quick meal at my company, my peers would tease me of being crazy preferring cardboard over the juicy all natural burgers.
    </p>
    <p>Part Description: {{ partDesc }}</p>
</div>
</template>
<script>
import { computed, inject, reactive, ref, watch} from 'vue';

export default {
    name: "Home",
    
    setup(props) {

        const getPartDesc = inject('$partDescription')
        const partDesc = computed(() => {
            return getPartDesc("jmx125")
        })

        return {
            partDesc
        }

    }

}
</script>
