import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafioComponent } from './desafio.component';
import { DesafioService } from './desafio.component.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DesafioComponent', () => {
  let component: DesafioComponent;
  let fixture: ComponentFixture<DesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DesafioComponent,        
        FormsModule,
        MatTableModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [DesafioService]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    
    fixture = TestBed.createComponent(DesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a student', () => {
    component.studentName = 'João Silve';
    component.email = 'joao.silva@mail.com';
    component.dataNascimento = '2000-01-01';
    component.sexo = 'M';
    component.onSave({ valid: true } as NgForm);

    expect(component.students.length).toBe(1);
    expect(component.students[0].Nome).toBe('João Silve');
    expect(component.students[0].DataNascimento).toBe('2000-01-01');
  });

  it('should edit a student', () => {
    
    component.students = [
      { Nome: 'João Silva', Email: 'joao.silva@mail.com', DataNascimento: '2000-01-01', Sexo: 'M' }
    ];
    
    component.onEdit(component.students[0], 0);
    
    
    component.studentName = 'Joana Silva';
    component.dataNascimento = '1999-12-31';
    component.onSave({ valid: true } as NgForm);

    
    expect(component.students.length).toBe(1);
    expect(component.students[0].Nome).toBe('Joana Silva');
    expect(component.students[0].DataNascimento).toBe('1999-12-31');
  });

  it('should delete a student', () => {
    
    component.students = [
      { Nome: 'João Silve', Email: 'joao.silva@mail.com', DataNascimento: '2000-01-01', Sexo: 'M' }
    ];
    
    component.onDelete(component.students[0]);

    expect(component.students.length).toBe(0);
  });
});