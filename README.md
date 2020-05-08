# README: newProject

## About newProject

It is my Laravel master for new projects.

Laravel Version: 7.6.0



## Laravel Components

- **[Laravel UI](https://github.com/laravel/ui)**

- **[DataTables](https://datatables.net/)**

- **[Inverse seed generator (iSeed)](https://github.com/orangehill/iseed)**

- **[Laravel-Modules](https://github.com/nWidart/laravel-modules)**

- **[Laravel Module Installer](https://github.com/joshbrw/laravel-module-installer)**

- **[Laravel-Debugbar](https://github.com/barryvdh/laravel-debugbar)**

## VUE Components

- **[vue-select 3.4](https://vue-select.org/)**

- **[vue-js-toggle-button](https://github.com/euvl/vue-js-toggle-button)**

## Template

- **[AdminLTE](https://github.com/jeroennoten/Laravel-AdminLTE)**

## Installation

```
//Clone git repository
git clone https://github.com/ITHilbert/lvNewProject.git

//Project rename
mv lvNewProject [projectName]

//Open project folder
cd [projectName]

//Edit the rights from storage folder
chmod -R 755 storage

//.env file create
cp .env.example .env

//vendor install
composer install
```

**- create a database**
**- Config .env - file for database**

```
//Migrations 
php artisan migrations

//Seeds
php artisan db:seed

//Daten einspielen UserAuth
php artisan db:seed --class="ITHilbert\UserAuth\Database\Seeders\DatabaseSeeder"

//NPM install
npm install

//Start laravel
php artisan serv
```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
