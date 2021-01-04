<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        return $this->fetch('/Index/login');
	}
	
	public function login($username,$password,$usertype)
	{
		echo "sadsada";
		if($usertype == "管理员") //用户
		{
		$manager = Db::table('person')-> where('personName', $username) -> find();
		if ($manager['personPassword'] == $password && $manager['personType'] == "管理员") {
			$this->assign('personName',$username);
			return $this->fetch('/Index/home');
		}else{
			$this -> assign('info','登入失败！');
			return $this->fetch('/Index/login');
		}		
		}
		else if($usertype == "消费者")
		{
			echo "hahha";
			$manager = Db::table('person')-> where('personName', $username) -> find();
			echo "rrr";
			if ($manager['personPassword'] == $password && $manager['personType'] == "消费者") {
				$this->assign('personName',$username);
				return $this->fetch('/Index/consumer');
				}else{
					$this -> assign('info','登入失败！');
					return $this->fetch('/Index/login');
				}		
				
		}
	}
	
}
