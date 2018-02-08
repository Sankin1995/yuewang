<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $bar = M("internet_bar");
        $data = $bar->select();
        $this->assign('bar',$data);
        $this->display('index');
    }
}