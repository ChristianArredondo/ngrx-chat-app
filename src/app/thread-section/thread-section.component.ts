import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private theadsService: ThreadsService) { }

  ngOnInit() {
    this.theadsService.loadUserThreads()
      .subscribe(v => console.log(v));
  }

}
