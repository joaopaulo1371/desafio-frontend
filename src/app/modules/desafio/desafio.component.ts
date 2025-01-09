import { Component, OnInit } from '@angular/core';
import { DesafioService } from './desafio.component.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css'],
  standalone: true,
  providers: [DesafioService],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
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

  constructor(private desafioService: DesafioService) {}

  ngOnInit(): void {
    this.students = this.desafioService.getLocalStudents();
    if (this.students.length === 0) {
      this.desafioService.getStudents().subscribe(data => {
        this.students = data;
        this.desafioService.saveStudents(this.students);
      });
    }
  }

  onSave(form: NgForm): void {
    if (form.invalid) {
      this.formInvalid = true;
      return;
    }
    this.formInvalid = false;
    const newStudent = {
      Nome: this.studentName,
      Email: this.email,
      DataNascimento: this.dataNascimento,
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
    // Recarregar a lista de alunos
    this.students = this.desafioService.getLocalStudents();
  }

  onEdit(student: any, index: number): void {
    this.studentName = student.Nome;
    this.email = student.Email;
    this.dataNascimento = student.DataNascimento;
    this.sexo = student.Sexo;
    this.editingIndex = index;
  }

  onDelete(student: any): void {
    this.students = this.students.filter((s) => s !== student);
    this.desafioService.saveStudents(this.students);
  }
}