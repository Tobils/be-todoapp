# MEVN [MySQL, Express, VueJs, NodeJs]
---

## Aplikasi To Do List
- config package
   - `npm init`
   - `npm install body-parser`
   - `npm install express`
   - `npm install mysql2`
   - `npm install nodemon`
   - `npm install sequelize`
   - `npm install cors`

- config mysql database
    - `create database mevn;`
    - `use mevn;`
    - `create table tbl_tasks ( id INT unsigned not null auto_increment, task_name TEXT not null, constraint pk_example primary key (id));`

- config vue client
    - `vue init webpack client`
    - `cd client`
    - `npm run dev`
    - `sudo npm i --save axios bootstrap`

- got an error at the end
    - error message
      - [link](./error-babel.md)
    - solution
      - re-create project


- router/index.js
```js
import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
        routes: [{
                path: '/',
                name: 'List',
                component: List
        }]
})
```

- components/List.vue
```vue
<template>
    <div class="hello">
        <div id="todo-list-example" class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <h1 class="text-center">To Do List App</h1>
                    <form v-on:submit.prevent="addNewTask">
                        <label for="tasknameinput">Task Name</label>
                        <input type="text" id="tasknameinput" class="form-control" placeholder="Add new task">
                        <button v-if="this.isEdit" type="submit" class="btn btn-success btn-block mt-3">
                            Submit
                        </button>
                        <button v-else type="button" class="btn btn-primary btn-block mt-3">
                            Update
                        </button>
                    </form>

                    <table class="table">
                        <tr v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.task_name">
                            <td class="text-left">
                                {{ todo.task_name }}
                            </td>
                            <td class="text-right">
                                <buttton class="btn-info" v-on:click="editTask(todo.task_name, todo.id)">Edit</buttton>
                                <buttton class="btn-danger" v-on:click="deleteTask(todo.id)">Delete</buttton>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return {
            todos: [],
            id:'',
            taskname:'',
            isEdit:false
        }
    },
    mounted(){
        this.getTasks()
    },
    methods: {
        getTasks(){
            axios.get('/api/tasks').then(
                result => {
                    console.log(result.data);
                    this.todos = result.data;
                }, 
                error => {
                    console.error(error)
                }
            )
        },
        addNewTask(){
            axios.post('/api/task', {task_name:this.taskname})
            .then((res) => {
                this.taskname = ''
                this.getTasks()
            })
            .catch(err => {
                console.log("error :" + err)
            })
        },
        editTask(title, id){
            this.id = id
            this.taskname = title
            this.isEdit = true
        },
        updateTask(){
            axios.put(`/api/task/${this.id}`,
            {task_name : this.taskname})
            .then((res) => {
                this.taskname = ''
                this.isEdit = false
                this.getTasks()
                console.log(res)
            })
            .catch(err => {
                console.log("error : " + err)
            })
        },
        deleteTask(id) {
            axios.delete(`/api/task/${this.id}`)
            .then((res) => {
                this.taskname = ''
                this.getTasks()
                console.log(res)
            })
            .catch(err => {
                console.log("error : " + err)
            })
        }
    }

}
</script>
```

- command untuk menjalankan 2 image dalam waktu bersmaan
    - `docker-compose up --build`










## Source
- [source](https://www.youtube.com/watch?v=9Kju3DovLrg)
