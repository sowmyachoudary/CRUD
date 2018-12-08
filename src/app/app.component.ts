import { Component } from '@angular/core';
import { Company } from './company';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 companies:Company[]=[
	{"empname":"Ravitheja","salary":"23237","deptname":"IT","designation":"developer"},
	{"empname":"Avinash","salary":"7345656","deptname":"Networking","designation":"Admin"},
	{"empname":"Narasimha Rao","salary":"7846767","deptname":"IT","designation":"java"},
	{"empname":"Mahesh","salary":"435435","deptname":"dfgfdgf","designation":"dfgdfg"},
	{"empname":"Nitesh","salary":"4534534","deptname":"fdgfhfh","designation":"sdfdfgdfh"}]
 
 isEditMode=false;
 isSaveMode=false;
 modemsg='save';
 companyform:Company=new Company("","","","");

 constructor(){
	 console.log(this.companies)
 }

	updateInfo(info:string,isEditMode:boolean,isSaveMode:boolean){
		console.log(`Comes here ${info},${isEditMode},${isSaveMode}`);
		this.isEditMode=isEditMode;
		this.isSaveMode=isSaveMode;
		this.modemsg=info;
	}
	
	populatedata(c){
		this.companyform=c;
		
	}
	
}