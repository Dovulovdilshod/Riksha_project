<template>
    <nav class="navbar">
        <div class="navbar__nav container">
            <div class="nav_logo-box">
                <img src="../assets/imgs/nav_logo.png" alt="" class="navbar_logo">
                <img src="../assets/imgs/nav_logo2.png" alt="" class="navbar_logo2">
            </div>
            <ul class="navbar_list">
                <li><a href="#!" class="navbar_link">О нас</a></li>
                <li><a href="#!" class="navbar_link">Доставка и оплата</a></li>
                <li><a href="#!" class="navbar_link">Контакты</a></li>
                <li><a href="#!" class="navbar_link">Бонусы</a></li>
                <li><a href="#!" class="navbar_link">Вакансии</a></li>
            </ul>
            <div class="navbar_phone-number">
                <div class="navbar_inner-box">
                    <span class="phone"></span>
                    <p class="navbar-number">+7 (495) 617-14-24</p>
                </div>
                <span class="navbar-time">c 10:00 до 23:00</span>
            </div>
            <div class="navbar_price-box">
                <span class="navbar_price">0 ₽</span>
                <span class="bag"></span>
            </div>
            <div class="navbar_profile">
                <span class="navbar_user"></span>
            </div>
            <div class="burger_open" @click="this.openOrClose = !this.openOrClose" v-if="openOrClose">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="burger_close" @click="this.openOrClose = !this.openOrClose" v-else>
                <span class="burger-span1"></span>
                <span class="burger-span2"></span>
            </div>
        </div>
        <div class="navbar_burger-open" v-if="!openOrClose">
            <ul class="navbar_list-open">
                <li><a href="#!" class="navbar_link">О нас</a></li>
                <li><a href="#!" class="navbar_link">Доставка и оплата</a></li>
                <li><a href="#!" class="navbar_link">Контакты</a></li>
                <li><a href="#!" class="navbar_link">Бонусы</a></li>
                <li><a href="#!" class="navbar_link">Вакансии</a></li>
            </ul>
            <div class="navbar_phone-number-open">
                <div class="navbar_inner-box">
                    <span class="phone"></span>
                    <p class="navbar-number">+7 (495) 617-14-24</p>
                </div>
                <span class="navbar-time">c 10:00 до 23:00</span>
            </div>
            <div class="navbar_price-box-open">
                <span class="navbar_price">0 ₽</span>
                <span class="bag"></span>
            </div>
            <div class="navbar_profile-open">
                <span class="navbar_user"></span>
            </div>
        </div>
        <div class="navbar__nav2">
            <div class="navbar__cards container">
                <div class="navbar-card navbar-card1">
                    <img src="../assets/imgs/navbar_img1.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Пицца</p>
                </div>
                <div class="navbar-card navbar-card2">
                    <img src="../assets/imgs/navbar_img2.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Суши</p>
                </div>
                <div class="navbar-card navbar-card3">
                    <img src="../assets/imgs/navbar_img3.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Роллы</p>
                </div>
                <div class="navbar-card navbar-card4">
                    <img src="../assets/imgs/navbar_img4.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Сеты</p>
                </div>
                <div class="navbar-card navbar-card5">
                    <img src="../assets/imgs/navbar_img5.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Wok</p>
                </div>
                <div class="navbar-card navbar-card6">
                    <img src="../assets/imgs/navbar_img6.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Супы</p>
                </div>
                <div class="navbar-card navbar-card7">
                    <img src="../assets/imgs/navbar_img7.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Салаты</p>
                </div>
                <div class="navbar-card navbar-card8">
                    <img src="../assets/imgs/navbar_img8.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Десерты</p>
                </div>
                <div class="navbar-card navbar-card9">
                    <img src="../assets/imgs/navbar_img9.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Напитки</p>
                </div>
                <div class="navbar-card navbar-card10">
                    <img src="../assets/imgs/navbar_img10.png" alt="" class="navbar_card-img">
                    <p class="navbar_cards-text">Акции</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            openOrClose: true
        }
    },
    methods: {
    }
    
}
// openorcloseBurger() {
//     let burger = document.querySelector('.burger')
//     if (burger.style.display === "flex") {
//         burger.style.display === "none"
//     } else {
//         burger.style.display === "flex"
//     }
// }
</script>