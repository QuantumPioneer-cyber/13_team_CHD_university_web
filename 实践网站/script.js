document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('main-header');
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');

    // 1. 导航栏滚动时添加背景
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. 移动端菜单切换
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // 3. 点击导航链接后关闭移动端菜单
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // 4. 元素进入视口时添加淡入效果
    const sections = document.querySelectorAll('.content-section');
    
    const observerOptions = {
        root: null, // 默认视口
        rootMargin: '0px',
        threshold: 0.1 // 元素可见10%时触发
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 触发一次后可以停止观察，以提高性能
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});