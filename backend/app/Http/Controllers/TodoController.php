<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Todo;
use Symfony\Component\HttpFoundation\Response;

class TodoController extends Controller
{
    /*
    * Todo一覧

    * @return JsonResponse
    */
    public function index(): JsonResponse {
        $todos = Todo::get();
        return response()->json(
            [
                "code" => Response::HTTP_OK,
                "todos" => $todos
            ]
        );
    }
}
