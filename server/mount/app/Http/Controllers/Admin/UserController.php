<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ユーザー一覧を返す
        $data = [
            ['id' => 1, 'name' => 'public', 'displayName' => '公開コンテンツ'],
            ['id' => 2, 'name' => 'tokuoka-atsushi', 'displayName' => '徳岡　敦（とくおか　あつし）'],
            ['id' => 3, 'name' => 'tokuoka-yukiko', 'displayName' => '徳岡　由希子（とくおか　ゆきこ）'],
        ];

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // バリデーション
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|string|max:255',
        //     'display_name' => 'required|string|max:255',
        //     'email' => 'string|email|max:255|unique:users',
        //     'password' => 'required|string|min:8',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 422);
        // }

        // ユーザーを追加する
        // $user = User::create([
        //     'name' => $request->name,
        //     'display_name' => $request->display_name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $request->all(),
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
