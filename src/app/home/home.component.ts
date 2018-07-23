import { Component, OnInit } from '@angular/core';
import { UploadFile, UploadEvent, FileSystemFileEntry } from 'ngx-file-drop';
import * as XLSX from 'xlsx';​
import { EmployeeDataService } from '../services/employee-data.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files: UploadFile[] = [];
  public employees: Employee[];

  constructor(private employeeDataService: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeDataService.employees
      ? this.employeeDataService.employees : undefined;
  }

  public fileDropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.read(file);
        });
      }
    }
  }

  public read(file) {
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsBinaryString(file);
    }
    reader.onloadend = (e: any) => {
      const bstr: string = e.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const fileData = this.employeeDataService
        .processRowData(<any>(XLSX.utils.sheet_to_json(ws, { header: 10 })));
      this.employees = fileData.employees;
    };
  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }
}
