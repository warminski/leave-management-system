<?php namespace App\Models;
use CodeIgniter\Model;

class UserModel extends Model{
    protected $table = 'user';
    protected $allowedFields = ['name','email','password','updated_at','role_id','is_active','image','leave_days'];
    protected  $beforeInsert = ['beforeInsert'];
    protected  $beforeUpdate = ['beforeUpdate'];



    protected function beforeInsert(array $data){
        $data = $this->passwordHash($data);
        return $data;
    }

    protected function beforeUpdate(array $data){
        $data = $this->passwordHash($data);
        return $data;
    }

    protected function passwordHash(array $data){
        if(isset($data['data']['password']))
            $data['data']['password']=password_hash($data['data']['password'], PASSWORD_DEFAULT);
        return $data;
    }
    public function dispdata()
    {
        $db      = \Config\Database::connect();
        $builder = $db->table('user');
        $query   = $builder->get();
        //print_r($query->getResult());
        return $query->getResult();
    }
    function getAll(){
        $query = $this->db->query('SELECT user.id,user.name FROM user');
        return $query->getResult();
    }




}