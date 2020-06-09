<?php namespace App\Controllers;

class Auth extends BaseController
{
    public function index()
    {
        echo view("templates/auth_header");
        echo view("auth/login");
        echo view("templates/auth_footer");
    }

    public function registration()
    {
        echo view("templates/auth_header");
        echo view("auth/registration");
        echo view("templates/auth_footer");
    }

    //--------------------------------------------------------------------

}