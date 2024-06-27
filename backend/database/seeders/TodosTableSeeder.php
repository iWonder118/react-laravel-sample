<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 1; $i <= 10; $i++) {
            DB::table("todos") -> insert([
                "title" => "ToDo" . $i,
                "description" => "これはTodo" . $i . "の詳細です",
                "finished" => (bool)random_int(0, 1),
                "created_at" => now(),
                "updated_at" => now(),
            ]);
        }
    }
}
