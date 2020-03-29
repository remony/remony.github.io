const application = {
    Home: {
        template: `<div class="home">
        <div class="profile">
        <div class="image"></div>
        <div class="info">
            <div class="section">
                <b>Current focus:</b>
                <p>Java, Javascript developer</p>

                <b>Current employment:</b>
                <p>NCR, Spring Framework and Angular</p>
            </div>
            <div class="links">
                <b class="subtitle">Links:</b>
                <a href="https://github.com/stuartjdouglas" class="fab fa-github"></a>
                <a href="https://www.linkedin.com/in/stuartjdouglas/" class="fab fa-linkedin-in"></a>
            </div>
        </div>
        </div>
    </div>`
    },
    About: {
        template: '<p>Work in progress</p>'
    },
    Unknown: {
        template: '<p>Unknown</p>'
    }
}

const routes = [
    {
        title: 'Home',
        path: '/',
        component: application.Home
    },
    {
        title: 'About',
        path: '/about',
        component: application.About
    },
    {
        title: 'Unknown',
        path: '*',
        component: application.Unknown
    }
];

const router = new VueRouter({
    routes
});

var app = new Vue({
    el: '#app',
    router,
    data: {
        currentRoute: window.location.pathname,
        mobileMenuOpen: false
    }
});