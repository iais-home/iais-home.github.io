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
