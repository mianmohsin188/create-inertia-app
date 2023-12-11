<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UserController extends BaseController
{
   public function index(){


       $data['data'] = User::all();
       return response()->json($data);
   }
   public function create(Request $request){
       $request->validate(
           [
               'name'=>'required|string|max:100',
               'email'=>'required|string|email|max:100|unique:users.email',
               'password'=>'required|confirmed|min:8',
               'profile_photo_path'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
           ]
       );

       $path = storage_path('images/');
       !is_dir($path) &&
       mkdir($path, 0777, true);

       if($file = $request->file('profile_photo_path')) {
           $fileData = $this->uploads($file,$path);
           Image::create([
               'name' => $fileData['fileName'],
               'type' => $fileData['fileType'],
               'path' => $fileData['filePath'],
               'size' => $fileData['fileSize']
           ]);
       }
       $imageName = time().'.'.$request->profile_photo_path->extension();


       $request->$imageName->storeAs('public/images', $imageName);
     //  $request->profile_photo_path->move(public_path('images'), $imageName);
       $user = User::create($request->all());
   }
   public function store(){

   }
   public function show(){

   }
   public function edit(){

   }
   public function update(){

   }
   public function destroy(){

   }
}

