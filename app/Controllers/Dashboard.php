<?php namespace App\Controllers;

class Dashboard extends BaseController
{
	public function index()
	{
        $data = [];
		return view('welcome_message');
	}

	//--------------------------------------------------------------------

}
