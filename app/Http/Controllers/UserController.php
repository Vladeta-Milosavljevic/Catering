<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function createUser(Request $request, User $user)
    {
        if ($request->user()->cannot('view', $user)) {
            return redirect(route('home'));
        }

        return Inertia::render('Users/CreateUser');
    }


    public function storeUser(Request $request, User $user)
    {
        if ($request->user()->cannot('view', $user)) {
            return redirect(route('home'));
        }

        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'email', 'unique:users'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'isAdmin' => ['required']
        ]);

        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return redirect(route("home"));
    }


    public function showUsersList()
    {
        $users = User::all()
        ->map(
            fn ($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'isAdmin' => $user->isAdmin,
            ]
        );
        return Inertia::render('Users/UsersList', ['users' => $users]);
    }


    public function deleteUser(Request $request, User $user)
    {
        if ($request->user()->cannot('view', $user)) {
            return redirect(route('home'));
        }
        // dd($user->name);
        $user->delete();
        return  redirect(route("showUsersList"));
    }
}
