<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;

class Movies extends Controller
{
    public function add()
    {
        return view();
	}
	
	public function addmovies($movieName,$movieTime,$moviePrice,$movieNum,$movieRemain)
	{
		
		$moviesinfo= model('movie');
		$sql = 'select * from movie';
		$count = Db::execute($sql);
		$count = $count + 1;
		$moviesinfo->movieID=$count;
		$moviesinfo->movieName=$movieName;
		$moviesinfo->movieTime=$movieTime;
		$moviesinfo->moviePrice=$moviePrice;
		$moviesinfo->movieNum=$movieNum;
		$moviesinfo->movieRemain=$movieRemain;
		$moviesinfo->save();	
		$this->redirect('Home/movieslistinfo','info=添加成功！');
	}
	// /Test/public/index/Books/updateinfo?id={$books.BID}
	public function updateinfo($id){
		$movies = Db::table('movie') ->where('movieID',$id)-> find();
		$this->assign('movie',$movies);
		return $this->fetch('Movies/update');
	}
	// Test/public/index/Books/delete?id={$books.BID}
	public function delete($id){
		$moviesinfo= model('movie');	
		$moviesinfo->where("movieID",$id)->delete();
		$this->redirect('Home/movieslistinfo','info=删除成功！');
	}

	public function update($id,$movieName,$movieTime,$moviePrice,$movieNum,$movieRemain)
	{
		$moviesinfo= model('movie');
		$moviesinfo=$moviesinfo->where('movieID', $id)->find();
		$moviesinfo->movieName=$movieName;
		$moviesinfo->movieTime=$movieTime;
		$moviesinfo->moviePrice=$moviePrice;
		$moviesinfo->movieNum=$movieNum;
		$moviesinfo->movieRemain=$movieRemain;
		$moviesinfo->save();	
		$this->redirect('Home/movieslistinfo','info=修改成功！');
	}
	
	public function query($Name){
			
			// 方法查询
			$query=array();				
			if($Name!=''){$query['movieName']=['like','%'.$Name.'%'];}
			$data = DB::table('movie')->where($query)->paginate(10, false, ['query' => Request::instance()->param(),]);
					$this -> assign("list", $data);
						$this -> assign("count", count($data));
				// 		dump($data);
				// 		dump(count($data));
				// 		return 0;
						return $this->fetch('Home/movieslist');
				}
		

	public function movieslist(){
		//模型方法查看
		// 查询员工数据 并且每页显示10条数据
		$list = Db::name('movie')->paginate(10);
		// 把分页数据赋值给模板变量list
		$this->assign('list', $list);
		$sql = 'select * from movie';
		$count = Db::execute($sql);			
		$this->assign('count', $count);
		return $this->fetch('/Home/movieslist');
		
	}
	public function movieslistinfo($info){
	// 		dump($info);
	// 		return 0;
			$this->assign('info',$info);
			// 查询员工数据 并且每页显示10条数据
			$list = Db::name('movie')->paginate(10);
			// 把分页数据赋值给模板变量list
			$this->assign('list', $list);
			$sql = 'select * from movie';
			$count = Db::execute($sql);			
			$this->assign('count', $count);
			return $this->fetch('/Home/movieslist');
		}
	
}