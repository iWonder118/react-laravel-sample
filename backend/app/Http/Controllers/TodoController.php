<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Todo;
use App\Http\Requests\TodoCreateRequest;
use App\Http\Requests\TodoUpdateRequest;
use Symfony\Component\HttpFoundation\Response;

class TodoController extends Controller
{
    /** 
    * Todo一覧
    *
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

    /**
     * Todo 作成
     * 
     * @param TodoCreateRequest $request
     * @return JsonResponse
     */
    public function create(TodoCreateRequest $request): JsonResponse {
        $todo = Todo::create($request->all());

        return response()->json([
            "code" => Response::HTTP_OK,
            "todo" => $todo
        ], Response::HTTP_OK);
    }

    /**
     * Todo 作成
     * 
     * @param TodoUpdateRequest $request
     * @return JsonResponse
     */
    public function update(Request $request): JsonResponse {
        $params['title'] = $request->input("title");
        $params['description'] = $request->input("description");
        $params['finished'] = $request->input("finished");
        Todo::where("id", $request->input("id"))->update($params);
        $todo = Todo::find($request->input("id"));

        return response()->json([
            "code" => Response::HTTP_OK,
            "todo" => $todo
        ], Response::HTTP_OK);
    }
}
