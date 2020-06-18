<?php namespace App\Controllers;

use App\Models\LeaveModel;
use App\Models\UserModel;

class AdminDashboard extends BaseController
{
	public function index()
	{
        $data = [];
        $model = new  UserModel();
        $leaves = new LeaveModel();
        $data['user'] = $model->where('id',session()->get('id'))->first();
        $data['leaves'] = $model->getAll();
        $data['rows'] = $model->dispdata();
        /*$newdata = [
            'name' => $this->request->getVar('userName'),
            'startDate' => $this->request->getVar('startDate'),
            'endDate' => $this->request->getVar('endDate'),
        ];
        $leaves->save($newdata);*/
        echo view('templates/dashboard_header',$data);
        echo view('/auth/admin_dashboard',$data);
        echo view('templates/dashboard_footer',$data);


	}

	//--------------------------------------------------------------------

}
