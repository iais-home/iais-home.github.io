// js/main.js
async function loadComponents() {
    try {
        let basePath = '';
        if (window.location.pathname.includes('/about/') || 
            window.location.pathname.includes('/people/') || 
            window.location.pathname.includes('/centers/') || 
            window.location.pathname.includes('/publications/') || 
            window.location.pathname.includes('/activities/') || 
            window.location.pathname.includes('/news/')) {
            basePath = '..';
        }
        
        const isLocalFile = window.location.protocol === 'file:';
        const headerPath = isLocalFile ? `${basePath}/header.html` : '/header.html';
        const footerPath = isLocalFile ? `${basePath}/footer.html` : '/footer.html';

        const headerRes = await fetch(headerPath);
        if(headerRes.ok) {
            const headerHtml = await headerRes.text();
            document.getElementById('header-container').innerHTML = headerHtml;
        }

        const footerRes = await fetch(footerPath);
        if(footerRes.ok) {
            const footerHtml = await footerRes.text();
            document.getElementById('footer-container').innerHTML = footerHtml;
        }
        
        if (isLocalFile) {
            document.querySelectorAll('a').forEach(a => {
                if(a.getAttribute('href') && a.getAttribute('href').startsWith('/')) {
                    a.setAttribute('href', basePath + a.getAttribute('href'));
                }
            });
        }
    } catch (e) {
        console.error("Component loading failed:", e);
    }
}

document.addEventListener("DOMContentLoaded", loadComponents);

// Mobile Menu Delegation Logic
document.addEventListener('click', function(e) {
    // Open Menu
    const menuBtn = e.target.closest('#mobile-menu-btn');
    if (menuBtn) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        return;
    }

    // Close Menu
    const closeBtn = e.target.closest('#mobile-close-btn');
    if (closeBtn) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.style.overflow = '';
        }
        return;
    }

    // Accordion Logic
    const toggleBtn = e.target.closest('.mobile-menu-toggle');
    if (toggleBtn) {
        // Prevent if clicking View All link inside the button
        if(e.target.tagName === 'A') return;
        
        const targetId = toggleBtn.getAttribute('data-target');
        const targetList = document.getElementById(targetId);
        const icon = toggleBtn.querySelector('svg');
        
        if (targetList) {
            if (targetList.classList.contains('hidden')) {
                targetList.classList.remove('hidden');
                targetList.classList.add('flex');
                if (icon) icon.classList.add('rotate-180');
            } else {
                targetList.classList.add('hidden');
                targetList.classList.remove('flex');
                if (icon) icon.classList.remove('rotate-180');
            }
        }
    }
});
