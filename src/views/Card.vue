<template>
    
    <main class="main">
        <section class="basket">
            <div class="basket_content container">
                <router-link :to="{ name: 'catalog' }" class="basket_button-box">
                    <span class="catalog_arrow"></span>
                    <p class="catalog_text">Назад в каталог</p>
                </router-link>
                <div class="basket_card">
                    <div class="basket_img-box">
                        <span class="catalog_left-arrow"></span>
                        <span class="catalog_right-arrow"></span>
                    </div>
                    <div class="basket_content-box">
                        <h3 class="pages_heading">Ролл "Филадельфия"</h3>
                        <p class="basket_amount">Вес:<span>200 грамм</span></p>
                        <div class="basket_criterion-box">
                            <div class="basket-mini_card">
                                <div class="basket_item">Белки</div>
                                <div class="basket_gramm">7,5 г</div>
                            </div><div class="basket-mini_card">
                                <div class="basket_item">Углеводы</div>
                                <div class="basket_gramm">16,6 г</div>
                            </div><div class="basket-mini_card">
                                <div class="basket_item">Жиры</div>
                                <div class="basket_gramm">3,8 г</div>
                            </div><div class="basket-mini_card-special">
                                <div class="basket_item">Калорийность</div>
                                <div class="basket_gramm">213 Ккал</div>
                            </div>
                        </div>
                        <div class="basket_delivery-box">
                            <img src="../assets/imgs/Group.png" alt="">
                            <p class="basket_delivery-text">Доставим за 40 мин</p>
                            <a href="#!" class="basket_delivery-link">Условия доставки</a>
                        </div>
                        <p class="basket_composition">Состав:<p>Лосось, сыр "Филадельфия", огурец, авокадо </p></p>
                        <div class="basket_button">
                            <div class="gen_price-box">
                                <span class="crossed_price">269 ₽</span>
                                <span class="gen_price">219 ₽</span>
                            </div>
                            <div class="basket_counter">
                                <span class="basket_number">-</span>
                                <span class="basket_item-number">1</span>
                                <span class="basket_number">+</span>
                            </div>
                            <router-link :to="{name: 'map'}" class="general_button">Заказать</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="drinks">
            <div class="drinks_content container">
                <h3 class="pages_heading">С этим товаром покупают</h3>
                <div class="drinks_cards">
                    <Card 
                    :gramm="'0.5 л'"
                    :name="'Coca-Cola 0.5'"
                    :crossedPrice="'164 ₽'"
                    :price="'150 ₽ '"
                    :calorie="''"
                    :routerBtn="'button'"
                    :img="require('../assets/imgs/coca_cola.png')"
                    />
                    <Card 
                    :gramm="'0.33 л'"
                    :name="'BONAQUA негаз.5'"
                    :crossedPrice="'180 ₽'"
                    :price="'160 ₽ '"
                    :calorie="''"
                    :routerBtn="'button'"
                    :img="require('../assets/imgs/bon_aqua.png')"
                    />
                    <Card 
                    :gramm="'0.33 л'"
                    :name="'Dr Pepper вишня'"
                    :crossedPrice="'232 ₽'"
                    :price="'200 ₽ '"
                    :calorie="''"
                    :routerBtn="'button'"
                    :img="require('../assets/imgs/dr.pepper.png')"
                    />
                </div>
            </div>
        </section>
        <section class="recommend">
            <div class="recommend_content container">
                <h3 class="pages_heading">Рекомендуем попробовать</h3>
                <div class="recommend_cards">
                    <card 
                    :gramm="'200 грамм'"
                    :calorie="'130 Ккал'"
                    :name="'Ролл Филадельфия'"
                    :description="'Лосось, сыр Филадельфия, огурец, авокадо '"
                    :crossedPrice="'269 ₽'"
                    :price="'219 ₽ '"
                    :filterCart="'hot and spicy'"
                    :topOrNew="'top'"
                    />
                    <card 
                    :gramm="'200 грамм'"
                    :calorie="'130 Ккал'"
                    :name="'Ролл Сливочная креветка'"
                    :description="'Лосось, сыр Филадельфия, огурец, авокадо '"
                    :crossedPrice="'224 ₽'"
                    :price="'219 ₽'"
                    :filterCart="'hot'"
                    :topOrNew="'top'"
                    />
                    <card 
                    :gramm="'200 грамм'"
                    :calorie="'130 Ккал'"
                    :name="'Ролл Чикен энд Чиз'"
                    :description="'Лосось, сыр Филадельфия, огурец, авокадо '"
                    :crossedPrice="'232 ₽'"
                    :price="'199 ₽'"
                    :filterCart="'hot and spicy'"
                    :topOrNew="'top'"
                    />
                </div>
            </div>
        </section>
        <section class="feedback">
            <div class="feedback_content container">
                <div class="feedback_question">
                    <div class="feedback_head-box">
                        <div class="feedback_inner-box">
                            <h6 class="feedback_title">Заказывали уже у нас?</h6>
                            <p class="feedback_question-text">Оставьте отзыв. Помогите нам стать лучше.</p>
                        </div>
                        <img src="../assets/imgs/feedback_head-img.png" alt="">
                    </div>
                    <p class="feedback_btn">Оставить отзыв</p>
                </div>
                <div class="feesback_cards">
                    <div class="feedback_card feedback_card1">
                        <div class="feedback_user-box">
                            <p class="feedback_user-logo">ЯР</p>
                            <div class="feedback_user-info">
                                <p class="feedback_username">Яна Рождественская</p>
                                <p class="feedback_date">12.02.2022</p>
                            </div>
                        </div>
                        <div class="feedback_text-box">
                            <div class="feedback_icon-box">
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-regular"></span>
                            </div>
                            <p class="feedback_text">Суши очень вкусные!! Обожаем с мужем «запеченный сет»🤤
Доставка всегда своевременна. Курьеры приветливы. Удобный сайт, большой выбор. Большая бутылка соуса, всегда в пакетике есть салфетки. Для нас это однозначно «доставка суши» № 1 в Краснодаре!</p>
                        </div>
                        <img src="../assets/imgs/feedback_img1.png" alt="" class="feedback_img">
                    </div>
                    <div class="feedback_card feedback_card2">
                        <div class="feedback_user-box">
                            <p class="feedback_user-logo2">МЖ</p>
                            <div class="feedback_user-info">
                                <p class="feedback_username">Марина Жук</p>
                                <p class="feedback_date">20.01.2022</p>
                            </div>
                        </div>
                        <div class="feedback_text-box">
                            <div class="feedback_icon-box">
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-solid"></span>
                                <span class="feedback_stars-regular"></span>
                            </div>
                            <p class="feedback_text">Очень вкусно, всегда у вас беру! Довольна скоростью доставки и вкусом) Рекомендую</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    components: { Card }
}
</script>