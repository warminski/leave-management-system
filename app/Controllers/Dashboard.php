<?php namespace App\Controllers;

use App\Models\UserModel;

class Dashboard extends BaseController
{
	public function index()
	{
        $data = [];
        $model = new  UserModel();
        $data['user'] = $model->where('id',session()->get('id'))->first();
        $data['rows'] = $model->dispdata();
        echo view('templates/dashboard_header',$data);
        echo view('/auth/dashboard',$data);
        echo view('templates/dashboard_footer',$data);


	}

	//--------------------------------------------------------------------

}
