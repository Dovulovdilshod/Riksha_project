<template>
    
    <div class="general-card">
        <div class="general_img-box menu_img-box1">
            <div class="taste_box">
                <div v-if="filterCart == 'spicy'">
                    <img src="../assets/imgs/spicy.png" alt="">
                    <p class="card_small_text">Острое</p>
                </div>
                <div v-else-if="filterCart == 'hot'">
                    <img src="../assets/imgs/hot.png" alt="">
                    <p class="card_small_text">Горячий ролл</p>
                </div>
                <div v-else-if="filterCart == 'vegan'">
                    <img src="../assets/imgs/vegan-img.png" alt="">
                    <p class="card_small_text">Vegan</p>
                </div>
                <div v-else-if="filterCart == 'hot and spicy'">
                    <img src="../assets/imgs/spicy.png" alt="">
                    <p class="card_small_text">Острое</p>
                    <img src="../assets/imgs/hot.png" alt="">
                    <p class="card_small_text">Горячий ролл</p>
                </div>
            </div>
            
            <p class="top_box" v-if="topOrNew == 'top'">Top</p>
            <p class="new" v-else-if="topOrNew == 'new'">New</p>
        </div>
        <div class="general_content-box">
            <div class="general_inner-box">
                <span class="amount_calorie">{{ gramm }}<span class="dot" v-if="calorie != ''"></span>{{ calorie }}</span>
            </div>
            <h5 class="gen_name">{{ name }}</h5>
            <p class="gen_description">{{ description }}</p>
            <div class="gen_button-box">
                <div class="gen_price-box">
                    <span class="crossed_price">{{ crossedPrice }}</span>
                    <span class="gen_price">{{ price }}</span>
                </div>
                <button class="general_button" v-if="routerBtn == 'button'">Заказать</button>
                <router-link :to="{name: 'card'}" class="general_button" v-else>Заказать</router-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['name', 'description', 'crossedPrice', 'price', 'gramm', 'calorie', 'filterCart', 'topOrNew', 'routerBtn' ],
    data() {
        return {
            // name: '',
            // description: '',
            // crossedPrice: '',
            // price: '',
            // gramm: '',
            // calorie: '',
            // filterCart: ''
        }
    },
}
</script>