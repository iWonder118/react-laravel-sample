<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::get('/todos', [TodoController::class, "index"]);
Route::post("/todos", [TodoController::class, "create"]);
Route::put("/todos", [TodoController::class, "update"]);
Route::delete("/todos", [TodoController::class, "delete"]);