import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../models/doctor';
import { DoctorStorageService } from '../../services/doctor-storage.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private doctorStorageService: DoctorStorageService
  ) {
    this.doctorStorageService.getUser().subscribe({
      next: (res) => {
        this.doctors = res;
        console.log(this.doctors);
      },
    });
  }

  ngOnInit() {}
}
