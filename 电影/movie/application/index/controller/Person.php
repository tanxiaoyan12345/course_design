<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;

class Person extends Controller
{
    public function add()
    {
        return view();
	}
	
	public function addperson($personName,$personPassword,$personType)
	{
		
		$personinfo= model('person');
		$sql = 'select * from person';
		$count = Db::execute($sql);
		$count = $count + 1;
		$personinfo->personID=$count;
		$personinfo->personName=$personName;
		$personinfo->personPassword=$personPassword;
		$personinfo->personType=$personType;
		$personinfo->save();	
		$this->redirect('Home/personlistinfo','info=添加成功！');
	}
	
	public function updateinfo($id){
		$person = Db::table('person') ->where('personID',$id)-> find();
		$this->assign('person',$person);
		return $this->fetch('person/update');
	}
	// 
	public function delete($id){
		$personinfo= model('person');	
		$personinfo->where("personID",$id)->delete();
		$this->redirect('Home/personlistinfo','info=删除成功！');
	}

	public function update($id,$personName,$personPassword,$personType){
		$personinfo= model('person');
		$personinfo=$personinfo->where('personID', $id)->find();
		$personinfo->personName=$personName;
		$personinfo->personPassword=$personPassword;
		$personinfo->personType=$personType;
	
		
		$personinfo->save();	
		$this->redirect('Home/personlistinfo','info=修改成功！');
	}
		
	public function personlistinfo($info){
		// 		dump($info);
		// 		return 0;
				$this->assign('info',$info);
				// 查询员工数据 并且每页显示10条数据
				$list = Db::name('person')->paginate(10);
				// 把分页数据赋值给模板变量list
				$this->assign('list', $list);
				$sql = 'select * from person';
				$count = Db::execute($sql);			
				$this->assign('count', $count);
				return $this->fetch('/Home/personlist');
			}
	public function query($Name){
				
			// 方法查询
			$query=array();				
			if($Name!=''){$query['personName']=['like','%'.$Name.'%'];}
			
			$data = DB::table('person')->where($query)->paginate(10, false, ['query' => Request::instance()->param(),]);
			$this -> assign("list", $data);
			$this -> assign("count", count($data));
	// 		dump($data);
	// 		dump(count($data));
	// 		return 0;
			return $this->fetch('Home/personlist');
}}