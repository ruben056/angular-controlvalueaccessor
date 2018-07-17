import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dagmaandjaar',
  templateUrl: './dagmaandjaar.component.html',
  styleUrls: ['./dagmaandjaar.component.css']
})
export class DagmaandjaarComponent implements OnInit {

  private jaar: string;
  private maand: string;
  private dag: string;

  constructor() { }

  ngOnInit() {
  }

  dagChanged(dag: string): void{
    this.dag = dag;
    console.log(this.jaar+"/"+this.maand+"/"+this.dag);
  }

  maandChanged(maand: string): void{
    this.maand = maand;
    console.log(this.jaar+"/"+this.maand+"/"+this.dag);
  }

  jaarChanged(jaar: string): void{
    this.jaar = jaar;
    console.log(this.jaar+"/"+this.maand+"/"+this.dag);
  }

}
