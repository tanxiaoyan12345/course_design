<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Register extends Controller
{
   
	public function register()
    {
        return view();
	}
	
	public function signup($username,$password)
	{
		//判断是否存在相同用户名
		echo "hh";
		$person_info= model('person');
		if($person_info->where("personName",$username)->find()){//存在相同用户名直接返回
			$this->assign('info','已存在相同用户名！');
			echo "yy";
		}
		else{
			$sql = 'select * from person';
			$count = Db::execute($sql);
			$count = $count + 1;
			$person_info->personID=$count;
			$person_info->personName=$username;
			$person_info->personPassword=$password;
			$person_info->personType="消费者";
			$person_info->save();
			$this->assign('info','注册成功！');
		}
		return $this->fetch('Index/login');
	}
}