import { Component, OnInit } from '@angular/core';
import { DesafioService } from './desafio.component.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from '../../pipe/date.pipe';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css'],
  standalone: true,
  providers: [DesafioService, DateFormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class DesafioComponent implements OnInit {
  studentName: string = '';
  email: string = '';
  dataNascimento: string = '';
  sexo: string = 'M';
  students: any[] = [];
  formInvalid: boolean = false;
  displayedColumns: string[] = ['Nome', 'Email', 'DataNascimento', 'Sexo', 'Ações'];
  editingIndex: number | null = null;

  constructor(private desafioService: DesafioService, private dateFormatPipe: DateFormatPipe) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.students = this.desafioService.getLocalStudents();
      if (this.students.length === 0) {
        this.desafioService.getStudents().subscribe(data => {
          this.students = data;
          this.desafioService.saveStudents(this.students);
        });
      }
    }
  }

  onSave(form: NgForm): void {
    if (form.invalid) {
      this.formInvalid = true;
      return;
    }
    this.formInvalid = false;
    const formattedDate = this.dateFormatPipe.transform(this.dataNascimento, 'yyyy-MM-dd');
    const newStudent = {
      Nome: this.studentName,
      Email: this.email,
      DataNascimento: formattedDate,
      Sexo: this.sexo
    };
    if (this.editingIndex !== null) {
      this.students[this.editingIndex] = newStudent;
      this.editingIndex = null;
    } else {
      this.students.push(newStudent);
    }
    this.desafioService.saveStudents(this.students);
    this.studentName = '';
    this.email = '';
    this.dataNascimento = '';
    this.sexo = 'M';
    if (typeof window !== 'undefined' && window.localStorage) {
      this.students = this.desafioService.getLocalStudents();
    }
  }

  onEdit(student: any, index: number): void {
    this.studentName = student.Nome;
    this.email = student.Email;
    this.dataNascimento = student.DataNascimento.split('-').reverse().join('-'); 
    this.sexo = student.Sexo;
    this.editingIndex = index;
  }

  onDelete(student: any): void {
    this.students = this.students.filter((s) => s !== student);
    this.desafioService.saveStudents(this.students);
  }
}