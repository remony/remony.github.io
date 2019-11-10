var app = new Vue({
    el: '#app',
    data: {
        title: 'Stuart Douglas',
        profile: {
            name: 'Stuart Douglas',
            description: 'Software developer at NCR; Anime addict; Photography hobbyist.',
            currentJob: 'Java/Javascript Software NCR'
        },
        contact: {
            links: [
                {
                    title: "Email: stuartjdouglas@icloud.com",
                    icon: 'fas fa-envelope',
                    url: 'mailto:stuartjdouglas@icloud.com'
                },
                {
                    title: 'LinkedIn',
                    icon: 'fab fa-linkedin',
                    url: 'https://www.linkedin.com/in/stuartjdouglas/'
                },
                {
                    title: 'Github',
                    icon: 'fab fa-github',
                    url: 'https://github.com/stuartjdouglas/'
                }
            ]
        },
        navigation: {
            title: 'SD',
            links: [
                {
                    title: 'Profile',
                    link: '#profile'
                },
                {
                    title: 'Contact',
                    link: '#contact'
                },
                {
                    title: 'Projects',
                    link: '#projects'
                },
                {
                    title: 'Job History',
                    link: '#jobs'
                }
            ]
        },
        jobs: [
            {
                title: 'NCR',
                time: '2015 - present',
                current: true,
                description: 'Full stack developer using Spring framework and Angular',
                languages: [
                    'Java',
                    'Typescript',
                    'Javascript'
                ]
            },
            {
                title: 'NCR - Summer Internship',
                time: 'Summer',
                description: 'Front end developer in ATM interfaces with Angular.js',
                languages: [
                    'Javascript'
                ]
            }
        ],
        projects: [
            {
                title: 'Honours Project',
                description: 'quipment Booking Service is a software solution which includes a web app and mobile app. These apps allow users to be able to search request and book items from other users easily and simply. The aim of the project is to create a system for booking equipment within an environment such as Computing at the University of Dundee. Students will be able to find what equipment is available and book it for their use.',
                images: [
                    "assets/images/1.png",
                    "assets/images/2.png",
                    "assets/images/3.png",
                ]
            }
        ]
    }
})