<?php namespace App\Controllers;

class Dashboard extends BaseController
{
	public function index()
	{
        $data = [];
        echo view('templates/auth_header',$data);
        echo view('/auth/dashboard',$data);
        echo view('templates/auth_footer',$data);


	}

	//--------------------------------------------------------------------

}
