<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// client
use App\Http\Controllers\UserController;

// admin
use App\Http\Controllers\Admin\UserController as AdminUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| API Routes(client) フロント画面用のAPIルート
|--------------------------------------------------------------------------
*/
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });
});

/*
|--------------------------------------------------------------------------
| API Routes(master) 管理画面用のAPIルート
|--------------------------------------------------------------------------
*/
Route::middleware(['check.admin'])->group(function () {
    // users
    Route::get('users', [AdminUserController::class, 'index']);
    Route::get('users/{id}', [AdminUserController::class, 'show']);
    Route::post('users', [AdminUserController::class, 'store']);

    // videos
    // Route::resource('videos', VideoController::class);
});