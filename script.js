document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 表单提交处理
    const form = document.getElementById('inquiry-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // 在实际应用中，这里应该发送数据到服务器
            // 由于这是静态网站，我们只显示一个成功消息
            
            // 创建成功消息元素
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>感谢您的询价！</h3>
                <p>我们已收到您的信息，将尽快与您联系。</p>
            `;
            
            // 替换表单为成功消息
            form.innerHTML = '';
            form.appendChild(successMessage);
            
            // 添加成功消息样式
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '30px';
            
            const successIcon = successMessage.querySelector('.success-icon');
            successIcon.style.fontSize = '48px';
            successIcon.style.color = '#4CAF50';
            successIcon.style.marginBottom = '20px';
            
            // 可选：5秒后重置表单
            setTimeout(() => {
                form.innerHTML = `
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="您的姓名" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="您的邮箱" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="您的电话（选填）">
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" placeholder="您的留言" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">发送询价</button>
                `;
            }, 5000);
        });
    }

    // 添加滚动动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .use-item, .why-buy, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始设置
    document.querySelectorAll('.feature-item, .use-item, .why-buy, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 初始运行一次
    animateOnScroll();
    
    // 滚动时运行
    window.addEventListener('scroll', animateOnScroll);
});