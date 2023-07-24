<?php

use App\Http\Controllers\FoodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FoodController::class, 'index'])->name('home');
Route::post('/food/update/{id}', [FoodController::class, 'update'])->name('foodUpdate');

Route::resource('/food', FoodController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/user/showUsersList', [UserController::class, 'showUsersList'])->name('showUsersList');
Route::get('/user/create', [UserController::class, 'createUser'])->name('createUser');
Route::post('/user/store', [UserController::class, 'storeUser'])->name('storeUser');
Route::delete('/user/delete/{user}', [UserController::class, 'deleteUser'])->name('deleteUser');
// Route::delete('/user/delete/{id}',function(){
//     dd('test');
// })->name('deleteUser');


require __DIR__ . '/auth.php';
