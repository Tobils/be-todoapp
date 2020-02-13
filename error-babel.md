# Error message babel
```js
> client@1.0.0 dev /Users/dev-tobil/Documents/dev-web/nodejs-vuejs/ToDoList-App/client
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

13% building modules 31/35 modules 4 active ...vuejs/ToDoList-App/client/src/App.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.
95% emitting                                                                         

WARNING  Compiled with 4 warnings                                                                              12:32:19 PM


✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/main.js:12:1
    el: '#app',
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/main.js:13:1
    router,
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/main.js:14:1
    components: { App },
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/main.js:15:1
    template: '<App/>'
^

✘  http://eslint.org/docs/rules/eol-last  Newline required at end of file but not found  
src/main.js:16:3
})
    ^


✘ 5 problems (5 errors, 0 warnings)


Errors:
4  http://eslint.org/docs/rules/indent
1  http://eslint.org/docs/rules/eol-last


✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/router/index.js:8:1
    routes: [{
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 4 spaces but found 8   
src/router/index.js:9:1
        path: '/',
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 4 spaces but found 8   
src/router/index.js:10:1
        name: 'List',
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 4 spaces but found 8   
src/router/index.js:11:1
        component: List
^

✘  http://eslint.org/docs/rules/indent    Expected indentation of 2 spaces but found 4   
src/router/index.js:12:1
    }]
^

✘  http://eslint.org/docs/rules/eol-last  Newline required at end of file but not found  
src/router/index.js:13:3
})
    ^


✘ 6 problems (6 errors, 0 warnings)


Errors:
5  http://eslint.org/docs/rules/indent
1  http://eslint.org/docs/rules/eol-last


✘  http://eslint.org/docs/rules/no-multiple-empty-lines      More than 1 blank line not allowed              
src/components/List.vue:34:1

^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:40:1
    data(){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:40:9
    data(){
        ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:40:11
    data(){
            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:41:1
        return {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:42:1
            todos: [],
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:43:1
            id:'',
^

✘  http://eslint.org/docs/rules/key-spacing                  Missing space before value for key 'id'         
src/components/List.vue:43:16
            id:'',
                ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:44:1
            taskname:'',
^

✘  http://eslint.org/docs/rules/key-spacing                  Missing space before value for key 'taskname'   
src/components/List.vue:44:22
            taskname:'',
                        ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:45:1
            isEdit:false
^

✘  http://eslint.org/docs/rules/key-spacing                  Missing space before value for key 'isEdit'     
src/components/List.vue:45:20
            isEdit:false
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:46:1
        }
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:47:1
    },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:48:1
    mounted(){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:48:12
    mounted(){
            ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:48:14
    mounted(){
                ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:49:1
        this.getTasks()
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:50:1
    },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:51:1
    methods: {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:52:1
        getTasks(){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:52:17
        getTasks(){
                ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:52:19
        getTasks(){
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:53:1
            axios.get('/api/tasks').then(
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 16   
src/components/List.vue:54:1
                result => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 20  
src/components/List.vue:55:1
                    console.log(result.data);
^

✘  http://eslint.org/docs/rules/semi                         Extra semicolon                                 
src/components/List.vue:55:45
                    console.log(result.data);
                                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 20  
src/components/List.vue:56:1
                    this.todos = result.data;
^

✘  http://eslint.org/docs/rules/semi                         Extra semicolon                                 
src/components/List.vue:56:45
                    this.todos = result.data;
                                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 16   
src/components/List.vue:57:1
                }, 
^

✘  http://eslint.org/docs/rules/no-trailing-spaces           Trailing spaces not allowed                     
src/components/List.vue:57:19
                }, 
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 16   
src/components/List.vue:58:1
                error => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 20  
src/components/List.vue:59:1
                    console.error(error)
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 16   
src/components/List.vue:60:1
                }
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:61:1
            )
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:62:1
        },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:63:1
        addNewTask(){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:63:19
        addNewTask(){
                    ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:63:21
        addNewTask(){
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:64:1
            axios.post('/api/task', {task_name:this.taskname})
^

✘  http://eslint.org/docs/rules/key-spacing                  Missing space before value for key 'task_name'  
src/components/List.vue:64:48
            axios.post('/api/task', {task_name:this.taskname})
                                                ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:65:1
            .then((res) => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:66:1
                this.taskname = ''
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:67:1
                this.getTasks()
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:68:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:69:1
            .catch(err => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:70:1
                console.log("error :" + err)
^

✘  http://eslint.org/docs/rules/quotes                       Strings must use singlequote                    
src/components/List.vue:70:29
                console.log("error :" + err)
                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:71:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:72:1
        },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:73:1
        editTask(title, id){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:73:17
        editTask(title, id){
                ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:73:28
        editTask(title, id){
                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:74:1
            this.id = id
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:75:1
            this.taskname = title
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:76:1
            this.isEdit = true
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:77:1
        },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:78:1
        updateTask(){
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:78:19
        updateTask(){
                    ^

✘  http://eslint.org/docs/rules/space-before-blocks          Missing space before opening brace              
src/components/List.vue:78:21
        updateTask(){
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:79:1
            axios.put(`/api/task/${this.id}`,
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:80:1
            {task_name : this.taskname})
^

✘  http://eslint.org/docs/rules/key-spacing                  Extra space after key 'task_name'               
src/components/List.vue:80:14
            {task_name : this.taskname})
                ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:81:1
            .then((res) => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:82:1
                this.taskname = ''
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:83:1
                this.isEdit = false
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:84:1
                this.getTasks()
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:85:1
                console.log(res)
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:86:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:87:1
            .catch(err => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:88:1
                console.log("error : " + err)
^

✘  http://eslint.org/docs/rules/quotes                       Strings must use singlequote                    
src/components/List.vue:88:29
                console.log("error : " + err)
                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:89:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:90:1
        },
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:91:1
        deleteTask(id) {
^

✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses       
src/components/List.vue:91:19
        deleteTask(id) {
                    ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 6 spaces but found 12   
src/components/List.vue:92:1
            axios.delete(`/api/task/${this.id}`)
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:93:1
            .then((res) => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:94:1
                this.taskname = ''
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:95:1
                this.getTasks()
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:96:1
                console.log(res)
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:97:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:98:1
            .catch(err => {
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 10 spaces but found 16  
src/components/List.vue:99:1
                console.log("error : " + err)
^

✘  http://eslint.org/docs/rules/quotes                       Strings must use singlequote                    
src/components/List.vue:99:29
                console.log("error : " + err)
                            ^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 8 spaces but found 12   
src/components/List.vue:100:1
            })
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 4 spaces but found 8    
src/components/List.vue:101:1
        }
^

✘  http://eslint.org/docs/rules/indent                       Expected indentation of 2 spaces but found 4    
src/components/List.vue:102:1
    }
^

✘  http://eslint.org/docs/rules/eol-last                     Newline required at end of file but not found   
src/components/List.vue:105:10
</script>
            ^


✘ 89 problems (89 errors, 0 warnings)


Errors:
63  http://eslint.org/docs/rules/indent
7  http://eslint.org/docs/rules/space-before-function-paren
6  http://eslint.org/docs/rules/space-before-blocks
5  http://eslint.org/docs/rules/key-spacing
3  http://eslint.org/docs/rules/quotes
2  http://eslint.org/docs/rules/semi
1  http://eslint.org/docs/rules/no-multiple-empty-lines
1  http://eslint.org/docs/rules/no-trailing-spaces
1  http://eslint.org/docs/rules/eol-last


✘  http://eslint.org/docs/rules/no-trailing-spaces  Trailing spaces not allowed  
src/App.vue:3:1
    
^


✘ 1 problem (1 error, 0 warnings)


Errors:
1  http://eslint.org/docs/rules/no-trailing-spaces

You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.

```