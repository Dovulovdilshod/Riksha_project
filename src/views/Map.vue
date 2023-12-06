<template>
    
    <main class="main">
        <section class="map">
            <div class="map_content container">
                <h3 class="pages_heading">Оформление заказа</h3>
                <div class="map_content_cards">
                    <div class="map_cart-cards">
                        <div class="map_cart-card map_cart-card1">
                            <div class="map_cart-inner-box1">
                                <img src="../assets/imgs/map-card_img1.png" alt="">
                                <div class="map_cart-info">
                                    <div class="map_cart-name">Пицца “Рикша”</div>
                                    <div class="map_cart-size">
                                        <span class="map_size1">30 см</span>
                                        <span class="dot"></span>
                                        <span class="map_size2">50 см</span>
                                    </div>
                                </div>
                            </div>
                            <div class="map_cart-inner-box2">
                                <div class="basket_counter">
                                    <span class="basket_number">-</span>
                                    <span class="basket_item-number">1</span>
                                    <span class="basket_number">+</span>
                                </div>
                                <p class="map_cart-price">510 ₽</p>
                                <img src="../assets/imgs/delete-bin-5-line.png" alt="">
                            </div>
                        </div>
                        <div class="map_cart-card map_cart-card2">
                            <div class="map_cart-inner-box1">
                                <img src="../assets/imgs/map-card_img2.png" alt="">
                                <div class="map_cart-info">
                                    <div class="map_cart-name">Ролл "Сливочная креветка"</div>
                                </div>
                            </div>
                            <div class="map_cart-inner-box2">
                                <div class="basket_counter">
                                    <span class="basket_number">-</span>
                                    <span class="basket_item-number">1</span>
                                    <span class="basket_number">+</span>
                                </div>
                                <p class="map_cart-price">510 ₽</p>
                                <img src="../assets/imgs/delete-bin-5-line.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="map_order-cards">
                        <div class="map_order-card map_order-card1">
                            <div class="map_order-head">
                                <img src="../assets/imgs/map_number1.png" alt="">
                                <p class="map_order-heading">Контактные данные</p>
                            </div>
                            <form class="map_order-form1">
                                <input type="text" placeholder="Ваше Имя">
                                <input type="number" placeholder="Телефон">
                            </form>
                        </div>
                        <div class="map_order-card map_order-card2">
                            <div class="map_order-head">
                                <img src="../assets/imgs/map_number2.png" alt="">
                                <p class="map_order-heading">Параметры доставки</p>
                            </div>
                            <div class="map_order-forms">
                                <form class="map_order-form2">
                                    <div class="map_order-checkbox">
                                        <input type="checkbox">
                                        <p class="map_order-form-text">Ближайшее время</p>
                                    </div>
                                    <div class="map_order-checkbox">
                                        <input type="checkbox">
                                        <p class="map_order-form-text">Самовывоз</p>
                                    </div>
                                    <div class="map_order-checkbox">
                                        <input type="checkbox">
                                        <p class="map_order-form-text">На дату / время</p>
                                    </div>
                                </form>
                                <form class="map_order-form3">
                                    <input type="text" placeholder="Улица" class="map_form1">
                                    <input type="text" placeholder="Дом" class="map_form2">
                                    <input type="text" placeholder="Квартира" class="map_form3">
                                    <input type="text" placeholder="Подьезд/Этаж/Домофон" class="map_form4">
                                </form>
                                <img src="../assets/imgs/map.png" alt="" class="map_img">
                                <div class="map_delivery-box">
                                    <img src="../assets/imgs/Group.png" alt="">
                                    <p>Доставим за 40 мин</p>
                                </div>
                            </div>
                        </div>
                        <div class="map_order-card map_order-card3">
                            <div class="map_order-head">
                                <img src="../assets/imgs/map_number3.png" alt="">
                                <p class="map_order-heading">Параметры оплаты</p>
                            </div>
                            <div class="map_order-checkbox">
                                <form class="map_card3-form">
                                    <input type="checkbox">
                                    <p>Наличные </p>
                                </form>
                                <form class="map_card3-form">
                                    <input type="checkbox">
                                    <p>Онлайн оплата</p>
                                </form>
                            </div>
                            <p class="map_order-change">Подготовить сдачу с :</p>
                            <form class="map_order3-form2">
                                <input type="text" placeholder="Введите сумму">
                                <input type="checkbox">
                                <p>Без сдачи</p>
                            </form>
                        </div>
                        <div class="map_order-card map_order-card4">
                            <div class="map_order-head1">
                                <img src="../assets/imgs/map_number4.png" alt="">
                                <p class="map_order-heading">Последний шаг</p>
                            </div>
                            <div class="map_order-content map_order-content1">
                                <div class="map3_inner-box">
                                    <p class="map_inner-text">Количество персон</p>
                                    <div class="basket_counter">
                                        <span class="basket_number">-</span>
                                        <span class="basket_item-number">1</span>
                                        <span class="basket_number">+</span>
                                    </div>
                                </div>
                                <div class="map3_inner-box">
                                    <p class="map_inner-text">Учебные палочки</p>
                                    <div class="basket_counter">
                                        <span class="basket_number">-</span>
                                        <span class="basket_item-number">1</span>
                                        <span class="basket_number">+</span>
                                    </div>
                                </div>
                                <p class="map_free">Бесплатно</p>
                            </div>
                            <div class="map_order-content map_order-content1">
                                <div class="map2_inner-box">
                                    <p>Сумма заказа</p>
                                    <p>Стоимость доставки</p>
                                </div>
                                <div class="map2_inner-box">
                                    <span>729 ₽</span>
                                    <span>0 ₽</span>
                                </div>
                            </div>
                            <div class="map_order-content map_order-content2">
                                <div class="map4_inner-box">
                                    <p class="map4_text1">Промокод</p>
                                    <a href="#!" class="map4_text2">Применить</a>
                                </div>
                                <div class="map4_inner-box2">
                                    <p>Итоговая сумма заказа</p>
                                    <span>729 ₽</span>
                                </div>
                                <textarea class="map_textarea" placeholder="Комментарий к заказу"></textarea>
                                <router-link :to="{name: 'delivery'}" class="map_order-button">Подтвердить заказ</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
export default {
    
}
</script>