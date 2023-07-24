<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Food>
 */
class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'name' => fake()->sentence(),
            'type' => fake()->sentence(1),
            'description' => fake()->paragraph(2),
            'tags' => fake()->sentence(3),
            'image' => fake()->imageUrl(648, 480, 'food'),
        ];
    }
}
