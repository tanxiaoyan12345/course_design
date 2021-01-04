<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Home extends Controller
{
	public function welcome(){
		return view();
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
		
		public function selllist($username){
			//模型方法查看
			// 查询员工数据 并且每页显示10条数据
			global $uuu;
			$uuu=$username;
			$personID=Db::table('person')->where('personName',$username)->find()['personID'];
			$list = Db::name('sell')->where('personID',$personID)->paginate(10);
			// 把分页数据赋值给模板变量list
			$this->assign('list', $list);
			$sql = "select * from sell where personID = '{$personID}'";
			$count = Db::execute($sql);			
			$this->assign('count', $count);
			return $this->fetch('/Home/selllist');
			
		}
		public function mymovieslist(){
			//模型方法查看
			// 查询员工数据 并且每页显示10条数据
			$list = Db::name('movie')->paginate(10);
			// 把分页数据赋值给模板变量list
			$this->assign('list', $list);
			$sql = 'select * from movie';
			$count = Db::execute($sql);			
			$this->assign('count', $count);
			return $this->fetch('/Home/mymovieslist');
			
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
			public function selllistinfo($username,$info){
			// 		dump($info);
			// 		return 0;
			//global $uuu;
					$this->assign('info',$info);
					// 查询员工数据 并且每页显示10条数据
					$personID=Db::table('person')->where('personName',$username)->find()['personID'];
					$list = Db::name('sell')->where('personID',$personID)->paginate(10);
					// 把分页数据赋值给模板变量list
					$this->assign('list', $list);
					$sql = "select * from sell where personID = '{$personID}'";
					$count = Db::execute($sql);			
					$this->assign('count', $count);
					return $this->fetch('/Home/selllist');
				}
		public function mymovieslistinfo($info){
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
				return $this->fetch('/Home/mymovieslist');
			}
		public function personlist(){
			//模型方法查看
			// 查询员工数据 并且每页显示10条数据
			$list = Db::name('person')->paginate(10);
			// 把分页数据赋值给模板变量list
			$this->assign('list', $list);
			$sql = 'select * from person';
			$count = Db::execute($sql);			
			$this->assign('count', $count);
			return $this->fetch('/Home/personlist');			
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
		public function buy($username)
		{
			$this->assign('username', $username);
			return $this->fetch('Home/buy');
		}
		public function buyinfo($username,$info){
			$this->assign('info',$info);
			$this->assign('username', $username);
			return $this->fetch('Home/buy');
		}
		public function buy_add($username,$movieName,$payStyle)
		{
			$sum=Db::table('movie')->where('movieName',$movieName)->find()['movieRemain'];
			//减少库存
			if($sum==0)
			{
				$info='failed,Inventory shortage';
			}
			else
			{
				//改变库存表
				$sum=$sum-1;
				Db::table('movie')->where('movieName',$movieName)->update(['movieRemain' => $sum]);
				
				//物料种类是果树,改变garden表
				
				$personID=Db::table('person')->where('personName',$username)->find()['personID'];
				$movieID=Db::table('movie')->where('movieName',$movieName)->find()['movieID'];
				//添加物料使用表
				$sellinfo= model('sell');
				$sql = 'select * from sell';
				$count = Db::execute($sql);
				$count = $count + 1;
				$sellinfo->sellID=$count;
				
				$sellinfo->personID=$personID;
				$sellinfo->movieID=$movieID;
				$sellinfo->payStyle=$payStyle;
				$sellinfo->personName=$username;
				$sellinfo->movieName=$movieName;
				$sellinfo->save();
				$info='succeeded!';
			}
				
			$this->redirect("Home/buyinfo?username=$username","info=$info");
		}
		public function delete($sellID){
			$movieID=Db::table('sell')->where('sellID',$sellID)->find()['movieID'];
			$personName=Db::table('sell')->where('sellID',$sellID)->find()['personName'];
			$username=$personName;
			$sum=Db::table('movie')->where('movieID',$movieID)->find()['movieRemain'];
			$sum=$sum+1;
			Db::table('movie')->where('movieID',$movieID)->update(['movieRemain' => $sum]);
			$personinfo= model('sell');	
			
			$personinfo->where("sellID",$sellID)->delete();
			
			$this->redirect('Home/selllistinfo?username=$username','info=删除成功！');
		}
	
}