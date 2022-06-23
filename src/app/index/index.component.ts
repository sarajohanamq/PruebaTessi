import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../_service/usuarios.service';

import { User } from '../_model/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'position', 'salary', 'ver'];

  searchKey: string = '';
  registros:User[] = [];
  dataSource:any;
  constructor(public dialog: MatDialog,private usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data: any)=>{

      this.registros=data;
      this.dataSource = new MatTableDataSource(this.registros)


      console.log(this.dataSource);
    });
    this.dataSource = new MatTableDataSource(this.registros)
    this.applyFilter()
  }
  applyFilter(){
    if(this.searchKey.includes("@")){
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }else{
      let vacio="";
      this.dataSource.filter = vacio.trim().toLowerCase();
    }

  }
  edit(element:any){

    const dialogRef = this.dialog.open(DialogDetailsComponent, {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '60%',
      height: '',
      position: {
          top: '',
          bottom: '',
          left: '',
          right: '',

      },
      data: element,
      });
      dialogRef.afterClosed().subscribe(result => {
      });

  }
}
