<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFoodRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:50', 'min:5', 'unique:food'],
            'type' => ['required', 'max:25', 'min:3'],
            'description' => ['required', 'max:250', 'min:25'],
            'tags' => ['required', 'max:150', 'min:5'],
            'image' => ['required', 'mimes:jpeg,jpg,png', 'max:5048'],
        ];
    }
}
