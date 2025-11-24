<?php

use Illuminate\Http\Request;
use illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VendorController;

Route::get('/', function () {
    return('Hello, Laravel');
    Route::resource('vendors', VendorController::class);
});

Route::get('/products', [ProductController::class, 'index']);

