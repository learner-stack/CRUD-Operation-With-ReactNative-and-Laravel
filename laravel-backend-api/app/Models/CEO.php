<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CEO extends Model
{
    use HasFactory;
    public $table = 'c_e_o_s';
    protected $fillable =['cname','company_name','year','company_head','what_company'];
}
