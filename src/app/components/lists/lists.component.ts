import { Observable, Subscription, interval } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ListsService } from './../../services/lists.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnDestroy {

  lists: any[] = []
  timeOut = 1000*60
  radomPage = Math.ceil(Math.random() * 34)
  dataSource: MatTableDataSource<any[]>
  counterSubscription: Subscription
  columns = ['fact', 'length']
  constructor(private listsService: ListsService) { }

  ngOnInit(): void {
    this.getList()
    this.startCounter()
  }
  getList(curr=1){
    this.listsService.listsCat(curr).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.data)
    })
  }

  startCounter(){
    const counter = interval(this.timeOut)
    this.counterSubscription = counter.subscribe((value) => {
      console.log(value);
      this.getList(this.radomPage)
    })
  }

  refresh(){
    this.getList(this.radomPage)
    this.counterSubscription.unsubscribe()
    this.startCounter()
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
  }

}
