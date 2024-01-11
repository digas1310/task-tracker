import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent implements OnInit {
  tasks: Task[] = [];

  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor(private TaskService: TaskService) { }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(tasks => this.tasks=tasks);
  }
  
}
