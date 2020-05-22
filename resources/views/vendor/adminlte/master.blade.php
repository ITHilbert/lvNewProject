<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>@yield('title_prefix', config('adminlte.title_prefix', ''))
    @yield('title', config('adminlte.title', 'AdminLTE 3'))
    @yield('title_postfix', config('adminlte.title_postfix', ''))</title>
    
    {{-- CSS --}}
    @yield('css_pre')
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"> 
   {{--  <link rel="stylesheet" href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('vendor/overlayScrollbars/css/OverlayScrollbars.min.css') }}">  --}}
    {{-- <link rel="stylesheet" href="{{ asset('vendor/adminlte/dist/css/adminlte.min.css') }}"> --}}
    {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"> --}}
    {{-- @include('adminlte::plugins', ['type' => 'css']) --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/custom.css') }}"> --}}
    @yield('css')
    

    {{-- JavaScript --}}
    <script>
        var Laravel = {
            'csrfToken' : '{{csrf_token()}}'
        };
    </script>
    
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.min.js') }}"></script>
    {{-- <script src="{{ asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script> --}}
    <script src="{{ asset('vendor/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
</head>
<body class="@yield('classes_body')" @yield('body_data')>

    <div id="vue-app">
        @yield('body')
    </div>

    <!-- Wichtig zum löschen von Daten -->
    @include('include.formdelete')


    {{-- JavaScript --}}
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/datatables.min.js') }}"></script>
    <script src="{{ asset('js/myFunctions.js') }}"></script>
    @include('adminlte::plugins', ['type' => 'js']) --}}

    @yield('js')
</body>
</html>
