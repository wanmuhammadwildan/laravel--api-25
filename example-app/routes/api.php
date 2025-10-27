<?php

use Illuminate\Http\Request;
use illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
    
Route::get('/', function () {
    return('Hello, Laravel');
});

Route::get('/products', [ProductController::class, 'index']);