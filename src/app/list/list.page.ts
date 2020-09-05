import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  category: any;
  articles;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private activatedRoute: ActivatedRoute ,private httpService: HttpService ,  private loadingService: LoadingService,) {
   
  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category,'category');

    this.getcatorynews(this.category);
  }
 
getcatorynews(category){
  this.loadingService.present();
  this.httpService.getcategorynews(category).subscribe(data => {
    if(data){
 this.loadingService.dismiss();
    console.log(data);
    this.articles = data["articles"];
    }else{
       this.loadingService.dismiss();

    }
   
  },(err) => {
        //hideloading
      this.loadingService.dismiss();
      

}
)

}

  }