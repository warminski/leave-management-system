<?php namespace App\Controllers;

class Auth extends BaseController
{
    public function index()
    {
        $data = [];
        helper(['form']);
        echo view("templates/auth_header");
        echo view("auth/login");
        echo view("templates/auth_footer");
    }

    public function registration()
    {
        $data = [];
        helper(['form']);

        if($this->request->getMethod()=='post'){
            $rules = [
                'name' => 'required|min_length[3]|max_length[20]',
                'email' => 'required|min_length[6]|max_length[50]|valid_email|is_unique[user.email]',
                'password' => 'required|min_length[8]|max_length[255]',
                'password_confirm' => 'matches[password]',
            ];
            if(!$this->validate($rules)){
                $data['validation'] = $this->validator;
            }
            else{

            }
        }

        echo view("templates/auth_header",$data);
        echo view("auth/registration");
        echo view("templates/auth_footer");
    }

    //--------------------------------------------------------------------

}