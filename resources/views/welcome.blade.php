<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Compound Interest Calculator</title>
        @vite('resources/js/app.js')

    </head>
    <body>
        <main id="app">
            <compound-interest-calculator></compound-interest-calculator>
        </main>
    </body>
</html>

