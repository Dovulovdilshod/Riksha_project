<template>
    
    <main class="main">
        <div class="error_content">
            <img src="../assets/imgs/error_404.png" alt="">
            <p class="error-title">Страница не найдена</p>
            <p class="error-text">Извините, но страницу, которую Вы пытаетесь найти - не существует. <br>Предлагаем Вам перейти на Главную страницу</p>
            <router-link class="error_button" :to="{name: 'home'}">На главную</router-link>
        </div>
    </main>

</template>

<script>
export default {
    
}
</script>