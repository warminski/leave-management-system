<?php namespace App\Controllers;

use App\Models\LeaveModel;
use App\Models\UserModel;

class AdminDashboard extends BaseController
{
	public function index()
	{
        $data = [];
        $model = new  UserModel();
        $leave = new LeaveModel();
        $data['user'] = $model->where('id',session()->get('id'))->first();
        $data['leaves'] = $leave->getAll();
        $data['rows'] = $model->dispdata();
        echo view('templates/dashboard_header',$data);
        echo view('/auth/admin_dashboard',$data);
        echo view('templates/dashboard_footer',$data);


	}

	//--------------------------------------------------------------------

}
