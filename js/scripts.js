// 下拉菜单交互
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            const content = this.querySelector('.dropdown-content');
            content.style.display = 'block';
            content.style.animation = 'slideDown 0.3s ease';
        });
        
        dropdown.addEventListener('mouseout', function(e) {
            if (!this.contains(e.relatedTarget)) {
                this.querySelector('.dropdown-content').style.display = 'none';
            }
        });
    });

    // 移动端菜单适配
    function checkMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    if(checkMobile()) {
        const menu = document.querySelector('.main-menu');
        menu.style.display = 'none'; // 移动端需要额外处理
        // 可添加汉堡菜单逻辑
    }
});