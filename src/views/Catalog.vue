<template>
    <main class="main">
        <section class="sushi">
            <div class="sushi__content container">
                <div class="sushi_heading-box">
                    <router-link :to="{ name: 'home' }" class="sushi_heading">Главная // <span>Суши</span></router-link>
                    <h2 class="general_heading">Суши</h2>
                </div>
                <div class="sushi_filter-box">
                        <div class="sushi_filter-cards">
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img1.png" alt="">
                                <p class="sushi_filter-text">Лосось</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img2.png" alt="">
                                <p class="sushi_filter-text">Тунец</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img3.png" alt="">
                                <p class="sushi_filter-text">Угорь</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img4.png" alt="">
                                <p class="sushi_filter-text">Креветка</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img5.png" alt="">
                                <p class="sushi_filter-text">Краб</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img6.png" alt="">
                                <p class="sushi_filter-text">Мидии</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img7.png" alt="">
                                <p class="sushi_filter-text">Острое</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img8.png" alt="">
                                <p class="sushi_filter-text">Запеченный рол</p>
                            </div>
                            <div class="sushi_filter-card">
                                <img src="../assets/imgs/sushi_filter-img9.png" alt="">
                                <p class="sushi_filter-text">Vegan</p>
                            </div>
                            <div class="sushi_filter-card">
                                <p class="sushi_spec-text sushi-spec1">Top</p>
                                <p class="sushi_filter-text">ТОП-позиции</p>
                            </div>
                            <div class="sushi_filter-card">
                                <p class="sushi_spec-text sushi-spec2">New</p>
                                <p class="sushi_filter-text">Новинки</p>
                            </div>
                            <div class="sushi_filter-card">
                                <p class="sushi_spec-text sushi-spec3">%</p>
                                <p class="sushi_filter-text">Скидки</p>
                            </div>
                        </div>
                        <div class="sushi_sorting">
                            <p class="sorting_title">Сортировка</p>
                            <div class="sushi_sorting-box">
                                <p class="sushi_sorting-text">По умолчанию</p>
                                <span class="arrow_bottom"></span>
                            </div>
                        </div>
                </div>
                <div class="sushi_cards">
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл  Филадельфия`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'269 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="'vegan'" 
                        :topOrNew="'top'"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл Сливочная креветка`"
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'224 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="''" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл  Филадельфия`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'269 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="'spicy'" 
                        :topOrNew="'new'"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл  Филадельфия`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'269 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="''" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл Сливочная креветка`"
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'224 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="'hot'" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл  Филадельфия`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'269 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="'hot and spicy'" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл  Филадельфия`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'269 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="'hot'" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл Сливочная креветка`"
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'224 ₽'" 
                        :price="'219 ₽ '" 
                        :filterCart="''" 
                        :topOrNew="''"
                        />
                        <Card 
                        :gramm="'200 грамм'"
                        :calorie="'130 Ккал'" 
                        :name="`Ролл Чикен энд Чиз`" 
                        :description="'Лосось, сыр Филадельфия, огурец, авокадо '" 
                        :crossed-price="'232 ₽'" 
                        :price="'199 ₽ '" 
                        :filterCart="''" 
                        :topOrNew="''"
                        />
                </div>
            </div>
        </section>
        <section class="order">
            <div class="order_content container">
                <div class="order_content-box">
                    <h5 class="order_heading">Доставка суши и роллов в Краснодаре</h5>
                    <p class="order_text">Почему роллы с океанической рыбой, овощами и японскими деликаттесами стали любимым блюдом многих россиян? Во-первых, это очень полезно. Суши – это идеально сбалансированная пища, многое на полезные жиры, белки и витамины. Во-вторых, суше хорошо утоляют голод. <br>Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара. <br>Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время.</p>
                </div>
                <div class="order_img-box">
                    <img src="../assets/imgs/company-img1.png" alt="" class="order-img1">
                    <img src="../assets/imgs/company-img2.png" alt="" class="order-img2">
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