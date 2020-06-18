<?php namespace App\Models;
use CodeIgniter\Model;

class LeaveModel extends Model{
    protected $table = 'leaves';
    protected $allowedFields = ['user_id','startDate','endDate'];



}