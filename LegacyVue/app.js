var app = new Vue({
    el: '#app',
    data: {
        loading: 'Software developer at NCR; Anime addict; Photography hobbyist.'
    }
});
var github = new Vue({
    el: '#github',
    methods: {
        getData: function() {
            this.$http.get('https://api.github.com/users/remony/repos').then(response => {

                // get body data
                console.log(response.body);
                this.repos = response.body;
                this.repos.sort((a, b) => b['updated_at'].localeCompare(a['updated_at']));

                this.repos = this.repos.slice(0, 8);

            }, response => {
                // error callback
            })
        }
    },
    data: {
        repos: 'Loading'
    },
    beforeMount() {
        this.getData()
    }

});
