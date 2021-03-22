<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CEOController;
use App\Http\Resources\CEOResource;
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


Route::post('/register','App\Http\Controllers\API\AuthController@register');
Route::post('/login','App\Http\Controllers\API\AuthController@login');


//Route::group(['middleware' => 'auth:api'], function(){
//   Route::post('/ceo','App\Http\Controllers\API\CEOController@index');
//});

Route::apiResource('/ceo','App\Http\Controllers\API\CEOController');