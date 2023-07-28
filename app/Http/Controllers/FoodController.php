<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Http\Requests\StoreFoodRequest;
use App\Http\Requests\UpdateFoodRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class FoodController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index(Request $request)
    {
        $searchData = $request->search ?? '';
        $tagData = $request->tag ?? '';
        $foodItems = Food::query()
            ->when($searchData, function ($query, $searchData) {
                $query->where('name', 'like', "%{$searchData}%")
                    ->orWhere('tags', 'like', "%{$searchData}%")
                    ->orWhere('description', 'like', "%{$searchData}%");
            })
            ->when($tagData, function ($query, $tagData) {
                $query->where('tags', 'like', "%{$tagData}%");
            })->orderBy('id', 'desc')
            ->paginate(8)
            ->withQueryString()
            ->through(
                fn ($foodItem) => [
                    'id' => $foodItem->id,
                    'name' => $foodItem->name,
                    'type' => $foodItem->type,
                    'tags' => $foodItem->tags,
                    // 'carouselImages' => [
                    //     Storage::url('images/anna-pelzer-IGfIGP5ONV0-unsplash'),
                    //     Storage::url('images/lily-banse--YHSwy6uqvk-unsplash'),
                    //     Storage::url('images/victoria-shes-UC0HZdUitWY-unsplash')
                    // ],
                    'carouselImages' => Storage::url('public/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'),
                    // 'carouselImage3' => Storage::url('victoria-shes-UC0HZdUitWY-unsplash'),
                    'image' => str_contains($foodItem->image, "https") ? $foodItem->image : Storage::url($foodItem->image),
                ]
            );
        return Inertia::render('Catering/Index', [
            'foodItems' => $foodItems,
            'filters' => $request->only(['search'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Catering/Create');
    }

    public function store(StoreFoodRequest $request)
    {
        $validatedItem = $request->validated();
        if ($validatedItem['image']) {
            $imageName = date('YmdHi') . '-' . $validatedItem['image']->getClientOriginalName();
            $validatedItem['image'] = $validatedItem['image']->storeAs('public/images', $imageName);
        }
        $validatedItem['user_id'] = auth()->id();
        Food::create($validatedItem);
        return redirect(route('food.create'));
    }

    public function show(Food $food)
    {
        return Inertia::render('Catering/ItemShow', [
            'food' => $food,
            'image' => str_contains($food->image, "https") ? $food->image : Storage::url($food->image),
            'can' => [
                'edit' => Auth::user() ? Auth::user()->can('update', $food) : false,
                'delete' => Auth::user() ?  Auth::user()->can('delete', $food) : false,
            ]
        ]);
    }

    public function edit(Request $request, Food $food)
    {
        if ($request->user()->cannot('update', $food)) {
            return redirect(route('food.show', ['id' => $food->id]));
        }
        return Inertia::render('Catering/ItemEdit', ['food' => $food]);
    }

    public function update(UpdateFoodRequest $request, Food $food)
    {
        if ($request->user()->cannot('update', $food)) {
            return redirect(route('food.show', ['id' => $food->id]));
        }
        $validatedItem = $request->validated();
        if ($request->image) {
            $image = $request->validate(['image' => ['mimes:jpeg,jpg,png', 'max:5048']]);
            Storage::delete($food->image);
            $imageName = date('YmdHi') . '-' . $image['image']->getClientOriginalName();
            $validatedItem['image'] = $image['image']->storeAs('public/images', $imageName);
        }
        $food->update($validatedItem);
        return redirect(route('food.show', $food->id));
    }

    public function destroy(Request $request, Food $food)
    {
        if ($request->user()->cannot('delete', $food)) {
            return redirect(route('food.show', ['id' => $food->id]));
        }
        Storage::delete($food->image);
        $food->delete();
        return redirect(route('home'));
    }
}
