import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: 'Bixo Grilo',
    data: '27/09/2017',
    desc: 'Bixo grilo é nós',
    likes: 100,
    comments: 10,
    time_comments: '27 Agosto'
    }

  public nome_usuario:string = "JEFFERSON VAR";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getMovies().subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log(error);
      }
    )
  }

}
