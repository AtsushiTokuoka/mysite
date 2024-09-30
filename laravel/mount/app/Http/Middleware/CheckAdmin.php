<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // tokenを確認
        $authToken = $request->cookie('auth_token');
        
        // authコンテナへリクエストを送信
        if( env('APP_ENV') === 'local' ) {
            $isAdmin = Http::withHeaders([
                'x-admin-access-key' => env('ADMIN_DEV_ACCESS_KEY'),
            ])->get('http://express/token?token=' . $authToken);
        }
        else if( env('APP_ENV') === 'production' ) {
            $isAdmin = Http::get('http://express/token?token=' . $authToken);
        }

        if( $isAdmin->successful() ) {
            return $next($request);
        }
        else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

    }
}
