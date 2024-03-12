import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { CompleteComponent } from './tasks/complete/complete.component';
import { ProgressComponent } from './tasks/progress/progress.component';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatGridListModule, TasksComponent, CompleteComponent, ProgressComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uptick-talent';
}
