/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

///*****v-select components
// * https://vue-select.org/ *****/
//import vselect from 'vue-select';
//Vue.component('v-select', vselect);
//import "vue-select/src/scss/vue-select.scss";
//
///*****vue-js-toggle-button
// * https://github.com/euvl/vue-js-toggle-button *****/
//import { ToggleButton } from 'vue-js-toggle-button';
//Vue.component('ToggleButton', ToggleButton);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./vendor/laravelkit/components/ExampleComponent.vue').default);
Vue.component('card', require('./vendor/laravelkit/components/Card.vue').default);
Vue.component('hform', require('./vendor/laravelkit/components/HForm.vue').default);
Vue.component('group', require('./vendor/laravelkit/components/group.vue').default);

//Comobobox
Vue.component('combobox', require('./vendor/laravelkit/components/input/combobox.vue').default);
Vue.component('search', require('./vendor/laravelkit/components/input/search.vue').default);

//Input
Vue.component('input-text', require('./vendor/laravelkit/components/input/input-text.vue').default);
Vue.component('input-euro', require('./vendor/laravelkit/components/input/input-euro.vue').default);
Vue.component('input-percent', require('./vendor/laravelkit/components/input/input-percent.vue').default);
Vue.component('input-int', require('./vendor/laravelkit/components/input/input-int.vue').default);
Vue.component('input-date', require('./vendor/laravelkit/components/input/input-date.vue').default);
Vue.component('input-password', require('./vendor/laravelkit/components/input/input-password.vue').default);
Vue.component('input-number', require('./vendor/laravelkit/components/input/input-number.vue').default);
Vue.component('text-area', require('./vendor/laravelkit/components/input/text-area.vue').default);
Vue.component('checkbox', require('./vendor/laravelkit/components/input/checkbox.vue').default);
Vue.component('radiobox', require('./vendor/laravelkit/components/input/radiobox.vue').default);
Vue.component('input-hidden', require('./vendor/laravelkit/components/input/input-hidden.vue').default);
Vue.component('hlabel', require('./vendor/laravelkit/components/input/hlabel.vue').default);


//Buttons
Vue.component('hbutton', require('./vendor/laravelkit/components/buttons/HButton.vue').default);
Vue.component('button-create', require('./vendor/laravelkit/components/buttons/button-create.vue').default);
Vue.component('button-show', require('./vendor/laravelkit/components/buttons/button-show.vue').default);
Vue.component('button-edit', require('./vendor/laravelkit/components/buttons/button-edit.vue').default);
Vue.component('button-delete', require('./vendor/laravelkit/components/buttons/button-delete.vue').default);
Vue.component('button-save', require('./vendor/laravelkit/components/buttons/button-save.vue').default);
Vue.component('button-back', require('./vendor/laravelkit/components/buttons/button-back.vue').default);
Vue.component('button-submit', require('./vendor/laravelkit/components/buttons/button-submit.vue').default);
Vue.component('button-cancel', require('./vendor/laravelkit/components/buttons/button-cancel.vue').default);
Vue.component('button-reset', require('./vendor/laravelkit/components/buttons/button-reset.vue').default);


//Show
Vue.component('txt', require('./vendor/laravelkit/components/show/text.vue').default);
Vue.component('euro', require('./vendor/laravelkit/components/show/euro.vue').default);
Vue.component('datum', require('./vendor/laravelkit/components/show/date.vue').default);

//Dialoge
Vue.component('dialog-delete', require('./vendor/laravelkit/components/dialog/delete.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#vue-app',
});