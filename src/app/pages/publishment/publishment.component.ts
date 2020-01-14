import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishment',
  templateUrl: './publishment.component.html',
  styleUrls: ['./publishment.component.css']
})
export class PublishmentComponent implements OnInit {
  public showComments=false;
  public comments=[
    {
      id: 1,
      name: 'Marian',
      comment: 'Hola marian saludos'
    },
    {
      id: 2,
      name: 'HOLLo',
      comment: 'Buenas tardes'
    },
    {
      id: 3,
      name: 'Juanito',
      comment: 'Buenas tardes'
    }
  ]
  public comment={
    input:'',
    name:'Mario',
    id: 0
  }

  constructor() { }

  ngOnInit() {
    
  }
  public toogleComments()
  {
    this.showComments=!this.showComments
  }

public sendMessage()
{ 
  this.comments.push(
    {
    name: this.comment.name,
    comment: this.comment.input,
    id:5
    }
  )

}
}
