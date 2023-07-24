<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'name' => 'Jovan',
            'email' => 'jovan@test.com',
            'password' => bcrypt('jovan12345'),
            'isAdmin' => true,
        ]);
        User::factory()->create([
            'name' => 'Pera',
            'email' => 'pera@test.com',
            'password' => bcrypt('pera12345'),
            'isAdmin' => true,
        ]);
        User::factory()->create([
            'name' => 'Mika',
            'email' => 'mika@test.com',
            'password' => bcrypt('mika12345'),
            'isAdmin' => false,
        ]);
        User::factory()->create([
            'name' => 'Zika',
            'email' => 'zika@test.com',
            'password' => bcrypt('zika12345'),
            'isAdmin' => false,
        ]);
        User::factory()->create([
            'name' => 'Gile',
            'email' => 'gile@test.com',
            'password' => bcrypt('gile12345'),
            'isAdmin' => false,
        ]);
    }
}
