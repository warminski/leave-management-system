<?php namespace App\Models;
use CodeIgniter\Model;

class LeaveModel extends Model{
    protected $table = 'user';
    function getAll(){
        $query = $this->db->query('SELECT name FROM user');
        return $query->getResult();
    }


}