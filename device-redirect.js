// Device Detection and Redirection System
// This script should be placed in the <head> of the main index.html

(function() {
    'use strict';
    
    // Device detection function
    function detectDevice() {
        const userAgent = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isTablet = /iPad|Android/i.test(userAgent) && window.innerWidth >= 768;
        const isSmallMobile = isMobile && window.innerWidth < 768;
        
        return {
            isMobile: isSmallMobile,
            isTablet: isTablet,
            isDesktop: !isMobile && !isTablet,
            userAgent: userAgent,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        };
    }
    
    // Check if user prefers mobile version (from localStorage)
    function getUserPreference() {
        return localStorage.getItem('preferredVersion') || 'auto';
    }
    
    // Set user preference
    function setUserPreference(preference) {
        localStorage.setItem('preferredVersion', preference);
    }
    
    // Get current page type
    function getCurrentPageType() {
        const currentPath = window.location.pathname;
        if (currentPath.includes('mobile.html')) {
            return 'mobile';
        }
        return 'desktop';
    }
    
    // Redirect to appropriate version
    function redirectToVersion(targetVersion) {
        const currentVersion = getCurrentPageType();
        
        if (currentVersion === targetVersion) {
            return; // Already on correct version
        }
        
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.split('/').slice(0, -1).join('/');
        
        if (targetVersion === 'mobile') {
            window.location.href = baseUrl + '/mobile.html';
        } else {
            // Redirect to desktop version (index.html)
            const desktopUrl = baseUrl + '/index.html';
            if (!currentUrl.includes('index.html') && !currentUrl.endsWith('/')) {
                window.location.href = baseUrl + '/';
            }
        }
    }
    
    // Main redirection logic
    function handleDeviceRedirection() {
        const device = detectDevice();
        const userPreference = getUserPreference();
        const currentVersion = getCurrentPageType();
        
        console.log('Device detection:', device);
        console.log('User preference:', userPreference);
        console.log('Current version:', currentVersion);
        
        // Skip redirection if explicitly disabled
        if (window.location.search.includes('noredirect=true')) {
            console.log('Redirection disabled by URL parameter');
            return;
        }
        
        // Handle user preference
        if (userPreference === 'mobile' && currentVersion !== 'mobile') {
            console.log('Redirecting to mobile version (user preference)');
            redirectToVersion('mobile');
            return;
        }
        
        if (userPreference === 'desktop' && currentVersion !== 'desktop') {
            console.log('Redirecting to desktop version (user preference)');
            redirectToVersion('desktop');
            return;
        }
        
        // Auto-detection (only if preference is 'auto')
        if (userPreference === 'auto') {
            if (device.isMobile && currentVersion !== 'mobile') {
                console.log('Redirecting to mobile version (auto-detection)');
                redirectToVersion('mobile');
            } else if ((device.isDesktop || device.isTablet) && currentVersion !== 'desktop') {
                console.log('Redirecting to desktop version (auto-detection)');
                redirectToVersion('desktop');
            }
        }
    }
    
    // Create version switcher UI
    function createVersionSwitcher() {
        const currentVersion = getCurrentPageType();
        
        // Don't show switcher if already exists
        if (document.querySelector('.version-switcher')) {
            return;
        }
        
        const switcher = document.createElement('div');
        switcher.className = 'version-switcher';
        switcher.innerHTML = `
            <div class="version-switcher-content">
                <span class="version-switcher-label">
                    ${currentVersion === 'mobile' ? '📱 Mobile' : '🖥️ Desktop'} Version
                </span>
                <button class="version-switcher-btn" onclick="window.DeviceRedirection.switchVersion()">
                    Switch to ${currentVersion === 'mobile' ? 'Desktop' : 'Mobile'}
                </button>
            </div>
        `;
        
        // Add styles
        switcher.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(30, 58, 138, 0.95);
            color: white;
            padding: 12px 16px;
            border-radius: 25px;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9998;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            max-width: 280px;
        `;
        
        // Add button styles
        const style = document.createElement('style');
        style.textContent = `
            .version-switcher-content {
                display: flex;
                flex-direction: column;
                gap: 8px;
                text-align: center;
            }
            .version-switcher-label {
                font-weight: 600;
                font-size: 12px;
                opacity: 0.9;
            }
            .version-switcher-btn {
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 6px 12px;
                border-radius: 15px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: inherit;
            }
            .version-switcher-btn:hover {
                background: rgba(255,255,255,0.3);
                border-color: rgba(255,255,255,0.5);
            }
            .version-switcher-btn:active {
                transform: scale(0.95);
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(switcher);
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (switcher.parentNode) {
                switcher.style.opacity = '0.7';
                switcher.style.transform = 'scale(0.9)';
                switcher.style.transition = 'all 0.3s ease';
            }
        }, 10000);
    }
    
    // Switch version function
    function switchVersion() {
        const currentVersion = getCurrentPageType();
        const targetVersion = currentVersion === 'mobile' ? 'desktop' : 'mobile';
        
        // Set user preference
        setUserPreference(targetVersion);
        
        // Redirect
        redirectToVersion(targetVersion);
    }
    
    // Expose functions globally
    window.DeviceRedirection = {
        detectDevice: detectDevice,
        switchVersion: switchVersion,
        setUserPreference: setUserPreference,
        getUserPreference: getUserPreference,
        getCurrentPageType: getCurrentPageType
    };
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            handleDeviceRedirection();
            setTimeout(createVersionSwitcher, 2000); // Show switcher after 2 seconds
        });
    } else {
        handleDeviceRedirection();
        setTimeout(createVersionSwitcher, 2000);
    }
    
})();
