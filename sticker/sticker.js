/***
 * Author   :hymane
 * Email    :hymanmee@gmail.com
 * Create at 2019/1/11
 * Description: 
 */

 new Vue({
    el:'#app',
    
    data() {
        return {
            name: 'hymane',
            images:[]
        }
    },
    created() {
        this.initImg();
    },
    methods: {
        initImg(){
            for (let index = 0; index < 20; index++) {
                let id = Math.ceil(Math.random()*1000);
                this.images.push({
                        thumbnail:'https://picsum.photos/300/200/?image='+id,
                        source:'https://picsum.photos/1400/800/?image='+id
                    });
            }
        },
        onRefresh(){
            this.images = [];
            this.initImg();
        }
    },
 });